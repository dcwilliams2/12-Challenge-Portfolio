import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <div>
        <header className='Header'>
            <h1>Daniel Williams</h1>
            <main className='mx-3'></main>
        </header>
        <Navigation/>
        </div>
    );
}

export default Header;