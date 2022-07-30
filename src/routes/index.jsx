import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';

const MainRoute = () => {
  const routes = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: 'login',
      component: <Login />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default MainRoute;
