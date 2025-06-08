# DevBlog - Modern Blog Website

A responsive, modern blog website built with React, TypeScript, and Tailwind CSS. This project demonstrates a fully functional multi-page web application with interactive features and clean design.

## 🌟 Live Demo

**URL**: https://preview--web-wizardry-project-spark.lovable.app/

## 📋 Project Overview

DevBlog is a comprehensive blog platform that showcases modern web development practices. It features a clean, professional design with a focus on readability and user experience.

### Key Features

- **📱 Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **🔍 Search Functionality**: Real-time search through blog posts by title and content
- **📂 Category Filtering**: Filter posts by categories (Frontend Development, CSS, JavaScript, etc.)
- **📖 Featured Posts**: Highlighted articles on the homepage
- **💬 Comment System**: Interactive comment section for each blog post
- **📧 Newsletter Signup**: Email subscription with form validation
- **🎨 Modern UI**: Clean design with hover effects and smooth transitions
- **♿ Accessible**: Built with accessibility best practices

### Pages Included

- **Home Page**: Featured posts, recent articles, search, and newsletter signup
- **Individual Blog Posts**: Full article pages with comment sections
- **About Page**: Information about the blog and authors
- **Contact Page**: Contact form and information
- **404 Page**: Custom not found page

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library
- **React Query**: Data fetching and state management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── BlogCard.tsx    # Blog post card component
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── BlogPost.tsx    # Individual blog post page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── data/               # Static data
│   └── blogData.ts     # Blog posts data
└── App.tsx             # Main application component
```

## ✨ Features Demonstration

### Interactive Elements
- **Search**: Type in the search bar to filter posts in real-time
- **Category Filters**: Click category buttons to filter posts
- **Navigation**: Smooth routing between pages
- **Comments**: Add and view comments on blog posts
- **Newsletter**: Subscribe with email validation

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized images and typography
- Touch-friendly interface

## 🎨 Design System

The project uses a cohesive design system with:
- **Color Palette**: Teal primary colors with neutral grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components following design patterns

## 🚢 Deployment

This project can be easily deployed to various platforms:

### Using Lovable
1. Open the [Lovable Project](https://lovable.dev/projects/1c44b12e-1984-4d2f-8688-2e8d72aee2f4)
2. Click Share → Publish

### Using Other Platforms
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import project from GitHub
- **GitHub Pages**: Use the build output in the `dist` folder

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
