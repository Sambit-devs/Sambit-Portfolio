# 🌟 Modern 3D Portfolio - Sambit Kumar Panda

A cutting-edge, interactive 3D portfolio website built with React, Three.js, and modern web technologies. This portfolio showcases advanced web development skills through immersive 3D experiences, smooth animations, and responsive design.

![Portfolio Preview](public/assets/Screenshot%20from%202025-01-13%2012-34-30.png)

## ✨ Features

### 🎭 Interactive 3D Elements
- **3D Hero Section**: Animated avatar with floating geometric shapes
- **3D Skills Visualization**: Interactive sphere-based skill representation
- **3D Project Cards**: Clickable 3D project showcase with hover effects
- **3D Contact Animation**: Dynamic contact sphere with floating particles

### 🎨 Modern Design & Animations
- **Framer Motion**: Smooth scroll-triggered animations
- **Glass Morphism**: Modern glassmorphism UI effects
- **Custom Cursor**: Interactive cursor with hover states
- **Loading Screen**: Animated loading experience
- **Smooth Scrolling**: Lenis-powered buttery smooth scrolling

### 📱 Responsive & Accessible
- **Mobile-First Design**: Optimized for all devices
- **Touch Gestures**: Mobile-friendly 3D interactions
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized with lazy loading and code splitting

### 🛠️ Technical Features
- **Modern Stack**: React 18, Vite, Three.js, Framer Motion
- **Email Integration**: Contact form with EmailJS
- **SEO Optimized**: Meta tags, OpenGraph, Twitter Cards
- **PWA Ready**: Manifest and service worker support

## 🚀 Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **@react-three/postprocessing** - Post-processing effects

### Animations & Interactions
- **Framer Motion** - Production-ready motion library
- **React Intersection Observer** - Scroll-triggered animations
- **React Parallax Tilt** - Tilt hover effects
- **Lenis** - Smooth scrolling
- **GSAP** - Advanced animations

### Utilities & Integration
- **EmailJS** - Email service integration
- **React Hook Form** - Form state management
- **Axios** - HTTP client

## 📁 Project Structure

```
modern-portfolio/
├── public/
│   ├── assets/           # Images, icons, resume
│   └── fonts/           # Custom fonts
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # 3D hero section
│   │   ├── About.jsx    # About section with animations
│   │   ├── Skills.jsx   # 3D skills visualization
│   │   ├── Projects.jsx # 3D project showcase
│   │   ├── Contact.jsx  # Contact form with 3D elements
│   │   ├── Navbar.jsx   # Navigation with animations
│   │   ├── Cursor.jsx   # Custom cursor
│   │   └── LoadingScreen.jsx # Loading animation
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Sambit-devs/modern-portfolio.git
cd modern-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Update the environment variables

## 🎨 Customization

### Changing Colors
Update the CSS custom properties in `src/App.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the component to `App.jsx`
3. Update the navigation in `Navbar.jsx`

### Modifying 3D Elements
- Edit the 3D components in each section
- Adjust lighting, materials, and animations
- Use React Three Fiber documentation for reference

## 📱 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Vite's built-in optimizations
- **3D Performance**: Optimized geometries and materials
- **Animation Performance**: Hardware-accelerated animations

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Note**: WebGL support required for 3D features

## 📱 Mobile Considerations

- Touch-friendly interactions
- Reduced particle counts on mobile
- Optimized 3D complexity for mobile GPUs
- Responsive design breakpoints

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
```bash
npm run build
npx vercel --prod
```

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sambit Kumar Panda**
- Email: devs.sambit@gmail.com
- LinkedIn: [sambit-kumar-panda](https://linkedin.com/in/sambit-kumar-panda-033260258/)
- GitHub: [Sambit-devs](https://github.com/Sambit-devs)

## 🙏 Acknowledgments

- **Three.js Community** - For the amazing 3D library
- **React Three Fiber** - For the React integration
- **Framer Motion** - For the smooth animations
- **Dribbble & Behance** - For design inspiration

---

⭐ If you found this project helpful, please give it a star!

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Blog integration
- [ ] Advanced particle systems
- [ ] VR/AR experiences
- [ ] Voice navigation
- [ ] AI-powered chatbot

---

**Made with ❤️ and lots of ☕ by Sambit Kumar Panda**