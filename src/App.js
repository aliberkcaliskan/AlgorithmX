import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ErrorPage from './pages/error';
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
const Home = React.lazy(() => import('./pages/home'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <PrimeReactProvider >
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </React.StrictMode>
  );
}

export default App;
