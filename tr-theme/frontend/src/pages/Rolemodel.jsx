import '../styles/rolemodel.css';
import textbackground from '../img/textbackground.png'; // Importera bakgrundsbilden i React

export const Rolemodel = () => { 
  return (
    <>
      <div className="container-first-section">
        <div className="hero-rolemodel">
          <h1>Namn efternamn</h1>
          <p>text text text text text text text</p>
        </div>
        <div className="img-rolemodel">
          <img src="path_to_image_3.png" alt="rolemodel" />
        </div>
      </div>
      <div
        className="container-second-section"
        style={{
          backgroundImage: `url(${textbackground})`
        }}
      >
        <div className="p-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi
            esse consequatur excepturi harum. Corporis aliquam quibusdam iure mollitia
            quidem! Beatae, recusandae at! Laudantium non culpa itaque, officiis error
            impedit...
          </p>
        </div>
      </div>
    </>
  );
}

export default Rolemodel;
