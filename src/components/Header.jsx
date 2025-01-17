import { Outlet } from 'react-router-dom';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header className='Header'>
            <h1>Daniel Williams</h1>
            <Navigation />
            <main className='mx-3'>
                <Outlet />
            </main>
        </header>
    );
}

export default Header;