import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio';
import Paquetes from './views/Paquetes';
import Paquete from './views/Paquete';
import MasInfo from './views/MasInfo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/paquetes',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Paquetes />
            }
        ]
    },
    {
        path: '/paquete/:id',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Paquete />
            }
        ]
    },
    {
        path: '/mas-info',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MasInfo />
            }
        ]
    },
])

export default router;