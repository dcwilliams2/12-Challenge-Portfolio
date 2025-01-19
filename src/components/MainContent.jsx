import { Outlet } from "react-router-dom";
import '../styles/Style.css';

function MainContent() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export default MainContent;