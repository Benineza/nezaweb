# NezaWeb - Branding & Digital Design Agency

<div align="center">

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.5-528DD7?logo=fontawesome)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![License](https://img.shields.io/badge/License-Proprietary-red)

**A modern, responsive agency website for branding, web development, and social media management**

[Live Demo](https://nezaweb.vercel.app/) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)

---

## 🌟 Overview

**NezaWeb** is a professional, production-ready agency website designed for a branding and digital design company. The platform showcases the agency's core services—Web Development, Social Media Management, and Branding & Digital Design—while providing a seamless user experience with interactive elements and a clean, modern aesthetic.

This project demonstrates proficiency in modern frontend development using React, Vite, and CSS3, with a focus on performance, responsiveness, and user engagement.

### 🎯 Purpose
- Establish a professional online presence for NezaWeb
- Showcase agency services in an engaging, visual manner
- Generate leads through an integrated contact system
- Demonstrate modern web development best practices

---

## ✨ Features

### Frontend (React + Vite)

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI/UX** | Clean white and light green theme with professional typography |
| 📱 **Fully Responsive** | Mobile-first design optimized for all devices |
| 🧭 **Smart Navigation** | Sticky header with smooth scrolling and mobile hamburger menu |
| 💫 **Interactive Hero** | Floating animated cards with parallax mouse effects |
| 📊 **Animated Stats** | Counter animation that triggers on scroll |
| 🎯 **Services Showcase** | Three core services with hover animations and visual hierarchy |
| 📧 **Contact System** | Form with client-side validation and instant feedback |
| 📰 **Newsletter Subscription** | Email capture functionality |
| 🔗 **Social Media Integration** | Links to Instagram, X (Twitter), TikTok, and Facebook |
| 🖼️ **Custom Branding** | Company logo integration with favicon support |
| 🌊 **Smooth Animations** | Fade-in effects using Intersection Observer API |
| ⚡ **Fast Performance** | Vite for lightning-fast development and optimized builds |

### Key Interactions

| Feature | Description |
|---------|-------------|
| 🖱️ **Parallax Effects** | Floating cards respond to mouse movement |
| 📱 **Mobile Menu** | Hamburger menu with smooth transitions |
| 🔄 **Scroll Animations** | Elements reveal as you scroll |
| ✅ **Form Validation** | Real-time validation with user feedback |
| 🎯 **Smooth Scroll** | Navigation with smooth scrolling to sections |

---

## 🛠 Tech Stack

### Frontend
```yaml
Framework: React 18.2.0
Build Tool: Vite 5.0.8
Language: JavaScript (ES6+)
Styling: CSS3 with Custom Properties (Variables)
Icons: Font Awesome 6.5.1
Fonts: Google Fonts (Inter)
Animations: CSS Animations & Intersection Observer API
```
### Development Tools
```yaml
Version Control: Git & GitHub
IDE: VS Code
Package Manager: npm
Environment: Windows 11 / PowerShell
Browser Testing: Chrome DevTools, Firefox, Edge
```
### 🏗 Architecture
```yaml
App.jsx
├── Navbar.jsx          # Sticky navigation with logo and mobile menu
├── Hero.jsx            # Hero section with animated stats and floating cards
├── Services.jsx        # Services showcase (Web Dev, Social, Branding)
├── Approach.jsx        # Process/approach section with steps
├── Contact.jsx         # Contact form with validation
└── Footer.jsx          # Footer with links and newsletter subscription
```
### Styling Architecture
```yaml
App.css
├── CSS Variables       # Theme colors, shadows, spacing
├── Global Styles       # Reset, typography, container
├── Component Styles    # Each component's styles
├── Animations          # Keyframes and transitions
└── Media Queries       # Responsive breakpoints
```
### 📁 Project Structure
```yaml
frontend/
├── public/
│   └── favicon.ico              # Tab icon
├── src/
│   ├── assets/
│   │   └── nezaweb-logo.png     # Company logo
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with logo
│   │   ├── Hero.jsx             # Hero with animations
│   │   ├── Services.jsx         # Services showcase
│   │   ├── Approach.jsx         # Process section
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer with links
│   ├── App.css                  # Main styles
│   ├── App.jsx                  # Main component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── .gitignore                   # Git ignore file
└── README.md                    # Documentation
```
