import { useState } from "react";
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return<AboutMe />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
       return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="mx-3">{renderPage()}</main>  {/*// Im not sure if i need this */}
    </div>
    );
}

