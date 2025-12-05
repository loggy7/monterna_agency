import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { FileUpload } from '@/components/FileUpload';
import { z } from 'zod';

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    birthDate: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    education: '',
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
    experience: '',
    skills: '',
    category: '',
    description: '',
    availability: '',
    canTravel: false,
    interests: {
      runway: false,
      photoshoot: false,
      advertising: false,
      videoClip: false,
      other: false
    },
    otherInterests: '',
    acceptTerms: false
  });

  const [headshotFile, setHeadshotFile] = useState<File | null>(null);
  const [fullBodyFile, setFullBodyFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Conditions requises",
        description: "Vous devez accepter les conditions générales",
        variant: "destructive",
      });
      return;
    }

    if (!headshotFile || !fullBodyFile) {
      toast({
        title: "Photos requises",
        description: "Veuillez ajouter les deux photos (portrait et en pied)",
        variant: "destructive",
      });
      return;
    }

    // Validate form data
    try {
      const validatedData = {
        ...formData,
        age: parseInt(formData.age),
        height: parseInt(formData.height),
        weight: formData.weight ? parseInt(formData.weight) : undefined,
      };

      setIsSubmitting(true);

      // TODO: When backend is connected, this will:
      // 1. Upload photos to Supabase Storage
      // 2. Save form data to Supabase database
      // 3. Send email notification to admin

      toast({
        title: "Backend requis",
        description: "Activez Lovable Cloud pour envoyer les candidatures par email",
        variant: "destructive",
      });

      console.log('Application Data:', validatedData);
      console.log('Headshot:', headshotFile);
      console.log('Full Body:', fullBodyFile);

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de la soumission",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "High Fashion", "Commercial", "Runway", "Editorial", 
    "Beauty", "Fitness", "Plus Size", "Petite"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-gold/20 mb-6">
                <Star className="w-4 h-4 text-gold mr-2" />
                <span className="text-sm font-medium text-gold">Candidature Mannequin</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Devenir <span className="text-gold">Mannequin</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rejoignez l'élite du mannequinat. Remplissez ce formulaire pour postuler 
                et faire partie de la famille Monterna Agency.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Formulaire de Candidature</CardTitle>
                <p className="text-muted-foreground">
                  Tous les champs marqués d'un * sont obligatoires
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Camera className="w-5 h-5 text-gold mr-2" />
                      Informations Personnelles
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">Prénom *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">Nom *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nickname" className="text-foreground">Surnom</Label>
                        <Input 
                          id="nickname" 
                          value={formData.nickname}
                          onChange={(e) => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="birthDate" className="text-foreground">Date de naissance *</Label>
                        <Input 
                          id="birthDate" 
                          type="date" 
                          required 
                          value={formData.birthDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age" className="text-foreground">Âge *</Label>
                        <Input 
                          id="age" 
                          type="number" 
                          required 
                          min="16"
                          max="50"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-foreground">Ville / Adresse *</Label>
                        <Input 
                          id="city" 
                          required 
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="Ville"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">Téléphone *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <Label htmlFor="education" className="text-foreground">Niveau d'études</Label>
                        <Input 
                          id="education" 
                          value={formData.education}
                          onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: Bac, Licence..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="text-foreground">Catégorie *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                          <SelectTrigger className="mt-2 bg-background/50 border-border focus:border-gold">
                            <SelectValue placeholder="Choisir une catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Physical Measurements */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Physique</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <Label htmlFor="height" className="text-foreground">Taille (cm) *</Label>
                        <Input 
                          id="height" 
                          type="number" 
                          required 
                          min="150"
                          max="220"
                          value={formData.height}
                          onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="175"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight" className="text-foreground">Poids (kg)</Label>
                        <Input 
                          id="weight" 
                          type="number" 
                          min="40"
                          max="150"
                          value={formData.weight}
                          onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="60"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eyeColor" className="text-foreground">Couleur des yeux</Label>
                        <Input 
                          id="eyeColor" 
                          value={formData.eyeColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, eyeColor: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: Marron"
                        />
                      </div>
                      <div>
                        <Label htmlFor="hairColor" className="text-foreground">Couleur des cheveux</Label>
                        <Input 
                          id="hairColor" 
                          value={formData.hairColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, hairColor: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: Noir"
                        />
                      </div>
                      <div>
                        <Label htmlFor="skinColor" className="text-foreground">Couleur de peau</Label>
                        <Input 
                          id="skinColor" 
                          value={formData.skinColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, skinColor: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: Claire"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clothingSize" className="text-foreground">Taille de vêtements</Label>
                        <Input 
                          id="clothingSize" 
                          value={formData.clothingSize}
                          onChange={(e) => setFormData(prev => ({ ...prev, clothingSize: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: S, M, L"
                        />
                      </div>
                      <div>
                        <Label htmlFor="shoeSize" className="text-foreground">Pointure</Label>
                        <Input 
                          id="shoeSize" 
                          type="number" 
                          value={formData.shoeSize}
                          onChange={(e) => setFormData(prev => ({ ...prev, shoeSize: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="ex: 38"
                        />
                      </div>
                    </div>

                    <h4 className="text-md font-semibold text-foreground mb-4">Mensurations</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="bust" className="text-foreground">Poitrine (cm)</Label>
                        <Input 
                          id="bust" 
                          type="number"
                          value={formData.bust}
                          onChange={(e) => setFormData(prev => ({ ...prev, bust: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="85"
                        />
                      </div>
                      <div>
                        <Label htmlFor="waist" className="text-foreground">Taille (cm)</Label>
                        <Input 
                          id="waist" 
                          type="number"
                          value={formData.waist}
                          onChange={(e) => setFormData(prev => ({ ...prev, waist: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="60"
                        />
                      </div>
                      <div>
                        <Label htmlFor="hips" className="text-foreground">Hanches (cm)</Label>
                        <Input 
                          id="hips" 
                          type="number"
                          value={formData.hips}
                          onChange={(e) => setFormData(prev => ({ ...prev, hips: e.target.value }))}
                          className="mt-2 bg-background/50 border-border focus:border-gold"
                          placeholder="90"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience & Description */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Talents / Expériences</h3>
                    
                    <div>
                      <Label htmlFor="experience" className="text-foreground">Expérience antérieure en tant que mannequin</Label>
                      <Textarea 
                        id="experience" 
                        rows={4}
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                        className="mt-2 bg-background/50 border-border focus:border-gold resize-none"
                        placeholder="Décrivez votre expérience précédente (débutant accepté)..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills" className="text-foreground">Compétences particulières</Label>
                      <Textarea 
                        id="skills" 
                        rows={3}
                        value={formData.skills}
                        onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                        className="mt-2 bg-background/50 border-border focus:border-gold resize-none"
                        placeholder="Danse, poses, expression faciale, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-foreground">Pourquoi voulez-vous devenir mannequin ? *</Label>
                      <Textarea 
                        id="description" 
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="mt-2 bg-background/50 border-border focus:border-gold resize-none"
                        placeholder="Parlez-nous de votre motivation, vos objectifs..."
                      />
                    </div>
                  </div>

                  {/* Availability & Interests */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Disponibilité & Intérêts</h3>
                    
                    <div>
                      <Label htmlFor="availability" className="text-foreground">Disponibilité</Label>
                      <Input 
                        id="availability" 
                        value={formData.availability}
                        onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                        className="mt-2 bg-background/50 border-border focus:border-gold"
                        placeholder="Temps plein, temps partiel, weekends..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="canTravel" 
                        checked={formData.canTravel}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, canTravel: !!checked }))}
                      />
                      <Label htmlFor="canTravel" className="text-sm text-foreground">
                        Êtes-vous disponible pour voyager ?
                      </Label>
                    </div>

                    <div>
                      <Label className="text-foreground mb-3 block">Intéressé(e) par :</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="runway" 
                            checked={formData.interests.runway}
                            onCheckedChange={(checked) => setFormData(prev => ({ 
                              ...prev, 
                              interests: { ...prev.interests, runway: !!checked }
                            }))}
                          />
                          <Label htmlFor="runway" className="text-sm text-foreground">Défilé de mode</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="photoshoot" 
                            checked={formData.interests.photoshoot}
                            onCheckedChange={(checked) => setFormData(prev => ({ 
                              ...prev, 
                              interests: { ...prev.interests, photoshoot: !!checked }
                            }))}
                          />
                          <Label htmlFor="photoshoot" className="text-sm text-foreground">Shooting photo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="advertising" 
                            checked={formData.interests.advertising}
                            onCheckedChange={(checked) => setFormData(prev => ({ 
                              ...prev, 
                              interests: { ...prev.interests, advertising: !!checked }
                            }))}
                          />
                          <Label htmlFor="advertising" className="text-sm text-foreground">Publicité</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="videoClip" 
                            checked={formData.interests.videoClip}
                            onCheckedChange={(checked) => setFormData(prev => ({ 
                              ...prev, 
                              interests: { ...prev.interests, videoClip: !!checked }
                            }))}
                          />
                          <Label htmlFor="videoClip" className="text-sm text-foreground">Clip vidéo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="other" 
                            checked={formData.interests.other}
                            onCheckedChange={(checked) => setFormData(prev => ({ 
                              ...prev, 
                              interests: { ...prev.interests, other: !!checked }
                            }))}
                          />
                          <Label htmlFor="other" className="text-sm text-foreground">Autres</Label>
                        </div>
                        {formData.interests.other && (
                          <Input 
                            id="otherInterests" 
                            value={formData.otherInterests}
                            onChange={(e) => setFormData(prev => ({ ...prev, otherInterests: e.target.value }))}
                            className="ml-6 bg-background/50 border-border focus:border-gold"
                            placeholder="Précisez..."
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Photos Requises</h3>
                    
                    <FileUpload
                      label="Headshot (Portrait)"
                      description="Photo de tête professionnelle"
                      required
                      value={headshotFile}
                      onChange={setHeadshotFile}
                    />

                    <FileUpload
                      label="Full Body (Photo en pied)"
                      description="Photo complète du corps"
                      required
                      value={fullBodyFile}
                      onChange={setFullBodyFile}
                    />
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: !!checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                      J'accepte les <Link to="/conditions-generales" className="text-gold hover:underline">conditions générales</Link> et 
                      la <Link to="/politique-confidentialite" className="text-gold hover:underline">politique de confidentialité</Link>. 
                      Je consens à ce que Monterna Agency utilise mes photos à des fins promotionnelles.
                    </Label>
                  </div>

                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive text-sm">
                      <strong>Backend requis :</strong> Pour soumettre votre candidature et recevoir une confirmation par email, 
                      activez Lovable Cloud.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Star className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma Candidature'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
