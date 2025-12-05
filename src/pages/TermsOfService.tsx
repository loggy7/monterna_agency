import Header from '@/components/Header';
import { ArrowLeft, FileText, AlertTriangle, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-gold/20 mb-6">
              <FileText className="w-4 h-4 text-gold mr-2" />
              <span className="text-sm font-medium text-gold">Conditions d'Utilisation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conditions Générales <span className="text-gold">d'Utilisation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En utilisant nos services, vous acceptez les conditions générales d'utilisation ci-dessous. 
              Veuillez les lire attentivement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Règles Claires</h3>
                <p className="text-sm text-muted-foreground">Des conditions transparentes et compréhensibles</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <Users2 className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Droits & Devoirs</h3>
                <p className="text-sm text-muted-foreground">Définition claire des droits et obligations</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Responsabilités</h3>
                <p className="text-sm text-muted-foreground">Cadre légal et limitation de responsabilité</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">1. Objet et Acceptation</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-foreground">Date de dernière mise à jour :</strong> 1er janvier 2024
                </p>
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web 
                  d'Monterna Agency et de ses services. En accédant à notre site ou en utilisant nos services, 
                  vous acceptez d'être lié par ces conditions.
                </p>
                <p>
                  Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre site web 
                  ou nos services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">2. Définitions</h2>
              <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                <div className="space-y-3">
                  <div>
                    <strong className="text-foreground">« Nous », « Notre », « Monterna Agency » :</strong> 
                    Monterna Agency SARL, société de représentation de mannequins
                  </div>
                  <div>
                    <strong className="text-foreground">« Vous », « Utilisateur » :</strong> 
                    Toute personne physique ou morale utilisant nos services
                  </div>
                  <div>
                    <strong className="text-foreground">« Services » :</strong> 
                    L'ensemble des prestations proposées par Monterna Agency
                  </div>
                  <div>
                    <strong className="text-foreground">« Site » :</strong> 
                    Le site web accessible à l'adresse www.monterna-agency.fr
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">3. Accès au Site et Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1. Conditions d'accès</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Le site est accessible 24h/24, 7j/7, sauf interruption programmée ou technique</li>
                    <li>L'accès est gratuit, seuls les coûts de connexion internet restent à votre charge</li>
                    <li>Vous devez avoir au moins 16 ans pour utiliser nos services</li>
                    <li>Les mineurs doivent obtenir l'autorisation de leurs représentants légaux</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2. Inscription et compte utilisateur</h3>
                  <p>
                    Pour certains services, une inscription peut être requise. Vous vous engagez à 
                    fournir des informations exactes, complètes et à jour. Vous êtes responsable de 
                    la confidentialité de vos identifiants de connexion.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">4. Nos Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.1. Représentation de mannequins</h3>
                  <p>
                    Nous représentons des mannequins professionnels et organisons des prestations 
                    pour diverses marques et clients. Nos services incluent :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Sélection et représentation de talents</li>
                    <li>Organisation de castings et bookings</li>
                    <li>Négociation de contrats</li>
                    <li>Développement de carrière</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4.2. Candidatures</h3>
                  <p>
                    Nous acceptons les candidatures de personnes souhaitant devenir mannequins. 
                    La sélection se fait selon nos critères professionnels. Aucune garantie 
                    d'acceptation n'est donnée.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">5. Obligations de l'Utilisateur</h2>
              <div className="space-y-4">
                <p className="font-semibold text-foreground">Vous vous engagez à :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Usage loyal</h4>
                    <p className="text-sm">Utiliser le site de manière conforme à sa destination</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Informations exactes</h4>
                    <p className="text-sm">Fournir des données véridiques et à jour</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Respect des lois</h4>
                    <p className="text-sm">Respecter la législation française et internationale</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Pas d'usage abusif</h4>
                    <p className="text-sm">Ne pas porter atteinte au fonctionnement du site</p>
                  </div>
                </div>
                
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-destructive mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Interdictions
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Diffuser du contenu illégal, diffamatoire ou offensant</li>
                    <li>• Usurper l'identité d'autrui</li>
                    <li>• Violer les droits de propriété intellectuelle</li>
                    <li>• Tenter de porter atteinte à la sécurité du site</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">6. Propriété Intellectuelle</h2>
              <div className="space-y-4">
                <p>
                  Tous les contenus présents sur le site (textes, images, logos, vidéos, etc.) 
                  sont protégés par les droits de propriété intellectuelle et appartiennent à 
                  Monterna Agency ou à ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication ou adaptation 
                  de tout ou partie des éléments du site, quel que soit le moyen ou le procédé 
                  utilisé, est interdite sans autorisation écrite préalable.
                </p>
                <div className="bg-card/30 rounded-lg p-4 border border-border/50">
                  <p className="text-sm">
                    <strong className="text-foreground">Exception :</strong> Vous pouvez consulter et imprimer 
                    les pages du site pour un usage personnel et non commercial.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">7. Limitation de Responsabilité</h2>
              <div className="space-y-4">
                <p>
                  Dans les limites autorisées par la loi, Monterna Agency ne saurait être tenue 
                  responsable des dommages directs ou indirects résultant de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'utilisation ou l'impossibilité d'utiliser le site</li>
                  <li>Les interruptions de service</li>
                  <li>Les erreurs ou omissions dans les contenus</li>
                  <li>Les virus ou autres éléments nuisibles</li>
                  <li>Les actes de tiers</li>
                </ul>
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-4">
                  <p className="text-sm text-gold">
                    <strong>Important :</strong> Cette limitation ne s'applique pas aux dommages 
                    résultant d'une faute lourde ou intentionnelle de notre part.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">8. Données Personnelles</h2>
              <p>
                Le traitement de vos données personnelles est régi par notre 
                <Link to="/politique-confidentialite" className="text-gold hover:underline mx-1">
                  Politique de Confidentialité
                </Link> 
                qui fait partie intégrante des présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">9. Modification des CGU</h2>
              <div className="space-y-4">
                <p>
                  Nous nous réservons le droit de modifier les présentes CGU à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur le site.
                </p>
                <p>
                  Il vous appartient de consulter régulièrement la version en vigueur. 
                  Votre utilisation continue du site après modification vaut acceptation 
                  des nouvelles conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">10. Résiliation</h2>
              <div className="space-y-4">
                <p>
                  Nous pouvons suspendre ou résilier votre accès au site à tout moment, 
                  avec ou sans préavis, en cas de violation des présentes CGU.
                </p>
                <p>
                  Vous pouvez cesser d'utiliser le site à tout moment. En cas de compte 
                  utilisateur, vous pouvez demander sa suppression.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">11. Droit Applicable et Juridiction</h2>
              <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Droit applicable :</strong> 
                    Les présentes CGU sont soumises au droit français.
                  </p>
                  <p>
                    <strong className="text-foreground">Juridiction :</strong> 
                    En cas de litige, les tribunaux de Paris sont seuls compétents.
                  </p>
                  <p>
                    <strong className="text-foreground">Médiation :</strong> 
                    Avant tout recours judiciaire, nous nous efforçons de résoudre 
                    les litiges à l'amiable.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">12. Contact</h2>
              <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                <p className="mb-4">
                  Pour toute question relative aux présentes CGU, contactez-nous :
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-foreground">Email :</strong> contact@allure-agency.fr</p>
                  <p><strong className="text-foreground">Téléphone :</strong> +33 1 42 96 12 34</p>
                  <p><strong className="text-foreground">Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;