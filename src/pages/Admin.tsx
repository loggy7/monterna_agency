import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Lock, ArrowLeft, Upload, X, Save, Eye, EyeOff, Camera, Star } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { FileUpload } from '@/components/FileUpload';
import { useModels } from '@/hooks/useModels';
import { useGallery } from '@/hooks/useGallery';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [signupForm, setSignupForm] = useState({ username: '', password: '', confirmPassword: '' });
  const [showSignup, setShowSignup] = useState(false);
  const [adminExists, setAdminExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const { models, editingModel, addModel, updateModel, deleteModel, startEditing, cancelEditing } = useModels();
  const { galleryPhotos, editingPhoto, addPhoto, updatePhoto, deletePhoto, startEditing: startEditingPhoto, cancelEditing: cancelEditingPhoto, toggleFeatured } = useGallery();

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("adminAccounts") || "[]");
    setAdminExists(accounts.length > 0);
  }, []);

  // Gallery photo form state
  const [galleryPhotoFile, setGalleryPhotoFile] = useState<File | null>(null);
  const [galleryPhotoData, setGalleryPhotoData] = useState({
    firstName: '',
    lastName: '',
    category: '',
    featured: false,
  });

  // New model form state
  const [newModelHeadshot, setNewModelHeadshot] = useState<File | null>(null);
  const [newModelFullBody, setNewModelFullBody] = useState<File | null>(null);
  const [newModelData, setNewModelData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    birthDate: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    educationLevel: '',
    category: '',
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    skinColor: '',
    clothingSize: '',
    shoeSize: '',
    bust: '',
    waist: '',
    hips: '',
    skills: '',
  });

  // Delete confirmation dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [modelToDelete, setModelToDelete] = useState<number | null>(null);
  
  // Gallery photo delete confirmation
  const [deletePhotoDialogOpen, setDeletePhotoDialogOpen] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState<number | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const accounts = JSON.parse(localStorage.getItem("adminAccounts") || "[]");
    const account = accounts.find(
      (acc: any) => acc.username === loginForm.username && acc.password === loginForm.password
    );
    
    if (account) {
      setIsAuthenticated(true);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'interface d'administration",
      });
    } else {
      toast({
        title: "Erreur de connexion",
        description: "Nom d'utilisateur ou mot de passe incorrect",
        variant: "destructive",
      });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
      });
      return;
    }

    if (signupForm.password.length < 6) {
      toast({
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 6 caractères",
        variant: "destructive",
      });
      return;
    }

    const accounts = JSON.parse(localStorage.getItem("adminAccounts") || "[]");
    
    if (accounts.find((acc: any) => acc.username === signupForm.username)) {
      toast({
        title: "Erreur",
        description: "Ce nom d'utilisateur existe déjà",
        variant: "destructive",
      });
      return;
    }

    accounts.push({
      username: signupForm.username,
      password: signupForm.password,
    });
    
    localStorage.setItem("adminAccounts", JSON.stringify(accounts));
    setAdminExists(true);
    setShowSignup(false);
    setSignupForm({ username: '', password: '', confirmPassword: '' });
    
    toast({
      title: "Compte créé",
      description: "Vous pouvez maintenant vous connecter",
    });
  };

  const handleAddGalleryPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!galleryPhotoFile) {
      toast({
        title: "Photo requise",
        description: "Veuillez ajouter une photo",
        variant: "destructive",
      });
      return;
    }

    // Add photo to gallery
    await addPhoto(galleryPhotoData, galleryPhotoFile);
    
    // Reset form
    setGalleryPhotoData({
      firstName: '',
      lastName: '',
      category: '',
      featured: false,
    });
    setGalleryPhotoFile(null);
  };

  const handleAddNewModel = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newModelHeadshot || !newModelFullBody) {
      toast({
        title: "Photos requises",
        description: "Veuillez ajouter les deux photos (Portrait et Photo en Pied)",
        variant: "destructive",
      });
      return;
    }

    // Convert string values to numbers where needed
    const modelData = {
      ...newModelData,
      age: parseInt(newModelData.age) || 0,
      height: parseInt(newModelData.height) || 0,
      weight: newModelData.weight ? parseInt(newModelData.weight) : undefined,
      bust: newModelData.bust ? parseInt(newModelData.bust) : undefined,
      waist: newModelData.waist ? parseInt(newModelData.waist) : undefined,
      hips: newModelData.hips ? parseInt(newModelData.hips) : undefined,
    };

    await addModel(modelData);
    
    // Reset form
    setNewModelData({
      firstName: '',
      lastName: '',
      nickname: '',
      birthDate: '',
      age: '',
      city: '',
      phone: '',
      email: '',
      educationLevel: '',
      category: '',
      height: '',
      weight: '',
      eyeColor: '',
      hairColor: '',
      skinColor: '',
      clothingSize: '',
      shoeSize: '',
      bust: '',
      waist: '',
      hips: '',
      skills: '',
    });
    setNewModelHeadshot(null);
    setNewModelFullBody(null);
  };

  const handleDeleteModel = (id: number) => {
    setModelToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (modelToDelete !== null) {
      await deleteModel(modelToDelete);
      setDeleteDialogOpen(false);
      setModelToDelete(null);
    }
  };

  const handleDeletePhoto = (id: number) => {
    setPhotoToDelete(id);
    setDeletePhotoDialogOpen(true);
  };

  const confirmDeletePhoto = async () => {
    if (photoToDelete !== null) {
      await deletePhoto(photoToDelete);
      setDeletePhotoDialogOpen(false);
      setPhotoToDelete(null);
    }
  };

  // If not authenticated, show login/signup form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl">
                    {showSignup ? "Créer un compte administrateur" : "Administration"}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {showSignup 
                      ? "Créez votre compte pour accéder à l'interface d'administration"
                      : "Connectez-vous pour accéder au panneau d'administration"
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  {showSignup ? (
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div>
                        <Label htmlFor="signup-username">Nom d'utilisateur</Label>
                        <Input
                          id="signup-username"
                          value={signupForm.username}
                          onChange={(e) => setSignupForm(prev => ({ ...prev, username: e.target.value }))}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">Mot de passe</Label>
                        <div className="relative mt-2">
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            value={signupForm.password}
                            onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                            className="pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="signup-confirm">Confirmer le mot de passe</Label>
                        <div className="relative mt-2">
                          <Input
                            id="signup-confirm"
                            type={showConfirmPassword ? "text" : "password"}
                            value={signupForm.confirmPassword}
                            onChange={(e) => setSignupForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        Créer le compte
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowSignup(false)}
                        className="w-full"
                      >
                        Retour à la connexion
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <Label htmlFor="username">Nom d'utilisateur</Label>
                        <Input
                          id="username"
                          value={loginForm.username}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                          id="password"
                          type="password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                          className="mt-2"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Se connecter
                      </Button>
                      {!adminExists && (
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowSignup(true)}
                          className="w-full"
                        >
                          Créer un compte
                        </Button>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main admin interface
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>
              <h1 className="text-3xl font-bold">
                Panneau <span className="text-gold">d'Administration</span>
              </h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              className="border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              Se déconnecter
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Add Gallery Photo Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-gold" />
                  Ajouter une Photo à la Galerie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddGalleryPhoto} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gallery-firstname">Prénom *</Label>
                      <Input 
                        id="gallery-firstname"
                        value={galleryPhotoData.firstName}
                        onChange={(e) => setGalleryPhotoData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="gallery-lastname">Nom *</Label>
                      <Input 
                        id="gallery-lastname"
                        value={galleryPhotoData.lastName}
                        onChange={(e) => setGalleryPhotoData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="gallery-category">Catégorie *</Label>
                    <Input 
                      id="gallery-category"
                      value={galleryPhotoData.category}
                      onChange={(e) => setGalleryPhotoData(prev => ({ ...prev, category: e.target.value }))}
                      required
                    />
                  </div>
                  <FileUpload
                    label="Photo"
                    value={galleryPhotoFile}
                    onChange={setGalleryPhotoFile}
                    accept="image/*"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={galleryPhotoData.featured}
                      onChange={(e) => setGalleryPhotoData(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 accent-gold"
                    />
                    <Label htmlFor="featured">Photo vedette</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Ajouter à la Galerie
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Add New Model Form - CONTINUED IN NEXT MESSAGE */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-gold" />
                  Ajouter un Nouveau Mannequin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddNewModel} className="space-y-6">
                  {/* 1. Informations Personnelles */}
                  <div>
                    <h3 className="font-semibold mb-4">1. Informations Personnelles</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Prénom *</Label>
                          <Input 
                            value={newModelData.firstName}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, firstName: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label>Nom *</Label>
                          <Input 
                            value={newModelData.lastName}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, lastName: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Surnom</Label>
                          <Input 
                            value={newModelData.nickname}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, nickname: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Date de naissance *</Label>
                          <Input 
                            type="date"
                            value={newModelData.birthDate}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, birthDate: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Âge *</Label>
                          <Input 
                            type="number"
                            value={newModelData.age}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, age: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label>Ville *</Label>
                          <Input 
                            value={newModelData.city}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, city: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Téléphone *</Label>
                          <Input 
                            type="tel"
                            value={newModelData.phone}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label>Email</Label>
                          <Input 
                            type="email"
                            value={newModelData.email}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Niveau d'études</Label>
                          <Input 
                            value={newModelData.educationLevel}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, educationLevel: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Catégorie *</Label>
                          <Input 
                            value={newModelData.category}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, category: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. Physique */}
                  <div>
                    <h3 className="font-semibold mb-4">2. Physique</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Taille (cm) *</Label>
                          <Input 
                            type="number"
                            value={newModelData.height}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, height: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label>Poids (kg)</Label>
                          <Input 
                            type="number"
                            value={newModelData.weight}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, weight: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>Couleur yeux</Label>
                          <Input 
                            value={newModelData.eyeColor}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, eyeColor: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Couleur cheveux</Label>
                          <Input 
                            value={newModelData.hairColor}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, hairColor: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Couleur peau</Label>
                          <Input 
                            value={newModelData.skinColor}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, skinColor: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Taille vêtements</Label>
                          <Input 
                            value={newModelData.clothingSize}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, clothingSize: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Pointure</Label>
                          <Input 
                            value={newModelData.shoeSize}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, shoeSize: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>Poitrine (cm)</Label>
                          <Input 
                            type="number"
                            value={newModelData.bust}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, bust: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Taille (cm)</Label>
                          <Input 
                            type="number"
                            value={newModelData.waist}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, waist: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label>Hanches (cm)</Label>
                          <Input 
                            type="number"
                            value={newModelData.hips}
                            onChange={(e) => setNewModelData(prev => ({ ...prev, hips: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Talents */}
                  <div>
                    <h3 className="font-semibold mb-4">3. Talents</h3>
                    <div>
                      <Label>Compétences</Label>
                      <textarea 
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={newModelData.skills}
                        onChange={(e) => setNewModelData(prev => ({ ...prev, skills: e.target.value }))}
                        placeholder="Décrivez les compétences et talents du mannequin..."
                      />
                    </div>
                  </div>

                  {/* 4. Photos */}
                  <div>
                    <h3 className="font-semibold mb-4">4. Photos</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>Portrait (Headshot) *</Label>
                        <FileUpload
                          label=""
                          value={newModelHeadshot}
                          onChange={setNewModelHeadshot}
                          accept="image/*"
                        />
                      </div>
                      <div>
                        <Label>Photo en Pied (Full Body) *</Label>
                        <FileUpload
                          label=""
                          value={newModelFullBody}
                          onChange={setNewModelFullBody}
                          accept="image/*"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter le Mannequin
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Models List */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Mannequins Existants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {models.map((model) => (
                  <Card key={model.id} className="bg-card/50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{model.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{model.category}</p>
                          <div className="text-sm text-muted-foreground mt-2 space-y-1">
                            <p>{model.city} • {model.age} ans • {model.height}cm</p>
                            <p>{model.phone}</p>
                          </div>
                          <Badge className={model.status === 'active' ? 'bg-green-500/20 text-green-500 mt-2' : 'bg-gray-500/20 text-gray-500 mt-2'}>
                            {model.status === 'active' ? 'Actif' : 'Inactif'}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => startEditing(model)}
                            className="text-gold hover:text-gold/80"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteModel(model.id)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gallery Management */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 mr-2 text-gold" />
                Gestion de la Galerie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {galleryPhotos.map((photo) => (
                  <Card key={photo.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/30 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {photo.featured && (
                          <Badge className="bg-gold/20 text-gold border-gold/30 text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Vedette
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="text-xs">
                          {photo.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-sm mb-1 truncate">{photo.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {photo.firstName} {photo.lastName}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleFeatured(photo.id)}
                            className={`text-xs ${photo.featured ? 'text-gold' : 'text-muted-foreground'}`}
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {photo.featured ? 'Vedette' : 'Mettre en vedette'}
                          </Button>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => startEditingPhoto(photo)}
                            className="text-gold hover:text-gold/80 text-xs"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeletePhoto(photo.id)}
                            className="text-destructive hover:text-destructive/80 text-xs"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer ce mannequin ? Cette action ne peut pas être annulée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Photo Confirmation Dialog */}
      <AlertDialog open={deletePhotoDialogOpen} onOpenChange={setDeletePhotoDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cette photo de la galerie ? Cette action ne peut pas être annulée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeletePhoto} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Admin;
