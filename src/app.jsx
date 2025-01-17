import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
    return (
       <>
        <Header /> 
        < PortfolioContainer /> 
        < Footer />
       </>
    );
}

export default App;

//Header - I don't think I need to import the navigation because it will be imported into header, but im not sure
// section - and have about me, portfolio, contact and resume imported to section.jsx (I think)