import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const ceo ={
    name: "Djootzie Daishat MONTERNA",
    role: "CEO & Fondatrice",
    image: "/public/CEO_img.jpeg",
    bio: "Visionnaire de l'industrie de la mode avec plus de 3 ans d'expérience. Djootzie a fondé Monterna Agency avec la mission de révolutionner le mannequinat en mettant l'accent sur l'authenticité et la diversité.",
    email: "catherine.dubois@monterna-agency.fr",
    achievements: ["Concour de miss", "concour de chant", "Defile de mode"]
  };

  const teamMembers = [
    {
      name: "Michelson PHILIPPE",
      role: "Graphic Designer",
      image: "/public/designer.jpg",
      bio: "Créatif et innovant, PHILIPE transforme les idées en visuels percutants. Spécialisé en design graphique, il crée des contenus qui captivent, communiquent efficacement et reflètent l’identité unique de chaque projet.",
      email: "sophie.martin@monterna-agency.fr"
    },
    {
      name: "Alexandre Rousseau",
      role: "Directeur Commercial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Spécialiste des relations clients et partenariats stratégiques avec les plus grandes marques.",
      email: "alexandre.rousseau@monterna-agency.fr"
    },
    {
      name: "Daphne RICHARD",
      role: "Styliste et Directrice Artistique",
      image: "/public/Daphne.jpg",
      bio: "Styliste passionnée par la mode et la création, Mlle RICHARD conçoit des tenues uniques alliant élégance et originalité. Toujours à l’affût des tendances, elle transforme chaque idée en style distinct et moderne.",
      email: "maria.santos@monterna-agency.fr"
    },
    {
      name: "Thomas Leblanc",
      role: "Responsable Casting",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert en casting et évaluation de talents, Thomas découvre les futures stars du mannequinat.",
      email: "thomas.leblanc@monterna-agency.fr"
    },
    {
      name: "Émilie Durand",
      role: "Coordinatrice Événements",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Organisatrice hors pair, Émilie coordonne tous nos événements et défilés.",
      email: "emilie.durand@monterna-agency.fr"
    },
    {
      name: "Nicolas CHARLES",
      role: "Responsable Digital",
      image: "/public/Nikola.jpeg",
      bio: "Expert en stratégie digitale et réseaux sociaux pour optimiser la visibilité de nos talents.",
      email: "nicolascharles124@gmail.com"
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
              Notre <span className="text-gold">Équipe</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Rencontrez les experts passionnés qui font de Monterna Agency l'une des agences 
              de mannequinat les plus respectées de l'industrie.
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Notre <span className="text-gold">Leadership</span>
              </h2>
            </div>

            <Card className="max-w-4xl mx-auto bg-gradient-dark border-gold/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-square lg:aspect-auto">
                    <img
                      src={ceo.image}
                      alt={ceo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-gold text-black-pure">CEO & Founder</Badge>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{ceo.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{ceo.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <Award className="w-5 h-5 text-gold mr-2" />
                        Réalisations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ceo.achievements.map((achievement, index) => (
                          <Badge key={index} variant="outline" className="border-gold/30 text-gold">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <a href="mailto:catherine.dubois@monterna-agency.fr" className="text-gold hover:text-gold-light transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                L'<span className="text-gold">Équipe</span> d'Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des professionnels dévoués qui travaillent ensemble pour faire briller nos talents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-gold transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 border-gold/30 text-gold">
                      {member.role}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{member.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex items-center space-x-3">
                      <a href={`mailto:${member.email}`} className="text-gold hover:text-gold-light transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-gold rounded-3xl p-12">
            <div className="max-w-2xl mx-auto">
              <Users className="w-16 h-16 text-black-pure mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-black-pure mb-4">
                Rejoignez Notre Équipe
              </h2>
              <p className="text-black-pure/80 mb-8">
                Vous partagez notre passion pour la mode et le mannequinat ? 
                Nous sommes toujours à la recherche de talents exceptionnels.
              </p>
              <Link to="/contact">
                <Button className="bg-black-pure text-gold px-8 py-3 hover:bg-black-soft">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;