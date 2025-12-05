import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  image: string;
  likes: number;
  featured: boolean;
  firstName?: string;
  lastName?: string;
}

export const useGallery = () => {
  const { toast } = useToast();
  
  // Mock data - will be replaced with backend API calls
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([
    {
      id: 1,
      title: "High Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop",
      likes: 245,
      featured: true,
      firstName: "Sofia",
      lastName: "Laurent"
    },
    {
      id: 2,
      title: "Urban Style Shoot",
      category: "Street Style",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop",
      likes: 189,
      featured: false,
      firstName: "Emma",
      lastName: "Rodriguez"
    },
    {
      id: 3,
      title: "Glamour Portrait",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop",
      likes: 312,
      featured: true,
      firstName: "Aria",
      lastName: "Chen"
    },
    {
      id: 4,
      title: "Editorial Campaign",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1200&fit=crop",
      likes: 276,
      featured: false,
      firstName: "Marcus",
      lastName: "Johnson"
    },
    {
      id: 5,
      title: "Runway Backstage",
      category: "Runway",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop",
      likes: 198,
      featured: false,
      firstName: "Isabella",
      lastName: "Martinez"
    }
  ]);

  const [editingPhoto, setEditingPhoto] = useState<GalleryPhoto | null>(null);

  const addPhoto = async (photoData: Partial<GalleryPhoto>, imageFile: File) => {
    // This will be replaced with backend API call
    const newPhoto: GalleryPhoto = {
      id: Math.max(...galleryPhotos.map(p => p.id), 0) + 1,
      title: photoData.title || 'Nouvelle Photo',
      category: photoData.category || 'General',
      image: URL.createObjectURL(imageFile), // Temporary local URL
      likes: 0,
      featured: photoData.featured || false,
      firstName: photoData.firstName || '',
      lastName: photoData.lastName || '',
    };
    
    setGalleryPhotos(prev => [...prev, newPhoto]);
    
    toast({
      title: "Photo ajoutée (temporaire)",
      description: "Connectez le backend pour sauvegarder en base de données",
    });
    
    return newPhoto;
  };

  const updatePhoto = async (id: number, updates: Partial<GalleryPhoto>) => {
    // This will be replaced with backend API call
    setGalleryPhotos(prev => 
      prev.map(photo => 
        photo.id === id 
          ? { ...photo, ...updates }
          : photo
      )
    );
    
    toast({
      title: "Photo modifiée (temporaire)",
      description: "Connectez le backend pour enregistrer les modifications",
    });
    
    setEditingPhoto(null);
  };

  const deletePhoto = async (id: number) => {
    // This will be replaced with backend API call
    const photoToDelete = galleryPhotos.find(p => p.id === id);
    
    setGalleryPhotos(prev => prev.filter(p => p.id !== id));
    
    toast({
      title: "Photo supprimée (temporaire)",
      description: `${photoToDelete?.title} a été supprimée temporairement`,
    });
  };

  const startEditing = (photo: GalleryPhoto) => {
    setEditingPhoto(photo);
  };

  const cancelEditing = () => {
    setEditingPhoto(null);
  };

  const toggleFeatured = async (id: number) => {
    const photo = galleryPhotos.find(p => p.id === id);
    if (photo) {
      await updatePhoto(id, { featured: !photo.featured });
    }
  };

  return {
    galleryPhotos,
    editingPhoto,
    addPhoto,
    updatePhoto,
    deletePhoto,
    startEditing,
    cancelEditing,
    toggleFeatured,
  };
};
