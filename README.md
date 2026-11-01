# BMU Makeup Studio & Academy

A responsive React website for BMU Makeup Studio & Academy, a makeup studio and
training academy in Dehradun, Uttarakhand.

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Create React App](https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)

## About

A client website built for the studio. It presents the studio's makeup services and its
academy, shows a gallery of work, and gives visitors contact details and a map to the
studio. It is a frontend-only project; the hooks for a login API exist but are not wired
to any backend in this repository.

## Features

- **Home page** with a services grid (Glam-up Makeup, Bridal Makeup, Fresh Looks, Academy,
  Book appointment), an animated hero and an academy section
- **Gallery carousel** of studio work built with React Slick
- **Embedded Google Map** showing the studio's location
- **Contact page** with the studio's contact information and an enquiry form layout
  (the form is not connected to a backend yet)
- **Header** with an animated hamburger menu and buttons to join the academy and book an appointment,
  and a **footer** with quick links and the studio's Instagram
- Lazy-loaded pages with a full-screen MUI spinner while they load
- Framer Motion animations
- Scaffolding for authentication: an `AuthProvider` context (login, logout and session
  check with Axios and `react-hot-toast`, pointed at `http://localhost:8000`) and a
  protected `/admin` route, which currently always redirects to `/`

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/service` | Home |
| `/about` | Home |
| `/contact` | Contact |
| `/admin` | Protected placeholder (redirects to `/`) |

## Tech Stack

- **React** 18 (Create React App / `react-scripts` 5)
- **React Router** 6
- **Tailwind CSS** 3, **MUI** 6 and **styled-components** for styling
- **Framer Motion**, **React Slick**
- **Axios**, **react-hot-toast**

## Project Structure

```
BMU-Makeup-studio/
└── client/
    ├── public/
    └── src/
        ├── App.jsx             # routes, lazy loading, AuthProvider
        ├── authContext.jsx     # auth context (login / logout / session check)
        ├── auth/               # ProtectedRoute
        ├── Layout/             # Header, Footer, Layout wrapper
        ├── components/         # Slider, Service, EnterPriseSection, Map
        ├── pages/              # Home, Contact
        ├── Utility/            # Hamburger menu icon
        └── assets/             # studio photos and logos
```

## Getting Started

Prerequisites: Node.js and npm.

```bash
cd client
npm install
npm start         # dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build in client/build
npm test          # Jest test runner (react-scripts)
```

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
