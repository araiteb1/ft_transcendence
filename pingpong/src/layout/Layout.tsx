import { ReactNode } from 'react';
import Header from './Header.tsx';

export interface LayoutProps {
    children: ReactNode;
  }
function Layout ({children}  : LayoutProps) {
    return (
        <div >
            <div >
                <Header />
                    <main >{children}</main>
            </div>
        </div>
    );
}

export default Layout;