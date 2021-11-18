import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import {useState} from 'react';
import { ThemeProvider } from "./Context";

const App = () => {

  const [dark, setDark] = useState(false)


    return (
      <div>
       <Toggle />
       <Intro />
         <ThemeProvider>
           <About />
           <ProductList />
          </ThemeProvider>
       <Contact />
      </div>
    )
};

export default App;