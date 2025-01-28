Dossiers principaux:

app: Racine de votre application Next.js 13. Contient tous les fichiers de l'application, y compris les routes, les composants, les styles, etc.
core: Contient la logique métier pure et indépendante du framework.
domain: Définit les objets métier, les règles métier et les cas d'utilisation.
entities: Représente les objets métier de votre application (ex: User, Product).
use-cases: Définit les actions que les utilisateurs peuvent effectuer sur les entités (ex: CreateUser, GetProduct).
ports: Définit les interfaces pour les dépendances externes, comme les repositories et les services (ex: IUserRepository, IEmailService).
application: Contient la logique applicative, comme les contrôleurs et les services.
controllers: Gère les requêtes entrantes et appelle les use-cases appropriés.
services: Fournit des services applicatifs, comme l'authentification ou la gestion des notifications.
infrastructure: Contient les implémentations concrètes des dépendances externes, comme les repositories et les services.
repositories: Implémente les interfaces définies dans ports pour accéder aux données (ex: UserRepository implémente IUserRepository).
services: Implémente les interfaces définies dans ports pour des services externes, comme l'envoi d'emails.
ui: Contient les composants de l'interface utilisateur et les vues.
components: Contient les composants React réutilisables.
commons: Composants génériques utilisés dans toute l'application (ex: Button, Input).
features: Composants spécifiques à une fonctionnalité ou un domaine métier.
views: Contient les pages et les écrans de l'application, composés de composants.
api: Contient les routes de l'API, définies par des fichiers route.ts.
Dossiers optionnels:

public: Contient les fichiers statiques, comme les images, les polices, etc.
styles: Contient les fichiers CSS globaux.
tests: Contient les tests unitaires et d'intégration.
utils: Contient les fonctions utilitaires et les helpers.
