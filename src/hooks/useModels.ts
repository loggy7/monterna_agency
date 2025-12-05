import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface Model {
  id: number;
  name: string;
  category: string;
  status: 'active' | 'inactive';
  // Informations Personnelles
  firstName: string;
  lastName: string;
  nickname?: string;
  birthDate: string;
  age: number;
  city: string;
  phone: string;
  email?: string;
  educationLevel?: string;
  // Physique
  height: number; // cm
  weight?: number; // kg
  eyeColor?: string;
  hairColor?: string;
  skinColor?: string;
  clothingSize?: string;
  shoeSize?: string;
  bust?: number; // cm
  waist?: number; // cm
  hips?: number; // cm
  // Talents
  skills?: string;
  // Photos
  headshot?: string;
  fullBody?: string;
}

export const useModels = () => {
  const { toast } = useToast();
  
  // Mock data - will be replaced with Supabase queries
  const [models, setModels] = useState<Model[]>([
    { 
      id: 1, 
      name: "Sofia Laurent", 
      firstName: "Sofia",
      lastName: "Laurent",
      birthDate: "1998-05-15",
      age: 26,
      city: "Paris",
      phone: "+33 6 12 34 56 78",
      category: "High Fashion", 
      height: 178,
      status: "active" 
    },
    { 
      id: 2, 
      name: "Marcus Chen", 
      firstName: "Marcus",
      lastName: "Chen",
      birthDate: "1999-08-22",
      age: 24,
      city: "Lyon",
      phone: "+33 6 23 45 67 89",
      category: "Commercial", 
      height: 185,
      status: "active" 
    },
    { 
      id: 3, 
      name: "Isabella Rodriguez", 
      firstName: "Isabella",
      lastName: "Rodriguez",
      birthDate: "1997-03-10",
      age: 27,
      city: "Nice",
      phone: "+33 6 34 56 78 90",
      category: "Runway", 
      height: 180,
      status: "inactive" 
    },
  ]);

  const [editingModel, setEditingModel] = useState<Model | null>(null);

  const addModel = async (modelData: Partial<Model>) => {
    // This will be replaced with Supabase insert
    const newModel: Model = {
      id: Math.max(...models.map(m => m.id), 0) + 1,
      name: `${modelData.firstName} ${modelData.lastName}`,
      firstName: modelData.firstName || '',
      lastName: modelData.lastName || '',
      birthDate: modelData.birthDate || '',
      age: modelData.age || 0,
      city: modelData.city || '',
      phone: modelData.phone || '',
      height: modelData.height || 0,
      category: modelData.category || 'Commercial',
      status: 'active',
      ...modelData,
    };
    
    setModels(prev => [...prev, newModel]);
    
    toast({
      title: "Mannequin ajouté (temporaire)",
      description: "Connectez Lovable Cloud pour sauvegarder en base de données",
    });
    
    return newModel;
  };

  const updateModel = async (id: number, updates: Partial<Model>) => {
    // This will be replaced with Supabase update
    setModels(prev => 
      prev.map(model => 
        model.id === id 
          ? { ...model, ...updates, name: `${updates.firstName || model.firstName} ${updates.lastName || model.lastName}` }
          : model
      )
    );
    
    toast({
      title: "Modification effectuée (temporaire)",
      description: "Connectez Lovable Cloud pour enregistrer les modifications",
    });
    
    setEditingModel(null);
  };

  const deleteModel = async (id: number) => {
    // This will be replaced with Supabase delete
    const modelToDelete = models.find(m => m.id === id);
    
    setModels(prev => prev.filter(m => m.id !== id));
    
    toast({
      title: "Suppression effectuée (temporaire)",
      description: `${modelToDelete?.name} a été supprimé(e) temporairement`,
    });
  };

  const startEditing = (model: Model) => {
    setEditingModel(model);
  };

  const cancelEditing = () => {
    setEditingModel(null);
  };

  return {
    models,
    editingModel,
    addModel,
    updateModel,
    deleteModel,
    startEditing,
    cancelEditing,
  };
};
