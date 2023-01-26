import 'twin.macro';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';

const Layout = ({
  children,
  menuOpened,
  onToggleMenu,
}: {
  children: ReactNode;
  menuOpened: boolean;
  onToggleMenu: () => void;
}) => {
  const { pathname } = useLocation();

  return (
    <div tw="relative">
      {pathname === '/home'?
        <Header1 menuOpened={menuOpened} onToggleMenu={onToggleMenu} />
        :pathname === '/faq' || pathname === '/roadmap' || pathname === '/buy' || pathname === '/stake' || pathname === '/service_terms' || pathname === '/litepaper' || pathname === '/gallery'? <Header2 menuOpened={menuOpened} onToggleMenu={onToggleMenu} />
        :<Header menuOpened={menuOpened} onToggleMenu={onToggleMenu} />
      }
      
      {children}
      {(pathname === '/faq' || pathname === '/roadmap' || pathname === '/buy' || pathname === '/stake' || pathname === '/service_terms' || pathname === '/litepaper' || pathname === '/gallery') && <Footer/>}
    </div>
  );
};

export default Layout;