import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Models = () => {
  // Mock data for models - in a real app, this would come from Supabase
  const models = [
    {
      id: 1,
      name: "Sofia Laurent",
      category: "High Fashion",
      image: "/placeholder.svg",
      measurements: "175cm | 85-60-90",
      location: "Paris, France",
      featured: true,
      instagram: "@sofia_laurent",
      email: "sofia@monternaagency.com"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      category: "Commercial",
      image: "/placeholder.svg", 
      measurements: "168cm | 88-65-95",
      location: "Madrid, Spain",
      featured: false,
      instagram: "@emma_rodriguez",
      email: "emma@monternaagency.com"
    },
    {
      id: 3,
      name: "Aria Chen",
      category: "Editorial",
      image: "/placeholder.svg",
      measurements: "172cm | 82-58-87",
      location: "Tokyo, Japan", 
      featured: true,
      instagram: "@aria_chen",
      email: "aria@monternaagency.com"
    }
  ];

  const featuredModels = models.filter(model => model.featured);
  const otherModels = models.filter(model => !model.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nos <span className="text-gradient bg-gradient-gold bg-clip-text text-transparent">Modèles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre collection exclusive de talents exceptionnels. Chaque modèle représente l'excellence et l'élégance que nous recherchons.
            </p>
          </div>

          {/* Featured Models */}
          {featuredModels.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <Star className="w-6 h-6 text-gold mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Modèles Vedettes</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredModels.map((model) => (
                  <Card key={model.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={model.image} 
                        alt={model.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gold/20 text-gold border-gold/30">
                          <Star className="w-3 h-3 mr-1" />
                          Vedette
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{model.name}</h3>
                      <Badge variant="secondary" className="mb-3">{model.category}</Badge>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {model.location}
                        </div>
                        <div>{model.measurements}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Models */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Tous nos Modèles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherModels.map((model) => (
                <Card key={model.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/30 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">{model.name}</h3>
                    <Badge variant="secondary" className="text-xs mb-2">{model.category}</Badge>
                    
                    <div className="space-y-1 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {model.location}
                      </div>
                      <div>{model.measurements}</div>
                    </div>

                    <div className="flex gap-1">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Instagram className="w-3 h-3 mr-1" />
                        IG
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Mail className="w-3 h-3 mr-1" />
                        Mail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-gold/10 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez notre Agence
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vous avez le potentiel pour devenir notre prochain talent ? Soumettez votre candidature et rejoignez notre famille de modèles d'exception.
            </p>
            <Link to="/candidature">
              <Button variant="hero" size="lg">
                Postuler Maintenant
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Models;