import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Header = ({ onLoadTodos, onLoadAuth }) => {
   const auth = useContext(AuthContext);

   return (
      <div>
         {auth.status && <button onClick={onLoadTodos}>Todo List</button>}
         <button onClick={onLoadAuth}>Auth</button>
      </div>
   );
};

export default Header;
