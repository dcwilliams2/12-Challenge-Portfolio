import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header>
            <div>
                <div class="row">
                    <div class="col-4">
                    <h1 class="ps-5">Daniel</h1>
                    </div>
                    <div class="col-8">
                    <Navigation/>
                    </div>
                </div>
                    <h1 class="ms-5 ps-5"> Williams</h1>
            </div>
        </header>
    );
}

export default Header;