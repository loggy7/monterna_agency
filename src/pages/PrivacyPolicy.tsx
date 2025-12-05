import Header from '@/components/Header';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
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
              <Shield className="w-4 h-4 text-gold mr-2" />
              <span className="text-sm font-medium text-gold">Protection des Données</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Politique de <span className="text-gold">Confidentialité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Votre vie privée est importante pour nous. Découvrez comment nous protégeons et utilisons vos données personnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Transparence</h3>
                <p className="text-sm text-muted-foreground">Nous vous informons clairement sur l'utilisation de vos données</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <Lock className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Sécurité</h3>
                <p className="text-sm text-muted-foreground">Vos données sont protégées par des mesures de sécurité avancées</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Contrôle</h3>
                <p className="text-sm text-muted-foreground">Vous gardez le contrôle total sur vos informations personnelles</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">1. Informations Générales</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-foreground">Date d'entrée en vigueur :</strong> 1er janvier 2024
                </p>
                <p>
                  Chez Monterna Agency, nous nous engageons à protéger votre vie privée et vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et 
                  protégeons vos informations lorsque vous utilisez notre site web et nos services.
                </p>
                <p>
                  Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) 
                  et à la loi française Informatique et Libertés.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">2. Responsable du Traitement</h2>
              <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                <div className="space-y-2">
                  <p><strong className="text-foreground">Monterna Agency SARL</strong></p>
                  <p>123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                  <p>Email : dpo@monterna-agency.fr</p>
                  <p>Téléphone : +33 1 42 96 12 34</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">3. Données Collectées</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1. Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Date de naissance (pour les mannequins)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2. Données professionnelles</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Expérience professionnelle</li>
                    <li>Portfolio et photos</li>
                    <li>Mensurations (pour les mannequins)</li>
                    <li>Disponibilités</li>
                    <li>Préférences de travail</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3. Données de navigation</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">4. Finalités du Traitement</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Gestion des candidatures</h4>
                    <p className="text-sm">Traitement et évaluation des candidatures de mannequins</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                    <p className="text-sm">Réponse à vos demandes et communications commerciales</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Gestion contractuelle</h4>
                    <p className="text-sm">Exécution des contrats et prestations de services</p>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Amélioration des services</h4>
                    <p className="text-sm">Analyse et optimisation de nos services</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">5. Base Légale</h2>
              <div className="space-y-4">
                <p>
                  Le traitement de vos données personnelles repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Consentement :</strong> Pour l'envoi de communications marketing</li>
                  <li><strong className="text-foreground">Exécution contractuelle :</strong> Pour la gestion de votre candidature et nos prestations</li>
                  <li><strong className="text-foreground">Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité</li>
                  <li><strong className="text-foreground">Obligation légale :</strong> Pour respecter nos obligations comptables et fiscales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">6. Conservation des Données</h2>
              <div className="bg-gradient-gold/5 rounded-lg p-6 border border-gold/20">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Candidatures actives :</span>
                    <span className="text-gold font-semibold">3 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Contrats terminés :</span>
                    <span className="text-gold font-semibold">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Données de navigation :</span>
                    <span className="text-gold font-semibold">13 mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Communications marketing :</span>
                    <span className="text-gold font-semibold">3 ans</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">7. Vos Droits</h2>
              <div className="space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit d'accès</h4>
                        <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit de rectification</h4>
                        <p className="text-sm">Corriger les données inexactes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit à l'effacement</h4>
                        <p className="text-sm">Supprimer vos données personnelles</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit d'opposition</h4>
                        <p className="text-sm">Vous opposer au traitement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit à la portabilité</h4>
                        <p className="text-sm">Récupérer vos données dans un format structuré</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Droit de limitation</h4>
                        <p className="text-sm">Limiter le traitement de vos données</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card/30 rounded-lg p-4 border border-border/50 mt-6">
                  <p className="text-sm">
                    <strong className="text-foreground">Pour exercer vos droits :</strong> Contactez-nous à 
                    <a href="mailto:dpo@monterna-agency.fr" className="text-gold hover:underline ml-1">dpo@monterna-agency.fr</a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">8. Sécurité des Données</h2>
              <div className="space-y-4">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation accidentelle</li>
                  <li>La modification non autorisée</li>
                  <li>La destruction malveillante</li>
                  <li>La perte accidentelle</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6">9. Contact</h2>
              <div className="bg-card/30 rounded-lg p-6 border border-border/50">
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou 
                  l'exercice de vos droits, contactez notre Délégué à la Protection des Données :
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-foreground">Email :</strong> dpo@monterna-agency.fr</p>
                  <p><strong className="text-foreground">Courrier :</strong> Monterna Agency - DPO, 123 Avenue des Champs-Élysées, 75008 Paris</p>
                  <p><strong className="text-foreground">Téléphone :</strong> +33 1 42 96 12 34</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;