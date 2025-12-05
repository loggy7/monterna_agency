import { z } from 'zod';

// Application Form Schema
export const applicationSchema = z.object({
  // Personal Information
  firstName: z.string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères'),
  lastName: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  nickname: z.string().max(50).optional(),
  birthDate: z.string().min(1, 'La date de naissance est requise'),
  email: z.string()
    .email('Email invalide')
    .max(255, 'L\'email ne peut pas dépasser 255 caractères'),
  phone: z.string()
    .min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres')
    .max(20, 'Le numéro de téléphone ne peut pas dépasser 20 caractères'),
  age: z.number()
    .min(16, 'Vous devez avoir au moins 16 ans')
    .max(50, 'L\'âge ne peut pas dépasser 50 ans'),
  city: z.string()
    .min(2, 'La ville est requise')
    .max(100),
  education: z.string().max(100).optional(),
  category: z.string().min(1, 'La catégorie est requise'),

  // Physical attributes
  height: z.number()
    .min(150, 'La taille minimale est 150cm')
    .max(220, 'La taille maximale est 220cm'),
  weight: z.number().min(40).max(150).optional(),
  eyeColor: z.string().max(50).optional(),
  hairColor: z.string().max(50).optional(),
  skinColor: z.string().max(50).optional(),
  clothingSize: z.string().max(20).optional(),
  shoeSize: z.string().max(10).optional(),
  bust: z.string().max(10).optional(),
  waist: z.string().max(10).optional(),
  hips: z.string().max(10).optional(),

  // Experience
  experience: z.string().max(1000).optional(),
  skills: z.string().max(1000).optional(),
  description: z.string()
    .min(10, 'La description doit contenir au moins 10 caractères')
    .max(1000, 'La description ne peut pas dépasser 1000 caractères'),

  // Availability
  availability: z.string().max(100).optional(),
  canTravel: z.boolean(),
  interests: z.object({
    runway: z.boolean(),
    photoshoot: z.boolean(),
    advertising: z.boolean(),
    videoClip: z.boolean(),
    other: z.boolean(),
  }),
  otherInterests: z.string().max(200).optional(),

  // Terms
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter les conditions générales'
  }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

// Model Schema (for Admin)
export const modelSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis").max(50),
  lastName: z.string().min(2, "Le nom est requis").max(50),
  nickname: z.string().max(50).optional(),
  birthDate: z.string().min(1, "La date de naissance est requise"),
  age: z.number().min(16, "L'âge minimum est 16 ans").max(50),
  city: z.string().min(2, "La ville est requise").max(100),
  phone: z.string().min(10, "Le téléphone est requis").max(20),
  email: z.string().email("Email invalide").max(255).optional().or(z.literal("")),
  educationLevel: z.string().max(100).optional(),
  category: z.string().min(1, "La catégorie est requise"),
  // Physical
  height: z.number().min(150, "Le minimum est 150 cm").max(220, "Le maximum est 220 cm"),
  weight: z.number().min(40).max(150).optional(),
  eyeColor: z.string().max(50).optional(),
  hairColor: z.string().max(50).optional(),
  skinColor: z.string().max(50).optional(),
  clothingSize: z.string().max(20).optional(),
  shoeSize: z.string().max(10).optional(),
  bust: z.number().min(0).max(200).optional(),
  waist: z.number().min(0).max(200).optional(),
  hips: z.number().min(0).max(200).optional(),
  // Talents
  skills: z.string().max(1000).optional(),
  // Photos - these will be file paths
  headshot: z.string().optional(),
  fullBody: z.string().optional(),
});

export type ModelFormData = z.infer<typeof modelSchema>;

// Gallery Photo Schema
export const galleryPhotoSchema = z.object({
  title: z.string()
    .min(3, 'Le titre doit contenir au moins 3 caractères')
    .max(100, 'Le titre ne peut pas dépasser 100 caractères'),
  category: z.string().min(1, 'La catégorie est requise'),
  description: z.string().max(500).optional(),
  featured: z.boolean().optional(),
});

export type GalleryPhotoFormData = z.infer<typeof galleryPhotoSchema>;
