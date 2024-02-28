import React from 'react';

function Container({children}) {
  return (
    <div className='min-h-screen w-full main-container bottom-32  '>
     {children}
    </div>
  );
}
// bg-amber-300 
export default Container;
