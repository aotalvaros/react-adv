/* Suspense: sirve para decirle a react que cuando se esta cargando un modulo o un componente que espere
 y mientras estar cargando has lo sgiente ...... muestra un mensaje, un componente especial, o un loading etc. 
*/
import { Suspense } from 'react'; 
import {
  BrowserRouter as Router,
  Routes, Route, NavLink, Navigate 
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
          {
            routes.map(({ to, name}) => (
              <li key={to}>
                <NavLink 
                  to={to}
                  className={({ isActive }) => isActive ? 'nav-active' : '' }>
                    {name}
                </NavLink>
              </li>
            ))
          }

          </ul>
        </nav>

        <Routes>
          {
            routes.map(({ to, path, Component }) =>( 
              <Route
                key={to}
                path={path} 
                element={ <Component/> } 
              />
            ))
          }
          <Route path="*" element={ <Navigate to={ routes[0].to } replace/> } />
        </Routes>
      </div>
    </Router>
    </Suspense>
  );
}