import Hero from "../components/Hero/Hero";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import About from "../components/About/About";

import "./App.css";

import { galleries } from "../data/galleries";

function App() {
  return (
    <>
      <Hero /> 
      <hr/>
      <About />
      <hr/>
      <section id="gallery-section">
        <ImageGallery gallery={galleries[3]} /><hr/>
        <ImageGallery gallery={galleries[1]} /><hr/>
        <ImageGallery gallery={galleries[0]} /><hr/>
        <ImageGallery gallery={galleries[2]} />
      </section>
      <hr/>
    </>
  )
}

export default App;
