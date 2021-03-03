import "./App.css";
import Contact from "./modules/Contact/Contact";
import Header from "./modules/Header/Header";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (


      <div className="wrapper" id="wrapper">
        <Header />
        <Portfolio />
        <Contact />
      </div>
  );
}

export default App;
