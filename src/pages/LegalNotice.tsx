import Header from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Mentions <span className="text-gold">Légales</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du Site</h2>
              <div className="space-y-2">
                <p><strong>Raison sociale :</strong> Monterna Agency SARL</p>
                <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée</p>
                <p><strong>Capital social :</strong> 50 000 €</p>
                <p><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                <p><strong>RCS :</strong> Paris B 123 456 789</p>
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>Code APE/NAF :</strong> 7420Z (Activités photographiques)</p>
                <p><strong>TVA Intracommunautaire :</strong> FR12123456789</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Directeur de la Publication</h2>
              <p>Catherine Dubois, Présidente Directrice Générale de Monterna Agency</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
              <div className="space-y-2">
                <p><strong>Hébergeur :</strong> Lovable</p>
                <p><strong>Adresse :</strong> lovable.dev</p>
                <p>Ce site est hébergé par Lovable, plateforme de développement web.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <div className="space-y-2">
                <p><strong>Email :</strong> contact@monterna-agency.fr</p>
                <p><strong>Téléphone :</strong> +33 1 42 96 12 34</p>
                <p><strong>Adresse postale :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété Intellectuelle</h2>
              <div className="space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                  est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos figurant sur le site sont des marques déposées de Monterna Agency 
                  ou de ses partenaires. Toute reproduction totale ou partielle de ces marques ou logos 
                  effectuée à partir des éléments du site sans l'autorisation expresse de Monterna Agency 
                  est prohibée.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilité</h2>
              <div className="space-y-4">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site 
                  remis à jour à différentes périodes de l'année, mais peut toutefois contenir des 
                  inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email, à l'adresse contact@monterna-agency.fr, 
                  en décrivant le problème de la manière la plus précise possible.
                </p>
                <p>
                  Monterna Agency ne pourra être tenue responsable des dommages directs et indirects 
                  causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit 
                  de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, 
                  soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Liens Hypertextes</h2>
              <div className="space-y-4">
                <p>
                  Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé 
                  qu'en cliquant sur ces liens, il sortira du site de Monterna Agency. Ce dernier n'a 
                  pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, 
                  en aucun cas, être responsable de leur contenu.
                </p>
                <p>
                  L'établissement d'un lien vers le site de Monterna Agency est autorisé sous réserve 
                  d'une demande d'autorisation préalable formulée par courrier électronique auprès 
                  de Monterna Agency, et sous réserve du respect de la charte graphique du site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Droit Applicable et Juridiction</h2>
              <p>
                Tout litige en relation avec l'utilisation du site www.monterna-agency.fr est soumis 
                au droit français. Il est fait attribution exclusive de juridiction aux tribunaux 
                compétents de Paris.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;