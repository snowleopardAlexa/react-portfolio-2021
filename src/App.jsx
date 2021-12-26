import Intro from "./components/Intro/Intro";
import TechnologiesList from "./components/TechnologiesList/TechnologiesList";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
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
       <ProjectList />
       <TechnologiesList />
       <Resume />
       <Contact />
      </div>
    )
};

export default App;