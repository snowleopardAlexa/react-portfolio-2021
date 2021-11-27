import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from 'react';
import { ThemeContext } from "./Context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    return (
      <div 
        style=
        {{
          backgroundColor: darkMode ?  "#f5f5f5" : "#191919",
          color: darkMode ?  "#191919" : "#f5f5f5",
        }}
       >
       <Toggle />
       <Intro />
       <About />
       <ProductList />
       <Contact />
      </div>
    )
};

export default App;