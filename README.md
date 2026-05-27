# Modern Developer Portfolio Website

A high-fidelity, responsive, and beautifully interactive developer portfolio website designed for full-stack and frontend engineers. Features custom particle glow grids, typing text transitions, stateful filterable project galleries with detailed case study modal overlays, responsive vertical timelines, and a fully structured custom validation contact system.

Built using **React.js (v19)**, **Tailwind CSS (v4)**, **Framer Motion**, and **Lucide Icons**.

---

## 🛠️ Tech Stack & Key Features

-   **Frontend Engine**: React 19 driven by structured, fully type-safe TypeScript functional components.
-   **Style System**: Tailwind CSS v4 featuring native Google Fonts (`Plus Jakarta Sans` for UI, `JetBrains Mono` for code blocks) and custom webkit scroll environments.
-   **Animations**: Staggered fades, scale-on-hovers, and spring sliding modal transitions powered by Framer Motion (`motion/react`).
-   **Responsive Layouts**: Dense, mobile-first design mappings ensuring flawless alignment on mobile, tablet, and widescreen layouts.
-   **Dynamic Highlights**: Real-time relative scroll spy identifying and styling active navigation links.
-   **Case Studies**: Popover modals displaying deeper architectural case studies, repository links, and sandboxed previews.
-   **Form Assertions**: Fully managed state controls delivering real-time validation feedback, sending states, and alerts when contact sessions are requested.

---

## 📂 Project Architecture

```
src/
 ├── assets/
 │    └── images/
 │         └── developer_avatar.png  # Generated 3D Premium Avatar
 ├── components/
 │    ├── Navbar.tsx                 # Sticky header with active highlight tracking
 │    ├── Hero.tsx                   # Dynamic intro cover with typing effect
 │    ├── About.tsx                  # Profile overview & statistics grid layout
 │    ├── Skills.tsx                 # Grouped skills with progress metrics
 │    ├── Projects.tsx               # Filterable projects grid + popover case-studies
 │    ├── Services.tsx               # Service blocks detailing specialties
 │    ├── Timeline.tsx               # Symmetric alternating chronological record
 │    ├── Contact.tsx                # Stateful contact form with assertions
 │    ├── Footer.tsx                 # Trademark credits and social bindings
 │    ├── SmartIcon.tsx              # Dynamic Lucide custom icon binder
 │    └── ScrollToTop.tsx            # Animated scale back-to-top locator
 ├── data.ts                         # Centralized data repository schema details
 ├── types.ts                        # Unified TypeScript structural declarations
 ├── App.tsx                         # Assembly layouts & active page listener
 └── main.tsx                        # DOM hook and global initialization
```

---

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org) (v18.0.0 or higher recommended)
-   npm (comes packaged with Node)

### Installation

1. Clone development repository or extract project folder.
2. Navigate into the folder and install dependencies:
   ```bash
   npm install
   ```
3. Boot up the local development vite server:
   ```bash
   npm run dev
   ```
4. Access the server in your browser at: `http://localhost:3000`

### Build Production Version

To bundle the application optimizing code assets into a streamlined `/dist` workspace:
```bash
npm run build
```

---

## 🌐 Deployment Instructions

This template is fully optimized for continuous deployments directly bound to modern hosting platforms:

### Option A: Deployment to Vercel (Recommended)

#### Platform CLI Method
1. Install globally if not present:
   ```bash
   npm install -g vercel
   ```
2. Trigger the automated link from project root:
   ```bash
   vercel
   ```
3. Set your settings defaults, hit Enter, and copy the produced live share URL.

#### GitHub / Git Hook integration
1. Push your repository code to a public or private GitHub repository.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click "Add New" -> "Project" and import your Git repository.
4. Vercel automatically detects React / Vite properties. Ensure settings verify:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Future pushes to your repository automatically redeploy!

---

### Option B: Deployment to Netlify

#### Platform Dashboard Method
1. Run a local build to output your bundle:
   ```bash
   npm run build
   ```
2. Compress the created `/dist` folder into a standard ZIP profile.
3. Sign in to [Netlify App Console](https://app.netlify.com).
4. Drag and drop the ZIP archive directly into the **Netlify Drop** panel for instantaneous serverless allocations.

#### Continuous Git Deployment
1. Connect your Git repository profile under **Add New Site** -> **Import an existing project**.
2. Align configuration fields with:
   - **Branch to deploy**: `main` or your primary branch.
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site** to trigger continuous deployment webhooks!
