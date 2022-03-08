import '../styles/index.scss';
// import Header from "Main/Header";
// import Footer from "Main/Footer";
// import Recipes from "Common/Recipes";
import Header from './main/Header';
import Footer from './main/Footer';
import Recipes from './common/Recipes';
import choco from '../images/choco.png';
import chocoSvg from '../images/chocoSvg.svg';

const App = () => {
  return (
    <>
      <Header title="Header" />
      <section className="mero"></section>
      <main>
        <section>
          <h1>Hello Choco!</h1>
        </section>
        <img src={choco} alt="chocolate" width="250" />
        <Recipes />
        <img src={chocoSvg} alt="chocolate" width="250" />
      </main>
      <Footer name="Footer" />
    </>
  );
};

export default App;
