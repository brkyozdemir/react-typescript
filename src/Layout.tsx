import React from 'react';
import './Layout.css';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => <div>
  <nav className="navbar"></nav>
  <main className="layout__flex">{children}</main>
</div>


export default Layout;