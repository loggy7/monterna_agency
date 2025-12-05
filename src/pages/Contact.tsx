import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais. Merci de nous avoir contactés.",
    });
  };

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
              Nous <span className="text-gold">Contacter</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Prêt à rejoindre l'élite du mannequinat ? Contactez-nous pour discuter de votre avenir dans l'industrie de la mode.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">Prénom</Label>
                      <Input 
                        id="firstName" 
                        required 
                        className="mt-2 bg-background/50 border-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Nom</Label>
                      <Input 
                        id="lastName" 
                        required 
                        className="mt-2 bg-background/50 border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="mt-2 bg-background/50 border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="mt-2 bg-background/50 border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Sujet</Label>
                    <Input 
                      id="subject" 
                      required 
                      placeholder="Ex: Candidature mannequin, Partenariat, Information..."
                      className="mt-2 bg-background/50 border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      rows={6}
                      placeholder="Parlez-nous de vous, de vos objectifs et de votre expérience..."
                      className="mt-2 bg-background/50 border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Informations de contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Adresse</p>
                        <p className="text-muted-foreground">
                          Avenue baranquilla<br />
                          Jacmel, Haiti
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Téléphone</p>
                        <p className="text-muted-foreground">+509 34 53 54 84</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">contact@monterna-agency.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Horaires</p>
                        <p className="text-muted-foreground">
                          Lun - Ven: 9h00 - 18h00<br />
                          Sam: 10h00 - 16h00<br />
                          Dim: Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-gold text-black-pure">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Prêt pour votre audition ?</h3>
                  <p className="mb-6">
                    Rejoignez nos casting ouverts tous les mardis de 14h à 17h. 
                    Apportez votre book et votre motivation !
                  </p>
                  <Button variant="outline" className="border-black-pure text-black-pure hover:bg-black-pure hover:text-gold">
                    Réserver un créneau
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;