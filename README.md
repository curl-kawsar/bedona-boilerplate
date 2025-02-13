# Next.js Boilerplate with Shadcn UI

A modern, feature-rich boilerplate for Next.js applications with Shadcn UI, Tailwind CSS, and authentication.

![NextBoiler](screenshot.png)

## Features

- 🚀 Built with Next.js 14
- 🎨 Styled with Tailwind CSS
- 🔮 UI Components from Shadcn UI
- 🔒 Authentication Ready
- 📱 Desktop-Optimized Layout
- 🎯 Clean Project Structure
- 🛠 API Integration Setup
- 🔄 Form Handling
- 🎭 Error Handling with Toast Notifications

## Project Structure
src/ ├── app/ │ ├── (auth)/ │ │ ├── login/ │ │ │ └── page.jsx # Login page │ │ ├── register/ │ │ │ └── page.jsx # Registration page │ ├── layout.jsx # Root layout │ └── page.jsx # Home page ├── components/ │ ├── auth/ │ │ ├── LoginForm.jsx # Login form component │ │ ├── RegisterForm.jsx # Registration form component │ ├── shared/ │ │ ├── navbar/ │ │ │ └── Navbar.jsx # Navigation component │ │ ├── footer/ │ │ │ └── Footer.jsx # Footer component │ ├── ui/ # ShadCN UI components ├── services/ │ ├── api/ │ │ └── auth.js # Authentication API service ├── lib/ │ └── utils.js # Utility functions


## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the development server


## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **API Calls**: Axios
- **Notifications**: Sonner
- **Icons**: Lucide Icons

## Components

### Authentication
- Pre-built login and registration forms
- API integration setup
- Error handling with toast notifications
- Loading states and form validation

### Layout
- Modern navigation bar with:
  - Responsive design
  - Active link highlighting
  - Authentication state handling
  
- Feature-rich footer with:
  - Newsletter subscription
  - Quick links
  - Social media integration
  - Legal links

## Customization

### Theme
You can customize the theme in `globals.css` and through Shadcn UI's configuration in `components.json`.

### Components
All components are built with Shadcn UI and can be customized using Tailwind CSS classes.
