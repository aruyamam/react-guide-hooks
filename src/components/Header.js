import React from 'react';

const Header = ({ onLoadTodos, onLoadAuth }) => {
   return (
      <div>
         <button onClick={onLoadTodos}>Todo List</button>
         {` | `}
         <button onClick={onLoadAuth}>Auth</button>
      </div>
   );
};

export default Header;
