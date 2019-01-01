import React from 'react';

const List = ({ items, onClick }) => {
   console.log('Rendering the list...');

   return (
      <ul>
         {items.map(todo => (
            <li key={todo.id} onClick={onClick(todo.id)}>
               {todo.name}
            </li>
         ))}
      </ul>
   );
};

export default List;
