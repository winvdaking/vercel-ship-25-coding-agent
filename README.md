# AI SDK 5 Coding Agent Starter Project

Starter project for Vercel Ship "Building agents with the AI SDK". This coding agent is built with AI SDK 5, Vercel AI Gateway, and Vercel Sandbox. It can read and modify GitHub repositories.

## Setup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fship-25-agents-workshop-starter&project-name=vercel-ship-25-coding-agent&repository-name=vercel-ship-25-coding-agent&demo-title=Ship%202025%20Agents%20Workshop%20Companion%20Site&demo-url=https%3A%2F%2Fship-25-agents-workshop.vercel.app%2Fdocs)

1. Install the Vercel CLI: `npm i -g vercel`
1. Deploy this repo with the button above.
1. Clone the new repo locally.
1. Link to Vercel project: `vercel link`
1. Pull environment variables: `vercel env pull` (may need team/project IDs too)
1. Install dependencies: `pnpm install`
1. Start dev server: `vercel dev`

## Environment Variables

- `VERCEL_OIDC_TOKEN` - For AI Gateway and Sandbox (this will be automatically added when you run `vercel dev`)
- `GITHUB_TOKEN` - GitHub personal access token

### GitHub Personal Access Token

To create a GitHub Personal Access Token (PAT):

1. Go to https://github.com/settings/personal-access-tokens
2. Click "Generate new token"
3. Give it a descriptive name
4. Set repository access to "All repositories"
5. Add the following repository permissions:
   - Issues: Read and write
   - Pull requests: Read and write
6. Click "Generate token"
7. Copy the token immediately (you won't be able to see it again)
8. Add it to your `.env.local` file as `GITHUB_TOKEN`

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request describing your changes.

Please ensure your code follows the project's coding style and includes appropriate tests.

## Usage

```bash
curl -X POST https://your-deployment.vercel.app/api/agent \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "update readme to say hey were so back",
    "repoUrl": "https://github.com/nicoalbanese/ai-sdk-langgraph/"
  }'
```

Parameters:

- `prompt` - What you want the agent to do
- `repoUrl` - GitHub repository URL

## Partie française

### À propos du projet

Projet de démarrage pour Vercel Ship "Construire des agents avec l'AI SDK". Cet agent de codage est construit avec AI SDK 5, Vercel AI Gateway, et Vercel Sandbox. Il peut lire et modifier des dépôts GitHub.

### Configuration

1. Installez Vercel CLI : `npm i -g vercel`
1. Déployez ce dépôt avec le bouton ci-dessus.
1. Clonez le nouveau dépôt localement.
1. Liez au projet Vercel : `vercel link`
1. Récupérez les variables d'environnement : `vercel env pull` (peut nécessiter aussi les IDs de l'équipe/projet)
1. Installez les dépendances : `pnpm install`
1. Lancez le serveur de développement : `vercel dev`

### Variables d'environnement

- `VERCEL_OIDC_TOKEN` - Pour AI Gateway et Sandbox (sera ajouté automatiquement lors de l'exécution de `vercel dev`)
- `GITHUB_TOKEN` - Jeton d'accès personnel GitHub

### Jeton d'accès personnel GitHub

Pour créer un jeton d'accès personnel GitHub (PAT) :

1. Allez sur https://github.com/settings/personal-access-tokens
2. Cliquez sur "Generate new token"
3. Donnez un nom descriptif
4. Donnez accès à tous les dépôts
5. Ajoutez les permissions suivantes :
   - Issues : lecture et écriture
   - Pull requests : lecture et écriture
6. Cliquez sur "Generate token"
7. Copiez le jeton immédiatement (vous ne pourrez plus le voir)
8. Ajoutez-le à votre fichier `.env.local` sous la clé `GITHUB_TOKEN`

### Contribution

Les contributions sont les bienvenues ! Pour contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez le dépôt.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/votre-fonctionnalite`).
3. Commitez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`).
4. Poussez la branche (`git push origin feature/votre-fonctionnalite`).
5. Ouvrez une pull request décrivant vos changements.

Veuillez vous assurer que votre code suit le style du projet et comprend des tests appropriés.


```bash
curl -X POST https://your-deployment.vercel.app/api/agent \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "update readme to say hey were so back",
    "repoUrl": "https://github.com/nicoalbanese/ai-sdk-langgraph/"
  }'
```

Parameters:

- `prompt` - What you want the agent to do
- `repoUrl` - GitHub repository URL
