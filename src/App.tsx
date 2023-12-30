import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { AboutMe } from "./pages/AboutMe";
import { RootLayout } from "./pages/Root";
import { ThemeProvider } from "./components/theme-provider";


const router = createBrowserRouter([
  {
    path: "/hui-resume",
    element: <RootLayout />,
    children: [
      {
        path: "/hui-resume",
        element: <Home />
      },
      {
        path: "/hui-resume/about",
        element: <AboutMe />
      },
      {
        path: "/hui-resume/projects",
        element: <Projects />
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App; 