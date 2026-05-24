# CLAUDE.md

This is a Next.js 14 e-commerce application with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: Zustand

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx shadcn@latest add [component]` - Add shadcn/ui components

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components (layout, products, cart, ui)
- `src/lib/` - Utilities and mock data
- `src/store/` - Zustand state stores
- `src/types/` - TypeScript type definitions

## Key Files

- `src/app/layout.tsx` - Root layout with fonts
- `src/app/page.tsx` - Home page
- `src/lib/data.ts` - Mock product/category data
- `src/store/cart-store.ts` - Cart state management
- `src/components/layout/Header.tsx` - Site header with cart
- `src/components/layout/Footer.tsx` - Site footer
