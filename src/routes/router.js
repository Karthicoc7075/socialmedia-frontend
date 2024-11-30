import React, { lazy,Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Navigate, useRoutes,Outlet } from 'react-router-dom';
export const Home = lazy(() => import('../pages/Home/Home'));
export const Chat = lazy(() => import('../pages/Chat/Chat'));
export const Settings = lazy(() => import('../pages/Settings/Settings'));
export const Profile = lazy(() => import('../pages/Profile/Profile'));
export const LoginPage = lazy(() => import('../pages/Auth/Auth'));
export const Page404 = lazy(() => import('../components/Notfound/Notfound'));





export default function Router() {
    const auth = useSelector(state => state.auth);


    const isAuthenticated = () => {
        
        if(auth.token && auth.isAuthenticated && auth.user){
          return true
        }

    
        return false
      }
    
      const ProtectedRoute = ({children}) => {
        if(!isAuthenticated()){
          return <Navigate to="/login" />
        }

        return children
      };

      
    
        const routes = useRoutes([
            {
              element: (
               
                  <Suspense fallback={<div><p>Loading....</p></div>}>
                    <Outlet />
                  </Suspense>
        
              ),
              children: [
                {
                  element: <ProtectedRoute ><Home /></ProtectedRoute>,
                  path: '/',
                  index: true, 
                },
                {
                  element: <ProtectedRoute ><Chat /></ProtectedRoute>,
                  path: '/chat',
                },
                {
                  element: <ProtectedRoute ><Chat /></ProtectedRoute>,
                  path: '/chat/:userId',
                },
                {
                  element: <ProtectedRoute ><Settings /></ProtectedRoute>,
                  path: '/settings',
                },
                {
                  element: <ProtectedRoute ><Profile /></ProtectedRoute>,
                  path: '/profile',
                },
                {
                  element: <ProtectedRoute ><Profile /></ProtectedRoute>,
                  path: '/profile/:userId',
                },
              ],
            },
            {
                path: 'login',
                element: isAuthenticated() ? <Navigate to="/" /> : <LoginPage />,
              },
            {
              path: '*',
              element: <Navigate to="/404" replace />,
            },
            {
              path: '404',
              element: <Page404 />,
            },
          ]);
          return routes;
    
        
    };


