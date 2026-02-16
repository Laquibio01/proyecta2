# Proyecta2 🚀

**Proyecta2** is a modern, responsive web application designed as a comprehensive academic management dashboard. This project serves as the frontend interface for a university or school system, allowing students to track their academic progress, schedules, and administrative status in a visually engaging environment.

> **Note:** This is currently a **Frontend Prototype**. The data displayed (grades, student info, attendance) is mocked for demonstration purposes.

## ✨ Features

- **Modern Dashboard**: A sleek, dark-themed dashboard with dynamic backgrounds and glassmorphism effects.
- **Responsive Design**: Fully adaptable layout that works on desktops, tablets, and mobile devices.
- **Student Module ("Alumnos")**:
    - **Expediente**: Detailed view of student information, grades, attendance, and history.
    - **Horario**: Schedule visualization.
    - **Referencias**: Financial status and payment references.
    - **Titulación**: Tracking of the degree/graduation process.
- **Modules**:
    - Directory, Calendar, Regulations, and Job Board sections.
- **Interactive UI**:
    - Sidebar navigation with collapsible support.
    - Topbar with notifications and profile actions.
    - Tabbed interfaces for organizing dense information.

## 🛠️ Technology Stack

This project is built using the **MERN** stack philosophy, currently focusing on the **React** frontend:

- **Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Create React App](https://create-react-app.dev/) (React Scripts)

## 📂 Project Structure

```
proyekta2/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   └── dashboard/   # Dashboard-specific components (Sidebar, Topbar)
│   ├── pages/           # Main view components (routes)
│   │   ├── Dashboard.jsx
│   │   ├── Expediente.jsx
│   │   ├── Horario.jsx
│   │   └── ...
│   ├── App.js           # Main application entry and routing
│   └── index.css        # Global styles and Tailwind directives
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd proyekta2
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    ```

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload when you make changes.\
    You may also see any lint errors in the console.

## 📜 Scripts

mnIn the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production to the `build` folder.

## 🎨 UI/UX Highlights

- **Visual Style**: Dark mode focus with "slate" color palette (`bg-slate-950`), accented with gradient blobs and glass effects.
- **Components**: specific focus on cards, data tables, and clean typography suitable for information-heavy academic dashboards.

## 🔜 Future Roadmap

- [ ] Backend Integration (API connection for real-time data).
- [ ] Authentication System (Login/Logout).
- [ ] Role-based access (Student vs. Teacher views).
- [ ] Export functionality for grades and schedules (PDF/Excel).

---

## Developed by:
- Elias Hernandez. 
- Luis Dominguez.
- Joshua Rodriguez.
- Joel Rocha.
- David Bustillos.
