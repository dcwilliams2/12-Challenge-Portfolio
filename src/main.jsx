import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.css';
import App from './app';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import AboutMe from './components/pages/AboutMe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: 'Resume',
                element: <Resume />
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);