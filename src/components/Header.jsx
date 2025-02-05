import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header>
            <div>
                <div class="row">
                    <div class="col-4">
                    <h1 class="ps-5 ms-5">Daniel</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4">
                    <h1 class="ms-5 ps-5"> Williams</h1>
                    </div>
                    <div class="col-7">
                    <Navigation/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;