import React from 'react';
import { Ingredients } from '../Ingredients';
import Menu from '../Menu';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-purple-400">
      <div className="w-20">
        <Ingredients  />
      </div>
      <section className="flex-grow flex flex-col">
        <Menu className='h-1/12 overflow-auto'/>
        <div className='flex-grow overflow-auto p-4'>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
