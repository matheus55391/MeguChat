import React from 'react';

interface DrawerProps {
  open: boolean;
  content?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, content }) => {
  const drawerStyles = open
    ? 'fixed z-10 left-0 top-0 w-full h-screen bg-white shadow'
    : 'hidden';

  return <div className={drawerStyles}>{content}</div>;
};

export default Drawer;
