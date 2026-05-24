# DeshiBazar - Premium Bangladeshi E-Commerce Store

A modern, full-featured e-commerce platform built with Next.js 16, React, TypeScript, and Tailwind CSS. Featuring a beautiful mint & indigo color scheme with traditional Bengali cultural elements.

![DeshiBazar](https://images.unsplash.com/photo-1610030469983-98d58908610b?w=1200&h=600&fit=crop)

## 🌟 Features

### Core Features
- **Modern UI/UX** - Beautiful mint & indigo color scheme with glassmorphism effects
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Dynamic Routing** - Product detail pages and category landing pages
- **Shopping Cart** - Full cart management with Zustand state
- **Checkout Flow** - 3-step checkout process (Shipping → Payment → Confirmation)
- **Search & Filters** - Product search, category filters, price range, sorting
- **Dual Language** - Bengali (বাংলা) + English content throughout

### Pages
- **Home** - Hero section, categories, trending products, testimonials
- **Categories** - Grid view with 8 Bengali product categories
- **Category Detail** - Individual category landing pages
- **Products** - All products with filters and search
- **Product Detail** - Individual product pages with reviews
- **About Us** - Company story, team, values
- **Contact** - Contact form with FAQ
- **Cart** - Shopping cart with order summary
- **Checkout** - Multi-step checkout flow

### Product Categories
1. জামদানি শাড়ি (Jamdani Saree)
2. নকশী কাঁথা (Nakshi Kantha)
3. মৃৎশিল্প (Ceramic & Pottery)
4. বাংলার মিষ্টি (Bengali Sweets)
5. বাঁশের কাজ (Bamboo Crafts)
6. মসলিন (Muslin Fabric)
7. পিতল ও কাংসার (Brass & Bronze)
8. শীতল পাটি (Shital Pati)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **State Management:** Zustand
- **UI Components:** Custom components with shadcn/ui
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AzazAhmedEraj/Classic-E-commerce-site-using-React.git
cd ecommerce-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
ecommerce-store/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── categories/       # Category pages
│   │   ├── products/         # Product pages
│   │   ├── about/            # About page
│   │   ├── cart/             # Cart page
│   │   ├── checkout/         # Checkout page
│   │   ├── contact/          # Contact page
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   ├── home/             # Home page components
│   │   ├── layout/           # Header, Footer
│   │   ├── products/         # Product components
│   │   ├── cart/             # Cart components
│   │   └── ui/               # UI components
│   ├── lib/
│   │   ├── data.ts           # Product & category data
│   │   └── utils.ts          # Utility functions
│   ├── store/
│   │   └── cart-store.ts     # Cart state management
│   └── types/
│       └── index.ts          # TypeScript types
├── public/                   # Static assets
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Color Scheme

The application uses a modern mint & indigo color palette:

- **Primary:** Indigo (#6366f1)
- **Secondary:** Mint (#10b981)
- **Accent:** Teal (#14b8a6)
- **Background:** Clean light theme with glassmorphism effects

## 👨‍💻 Author

**Azah Ahmed Eraj**
- LinkedIn: [@azazahmederaj](https://www.linkedin.com/in/azaz-ahmed-eraj/)
- GitHub: [@AzazAhmedEraj](https://github.com/AzazAhmedEraj)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Traditional Bengali art and culture inspiration
- Unsplash for product images
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework

---

Made with ❤️ in Bangladesh
