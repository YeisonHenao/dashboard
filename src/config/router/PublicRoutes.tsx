import Login from '../../pages/Login';
import Register from '../../pages/Register';
import { ROUTES } from './routes';

export const PublicRoutes = [
    {
        path: ROUTES.LOGIN,
        Component: Login
    },
    {
        path: ROUTES.REGISTER,
        Component: Register
    }
];