import { useState } from "react";

import { Main } from "./components/main";
import { Footer } from "./components/Footer";
import { SiderBar } from "./components/SideBar";

function App() {
  const [showModal, setVis] = useState(false);

  const toggleModle = () => {
    setVis(!showModal);
  };
  return (
    <>
      <Main />

      {showModal && <SiderBar toggleDisplay={toggleModle} />}

      <Footer toggleDisplay={toggleModle} />
    </>
  );
}

export default App;
