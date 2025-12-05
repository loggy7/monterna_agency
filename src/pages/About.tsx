import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Award, Users, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, chaque collaboration et chaque opportunité que nous créons."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Diversité",
      description: "Nous célébrons la diversité sous toutes ses formes et représentons des talents de tous horizons."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: "Innovation",
      description: "Nous restons à la pointe des tendances et technologies pour offrir les meilleures opportunités."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Passion",
      description: "Notre passion pour la mode et le mannequinat guide chacune de nos décisions et actions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              À Propos <span className="text-gold">de Monterna Agency</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Depuis 2025, Montera Agency façonne l'avenir de l'industrie du mannequinat en découvrant, 
              développant et représentant les talents les plus prometteurs de la mode internationale.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2025 et lancé le 09/11/2025 par une équipe de professionnels passionnés de mode, Monterna Agency 
                  est née d'une vision simple : révéler le potentiel unique de chaque mannequin et 
                  créer des opportunités exceptionnelles dans l'industrie de la mode.
                </p>
                <p>
                  Au fil des années, nous avons bâti une réputation d'excellence en collaborant avec 
                  les plus grandes marques internationales et en lançant les carrières de nombreux 
                  mannequins qui brillent aujourd'hui sur les podiums du monde entier.
                </p>
                <p>
                  Notre approche personnalisée et notre engagement envers l'authenticité nous 
                  distinguent dans un secteur en constante évolution. Nous croyons que chaque 
                  personne a une beauté unique à partager avec le monde.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-gold rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-black-soft/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-black-pure">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">1 Années</h3>
                    <p className="text-lg">d'Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-foreground text-center mb-16">
              Nos <span className="text-gold">Valeurs</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group text-center hover:shadow-gold transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-dark rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Monterna Agency en <span className="text-gold">Chiffres</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">10+</div>
                <div className="text-muted-foreground">Mannequins Représentés</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">2+</div>
                <div className="text-muted-foreground">Marques Partenaires</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">1+</div>
                <div className="text-muted-foreground">Campagnes Réalisées</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">1</div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;