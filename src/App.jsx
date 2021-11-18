import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";

const App = () => {
    return (
      <div>
       <Toggle />
       <Intro />
       <About />
       <ProductList />
       <Contact />
      </div>
    )
};

export default App;