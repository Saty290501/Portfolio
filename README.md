# Riya Jagtap - Portfolio

This is a modern, clean, and unique portfolio website built with Next.js App Router, Tailwind CSS, and Framer Motion. 
It features a premium dark theme (`#0f0f14`), elegant typography, and smooth, subtle scroll animations.

## Technologies Used
- Next.js 14+ (App Router)
- React 18+
- Tailwind CSS (Premium Dark theme config)
- Framer Motion (Scroll animations, glowing elements)
- Lucide React (Icons, optional)
- TypeScript

## Local Setup Instructions

Prerequisites: You need to have `Node.js` (v18.17 or later) installed on your machine.

1. **Open a terminal in the project directory.**
   Wait until you are inside the folder `f:\Portfolio Website`

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.
   To see the changes during development, the server will auto-refresh upon file saves.

## Project Structure Overview

- `src/app/layout.tsx`: Root document containing the Inter font settings and persistent `Navbar`.
- `src/app/page.tsx`: Main aggregator bringing together all the portfolio sections.
- `src/app/globals.css`: Contains custom CSS scrollbar, smooth scroll behavior, and Tailwind injections.
- `src/components/*`: Extracted sections (Hero, About, Skills, WorkExperience, Education, Certifications, Contact, ScrollProgress, Navbar).

## Customization

- To adjust colors, review `tailwind.config.ts`. The custom palette uses `#0f0f14` for background and gradients from purple to blue.
- Content changes can be made directly in the respective components inside `src/components/`.
