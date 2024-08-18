import SlideShow from "../../Fragment/SlideShow";
import Header from "../../Fragment/Header";
import Footer from "../../Fragment/Footer";
import Image from "../../Element/Image";
import Heading from "../../Element/Heading";
import Paragraf from "../../Element/Paragraf";
import Icon from "../../Element/Icon";
import Quote from "../../Fragment/Quote";
import Route from "../../Fragment/Route";
import Overview from "../../Fragment/Overview";

function Home() {
  return (
    <>
      <Header />
      <section id="home" className="home">
        <div className="item item-1">
          <SlideShow.One />
        </div>
        <div className="item item-2">
          <Overview />
        </div>
        <div className="item item-3">
          <Route />
        </div>
        <div className="item item-4">
          <Quote.One />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
