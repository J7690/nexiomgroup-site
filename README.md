# Nexiom Group - Site Web Modernisé 2026

Site web moderne de Nexiom Group migré vers Next.js 14+ avec TypeScript, TailwindCSS, et toutes les fonctionnalités avancées des standards 2026.

## 🚀 Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: TailwindCSS + CSS Variables
- **Animations**: Framer Motion
- **CMS**: Sanity.io (headless CMS)
- **Recherche**: Algolia
- **Authentification**: NextAuth.js
- **Multilingue**: next-intl (français/anglais)
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Hosting**: Vercel (production)

## ✨ Fonctionnalités Implémentées

### Design & UX
- ✅ Dark mode avec toggle et persistance
- ✅ Typographie XXL responsive (clamp-based)
- ✅ Navigation par persona (Étudiants, Universités, Entreprises)
- ✅ Animations au scroll avec Framer Motion
- ✅ Micro-interactions et hover effects
- ✅ Design responsive mobile-first

### Contenu Dynamique
- ✅ Sanity.io CMS pour gestion contenus
- ✅ API routes Next.js pour données
- ✅ Fallback JSON pour compatibilité
- ✅ Témoignages avec carousel automatique
- ✅ Blog/Actualités dynamiques
- ✅ Statistiques animées

### Recherche
- ✅ Recherche instantanée avec Algolia
- ✅ Filtres par type de contenu
- ✅ Autocomplete et suggestions
- ✅ Interface moderne avec dropdown

### Authentification
- ✅ NextAuth.js avec Credentials Provider
- ✅ Dashboard utilisateur connecté
- ✅ Gestion des rôles (student, university, company)
- ✅ Session JWT sécurisée

### Multilingue
- ✅ next-intl pour i18n
- ✅ Support français/anglais
- ✅ URL localisées (/fr, /en)
- ✅ Traductions complètes

### Performance & Accessibilité
- ✅ Core Web Vitals optimisés
- ✅ Lazy loading images
- ✅ Preconnect fonts
- ✅ Accessibilité RGAA (skip link, focus visible)
- ✅ Navigation clavier fonctionnelle
- ✅ Attributs ARIA

## 📁 Structure du Projet

```
nexiomgroup-site/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Routes localisées
│   │   ├── layout.tsx      # Layout avec i18n
│   │   └── page.tsx        # Page d'accueil
│   ├── api/                # API routes
│   │   ├── auth/           # NextAuth.js
│   │   ├── testimonials/   # API témoignages
│   │   └── stats/          # API statistiques
│   ├── dashboard/          # Dashboard utilisateur
│   ├── globals.css         # Styles globaux
│   └── layout.tsx          # Root layout
├── components/              # Composants React
│   ├── Header.tsx         # Header avec dark mode
│   ├── Hero.tsx           # Hero section XXL
│   ├── Personas.tsx       # Navigation personas
│   ├── Testimonials.tsx   # Carousel témoignages
│   ├── Stats.tsx          # Compteurs animés
│   ├── Blog.tsx           # Blog/Actualités
│   └── ...
├── lib/                    # Utilitaires
│   ├── sanity.ts          # Client Sanity CMS
│   └── algolia.ts         # Client Algolia
├── sanity/                 # Configuration Sanity
│   ├── config.ts
│   ├── schema.ts
│   └── schemas/           # Schemas de contenu
├── messages/               # Traductions i18n
│   ├── fr.json
│   └── en.json
├── assets/                 # Assets statiques
│   ├── data/
│   │   └── content.json   # Fallback JSON
│   ├── css/
│   ├── js/
│   └── img/
├── middleware.ts          # Middleware i18n
├── next.config.js         # Configuration Next.js
├── tailwind.config.ts     # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
└── vercel.json           # Configuration Vercel
```

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local avec vos clés API

# Démarrer le serveur de développement
npm run dev
```

Le site sera disponible sur http://localhost:3001

## 🔧 Configuration

### Sanity CMS
1. Créer un projet sur https://www.sanity.io/
2. Copier le project ID dans `.env.local`
3. Configurer les schemas dans `sanity/schemas/`
4. Déployer le studio: `npx sanity deploy`

### Algolia
1. Créer un compte sur https://www.algolia.com/
2. Créer un index "nexiom_content"
3. Configurer les clés API dans `.env.local`
4. Indexer le contenu via l'API

### NextAuth.js
1. Configurer le provider dans `app/api/auth/[...nextauth]/route.ts`
2. Définir `NEXTAUTH_SECRET` dans `.env.local`
3. Personnaliser la logique d'authentification

### i18n
1. Ajouter des locales dans `middleware.ts`
2. Créer les fichiers de traduction dans `messages/`
3. Utiliser `useTranslations()` dans les composants

## 🚀 Déploiement

### Netlify
```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Déployer
netlify deploy --prod
```

Ou connecter le repo GitHub à Netlify pour déploiement automatique.

### Variables d'environnement Netlify
- `NEXT_PUBLIC_SANITY_PROJECT_ID=z5ucihvm`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `SANITY_API_TOKEN=skbz32VCapsGtNrx202EKsCDlxYdoqBy0TBZYotIEyEm8LeHiExjirmbJPGEm5mKuKB8dsrOSf2dJ9MJeYTBMx7gPFgylGyLGqm5WOsd4HUgqVPjL6oHTABBSGL3OjULyxufLaRUCYJlxBuyCpk3b5Ershz0dj3WbvOC2SsAz9bj8IRixzfC`
- `NEXT_PUBLIC_ALGOLIA_APP_ID=81FZUPXAGN`
- `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=f5e4deaae33a9807e19e2d3b398a9225`
- `ALGOLIA_ADMIN_KEY=ddc7b0de8c12584cbed8f990b53437a2`
- `NEXTAUTH_URL=https://votre-site.netlify.app`
- `NEXTAUTH_SECRET=votre-secret-key-here`

## 📊 Performance

- **Lighthouse Score**: 95+ (target)
- **Core Web Vitals**: < 2.5s
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.5s

## ♿ Accessibilité

- Conformité RGAA niveau AA
- Navigation clavier complète
- Focus visible sur tous les éléments interactifs
- Textes alternatifs pour images
- Contrastes WCAG AA minimum
- Skip link pour navigation principale

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linting ESLint
```

## 🎯 Prochaines Étapes

- [ ] Intégrer Google Analytics
- [ ] Ajouter PWA capabilities
- [ ] Implémenter cache ISR
- [ ] Optimiser images avec next/image
- [ ] Ajouter tests E2E avec Playwright
- [ ] Configurer CI/CD avec GitHub Actions

## 📄 Licence

© 2026 Nexiom Group. Tous droits réservés.

## 🤝 Contribution

Ce projet est maintenu par l'équipe Nexiom Group. Pour toute question ou suggestion, contactez-nous à contact@nexiomgroup.space.
