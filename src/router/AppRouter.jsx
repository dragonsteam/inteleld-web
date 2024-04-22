import { useRoutes } from 'react-router-dom';
import routes from './routes';

export default function AppRouter() {
  let element = useRoutes(routes.default);

  return element;
}
