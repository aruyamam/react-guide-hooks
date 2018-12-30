import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const app = props => {
   const [page, setPage] = useState('auth');
   const [authState, setAuthState] = useState(false);

   const switchPage = pageName => () => {
      setPage(pageName);
   };

   const login = () => {
      setAuthState(true);
   };

   return (
      <div className="app">
         <AuthContext.Provider value={{ status: authState, login }}>
            <Header
               onLoadTodos={switchPage('todos')}
               onLoadAuth={switchPage('auth')}
            />
            <hr />
            {page === 'auth' ? <Auth /> : <Todo />}
         </AuthContext.Provider>
      </div>
   );
};

export default app;
