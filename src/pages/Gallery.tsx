import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Heart, Share2, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Gallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);
  const { toast } = useToast();

  // Mock data for gallery photos
  const photos = [
    {
      id: 1,
      title: "High Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop",
      likes: 245
    },
    {
      id: 2,
      title: "Urban Style Shoot",
      category: "Street Style",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop",
      likes: 189
    },
    {
      id: 3,
      title: "Glamour Portrait",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop",
      likes: 312
    },
    {
      id: 4,
      title: "Editorial Campaign",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1200&fit=crop",
      likes: 276
    },
    {
      id: 5,
      title: "Runway Backstage",
      category: "Runway",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop",
      likes: 198
    },
    {
      id: 6,
      title: "Luxury Fashion",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&h=1200&fit=crop",
      likes: 421
    },
    {
      id: 7,
      title: "Natural Beauty",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
      likes: 367
    },
    {
      id: 8,
      title: "Artistic Portrait",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=1200&fit=crop",
      likes: 289
    },
    {
      id: 9,
      title: "Commercial Fashion",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1200&fit=crop",
      likes: 234
    },
    {
      id: 10,
      title: "Elegant Style",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop",
      likes: 298
    },
    {
      id: 11,
      title: "Beauty Close-up",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&h=1200&fit=crop",
      likes: 342
    },
    {
      id: 12,
      title: "Fashion Forward",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop",
      likes: 256
    },
    {
      id: 13,
      title: "Street Fashion",
      category: "Street Style",
      image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=800&h=1200&fit=crop",
      likes: 187
    },
    {
      id: 14,
      title: "Haute Couture",
      category: "Runway",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop",
      likes: 405
    },
    {
      id: 15,
      title: "Classic Beauty",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1200&fit=crop",
      likes: 321
    },
    {
      id: 16,
      title: "Modern Editorial",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1200&fit=crop",
      likes: 278
    },
    {
      id: 17,
      title: "Commercial Style",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&h=1200&fit=crop",
      likes: 213
    },
    {
      id: 18,
      title: "Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=800&h=1200&fit=crop",
      likes: 356
    }
  ];

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => Math.min(prev + 9, photos.length));
  };

  const hasMorePhotos = visiblePhotos < photos.length;

  const toggleLike = (photoId: number) => {
    setLikedPhotos((prev) => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleShare = (photo: typeof photos[0]) => {
    if (navigator.share) {
      navigator.share({
        title: photo.title,
        text: `Découvrez ${photo.title} sur Monterna Agency`,
        url: window.location.href,
      }).catch(() => {
        toast({
          title: "Copié !",
          description: "Le lien a été copié dans le presse-papiers",
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Copié !",
        description: "Le lien a été copié dans le presse-papiers",
      });
    }
  };

  const handleDownload = (photo: typeof photos[0]) => {
    toast({
      title: "Téléchargement",
      description: `Téléchargement de ${photo.title}...`,
    });
    // Simulate download
    const link = document.createElement('a');
    link.href = photo.image;
    link.download = `${photo.title}.jpg`;
    link.click();
  };

  const handleZoom = (photo: typeof photos[0]) => {
    window.open(photo.image, '_blank');
  };

  const filteredPhotos = selectedCategory === "Tous" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMoreFilteredPhotos = visiblePhotos < filteredPhotos.length;

  const categories = ["Tous", "Fashion", "Beauty", "Editorial", "Street Style", "Runway", "Commercial"];

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
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Galerie <span className="text-gold">Photos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Découvrez nos plus beaux shootings et campagnes de mode. Une collection exclusive de nos travaux les plus prestigieux.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="rounded-full"
                onClick={() => {
                  setSelectedCategory(category);
                  setVisiblePhotos(9);
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Photos Grid - Masonry style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPhotos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top Actions */}
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => toggleLike(photo.id)}
                          className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors"
                        >
                          <Heart 
                            className={`w-5 h-5 ${likedPhotos.includes(photo.id) ? 'fill-gold text-gold' : 'text-white'}`} 
                          />
                        </button>
                        <button 
                          onClick={() => handleShare(photo)}
                          className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors"
                        >
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                        <button 
                          onClick={() => handleDownload(photo)}
                          className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors"
                        >
                          <Download className="w-5 h-5 text-white" />
                        </button>
                      </div>
                      
                      {/* Bottom Info */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{photo.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/80">{photo.category}</span>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-gold fill-gold" />
                            <span className="text-sm text-white">{photo.likes}</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full mt-4" 
                          variant="outline"
                          onClick={() => handleZoom(photo)}
                        >
                          <ZoomIn className="w-4 h-4 mr-2" />
                          Voir en grand
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMoreFilteredPhotos && (
            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 border-gold/30 hover:border-gold"
                onClick={loadMorePhotos}
              >
                Charger plus de photos ({filteredPhotos.length - visiblePhotos} restantes)
              </Button>
            </div>
          )}

          {/* No results message */}
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucune photo dans cette catégorie pour le moment.
              </p>
            </div>
          )}

          {/* CTA to Models Page */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl border border-border/50 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Découvrez nos Mannequins
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explorez les profils de nos talents exceptionnels et découvrez leur portfolio complet.
            </p>
            <Link to="/nos-modeles">
              <Button variant="hero" size="lg">
                Voir les Profils
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;