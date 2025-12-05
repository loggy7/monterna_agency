import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Navigate to models or gallery based on query
      if (query.toLowerCase().includes('modèle') || query.toLowerCase().includes('mannequin')) {
        navigate('/nos-modeles');
      } else if (query.toLowerCase().includes('galerie') || query.toLowerCase().includes('photo')) {
        navigate('/galerie');
      } else {
        navigate('/nos-modeles');
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-gold/20 mb-8">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gold">Agence de Mode Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            MONTERNA
            <span className="block text-gold">AGENCY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Révélez votre potentiel avec l'agence de mannequinat la plus prestigieuse. 
            Nous transformons les rêves en carrières exceptionnelles.
          </p>

          {/* Search Bar */}
          <div className="mb-8 max-w-lg mx-auto">
            <SearchBar 
              placeholder="Rechercher nos modèles, galerie..." 
              onSearch={handleSearch}
              className="w-full"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/nos-modeles">
              <Button size="lg" className="group text-lg px-8 py-6">
                Découvrir nos Talents
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/candidature">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gold/30 hover:border-gold">
                Devenir Mannequin
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Mannequins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15</div>
              <div className="text-sm text-muted-foreground">Années</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Marques</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
    </section>
  );
};

export default Hero;