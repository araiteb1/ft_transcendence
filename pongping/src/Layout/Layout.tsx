import { ReactNode } from 'react';
import Header from './Header';

export interface LayoutProps {
    children: ReactNode;
  }
function Layout ({children}  : LayoutProps) {
    return (
        <div className='flex flex-col'>
                <Header />
                <main >{children}</main>
        </div>
    );
}

export default Layout;