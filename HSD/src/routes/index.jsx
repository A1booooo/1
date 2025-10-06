import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import Editor from '../pages/Editor';
import Projects from '../pages/Projects';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/editor', element: <Editor /> },
      { path: '/projects', element: <Projects /> },
      { path: '/settings', element: <Settings /> }
    ]
  }
]);

export default router;