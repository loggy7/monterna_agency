import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Camera, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Représentation de Talents",
      description: "Nous représentons les mannequins les plus prometteurs et expérimentés de l'industrie."
    },
    {
      icon: <Camera className="w-8 h-8 text-gold" />,
      title: "Castings & Bookings",
      description: "Organisation de castings professionnels et gestion complète des bookings."
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Développement de Carrière",
      description: "Accompagnement personnalisé pour développer et faire évoluer votre carrière."
    },
    {
      icon: <Trophy className="w-8 h-8 text-gold" />,
      title: "Collaborations Premium",
      description: "Partenariats exclusifs avec les plus grandes marques de mode internationales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-gold">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche complète pour révéler et développer le potentiel de chaque mannequin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre <span className="text-gold">Galerie</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos mannequins d'exception à travers une sélection de nos plus beaux shootings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50">
              <img 
                src="/placeholder.svg" 
                alt="Mannequin professionnel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Sofia Laurent</div>
                  <div className="text-white/80 text-sm">High Fashion</div>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50">
              <img 
                src="/placeholder.svg" 
                alt="Séance photo mode"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Emma Rodriguez</div>
                  <div className="text-white/80 text-sm">Commercial</div>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50">
              <img 
                src="/placeholder.svg" 
                alt="Portrait artistique"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Aria Chen</div>
                  <div className="text-white/80 text-sm">Editorial</div>
                </div>
              </div>
            </div>

            {/* Photo 4 - Visible on large screens */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50 hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Mode urbaine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Lucas Martin</div>
                  <div className="text-white/80 text-sm">Street Style</div>
                </div>
              </div>
            </div>

            {/* Photo 5 - Visible on large screens */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50 hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Shooting glamour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Maya Dubois</div>
                  <div className="text-white/80 text-sm">Glamour</div>
                </div>
              </div>
            </div>

            {/* Photo 6 - Visible on large screens */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-card/50 hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Portrait naturel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-semibold">Noah Petit</div>
                  <div className="text-white/80 text-sm">Natural</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/galerie">
              <Button variant="outline" size="lg" className="border-gold/30 hover:border-gold">
                <Camera className="w-5 h-5 mr-2" />
                Voir Toute la Galerie
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à commencer votre <span className="text-gold">carrière</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez Monterna Agency et faites partie de l'élite du mannequinat international.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Nous Contacter
              </Button>
            </Link>
            <Link to="/nos-modeles">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gold/30 hover:border-gold">
                Voir nos Talents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black-pure border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-gold mb-4">MONTERNA AGENCY</div>
              <p className="text-muted-foreground text-sm mb-4">
                L'excellence en mannequinat depuis 2008. Nous révélons les talents d'exception.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/monternaagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://pinterest.com/monternaagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/monternaagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-gold transition-colors">Accueil</Link></li>
                <li><Link to="/galerie" className="text-muted-foreground hover:text-gold transition-colors">Galerie</Link></li>
                <li><Link to="/nos-modeles" className="text-muted-foreground hover:text-gold transition-colors">Nos Modèles</Link></li>
                <li><Link to="/team" className="text-muted-foreground hover:text-gold transition-colors">Team</Link></li>
                <li><Link to="/a-propos" className="text-muted-foreground hover:text-gold transition-colors">À Propos</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-muted-foreground">Représentation de Talents</span></li>
                <li><span className="text-muted-foreground">Castings & Bookings</span></li>
                <li><span className="text-muted-foreground">Développement de Carrière</span></li>
                <li><span className="text-muted-foreground">Collaborations Premium</span></li>
                <li><Link to="/candidature" className="text-muted-foreground hover:text-gold transition-colors">Devenir Mannequin</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Avenue baranquilla</li>
                <li className="text-muted-foreground">jacmel, Haiti</li>
                <li className="text-muted-foreground">+509 34 53 54 84</li>
                <li className="text-muted-foreground">contact@monternaagency.com</li>
                <li><Link to="/admin" className="text-muted-foreground hover:text-gold transition-colors">Administration</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2024 Monterna Agency. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-gold transition-colors">Mentions Légales</Link>
                <Link to="/politique-confidentialite" className="text-muted-foreground hover:text-gold transition-colors">Politique de Confidentialité</Link>
                <Link to="/conditions-generales" className="text-muted-foreground hover:text-gold transition-colors">CGU</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
