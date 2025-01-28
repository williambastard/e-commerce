# Dossiers dans une Clean Architecture avec Next.js > 13
## Dossiers principaux:

*app*: Racine de votre application. Contient tous les fichiers, y compris les routes, les composants, les styles, etc.

*core*: Logique métier pure et indépendante du framework.

*domain*: Définition des objets métier, règles métier et cas d'utilisation.

*entities*: Objets métier (ex: User, Product).

*use-cases*: Actions sur les entités (ex: CreateUser, GetProduct).

*ports*: Interfaces pour les dépendances externes (ex: IUserRepository).

*application*: Logique applicative (contrôleurs et services).

*controllers*: Gestion des requêtes et appels aux use-cases.

*services*: Services applicatifs (ex: authentification).

*infrastructure*: Implémentations des dépendances externes.

*repositories*: Accès aux données (ex: UserRepository).

*services*: Services externes (ex: envoi d'emails).

*ui*: Composants de l'interface utilisateur et vues.

*components*: Composants React réutilisables.

*commons*: Composants génériques (ex: Button).

*features*: Composants spécifiques à une fonctionnalité.

*views*: Pages et écrans de l'application.

*api*: Routes de l'API (fichiers route.ts).

## Dossiers optionnels:
*public*: Fichiers statiques (images, polices).

*styles*: Fichiers CSS globaux.

*tests*: Tests unitaires et d'intégration.

*utils*: Fonctions utilitaires et helpers.

## Types de tâches:

*feature*: Nouvelle fonctionnalité.
*bugfix*: Correction de bug.
*chore*: Tâche de maintenance ou d'amélioration.
*hotfix*: Correction urgente d'un bug en production.
*release*: Branche pour une version spécifique.