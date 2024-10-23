import { useState } from "react";
import Header from "./components/Header/Header";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import Main from "./components/Main/Main";

function App() {
  const [mainContent, setMainContent] = useState(null);
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (content, navItem) => {
    setMainContent(content);
    setActiveNav(navItem);
  };

  return (
    <>
      <LoadingComponent />
      <Header onNavClick={handleNavClick} activeNav={activeNav} />
      <Main>{mainContent}</Main>
    </>
  );
}

export default App;
