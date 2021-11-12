import './App.css';
import Logo from "./img/logo_z.png"
import MetricTape1 from "./img/Bitmap2x.png"
import MetricTape2 from "./img/Bitmap2x_2.png"
import YouTube from "./img/youTube.png"
import FaceBook from "./img/fBook.png"
import Twitter from "./img/twitter.png"
import ThreePoints from "./img/3pontos.png"

function App() {
  if (window.screen.width > 720) {
    return (
      <div className="App">
        {/* cabeçalho*/}
        <header className='header'>
          <img src={Logo} alt="Logo" width="69" height="69" className='zutterLogo' />
          <span className='zutterLogoTitulo'>zutterman</span>
          <span className='zutterLogoDesc'>Measure Tapes</span>
          <ul className='menu'>
            <li className='menuOptions'> ABOUT US</li>
            <li className='menuOptions'> MODELS</li>
            <li className='menuOptions'> GUARANTEE</li>
          </ul>
        </header>
        <div className='content'>
          <div className='contentAlign'>
            <div className='contentText'>
              <span>Measuring</span>
              <span>everything</span>
            </div>
            <img src={MetricTape1} alt='fitamétrica' className='tapeImg' />
          </div>
        </div>
        <div className='content2'>
          <div className='contentAlign2'>
            <div className='contentText'>
              <span className='spanWeAre'>We are Leader in Measure Tapes</span>
              <span className='spanThere'>There are 5x the circumference of planet earth in metric tapes.</span>
            </div>
            <img src={MetricTape2} alt='fitamétrica2' className='tapeImg2' />
          </div>
        </div>
        <footer className='footer'>
          <div className='followUs'>
            <span> Follow Us</span>
            <div className='followUsIcons'>
              <img src={YouTube} alt='youtube' />
              <img src={FaceBook} alt='FaceBook' />
              <img src={Twitter} alt='twitter' />
            </div>
          </div>
          <div className='contact'>
            <span className='contactTitle'>Contact</span>
            <span className='contactText'>2490 Leisure Lane San Luis Obispo California</span>
          </div>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="App-mobile">
        {/* cabeçalho*/}
        <header className='header-mobile'>
          <img src={Logo} alt="Logo" width="69" height="69" className='zutterLogo-mobile' />
          <img src={ThreePoints} alt="options" className='optionsPoints-mobile' />
          <span className='zutterLogoTitulo-mobile'>zutterman</span>
          <span className='zutterLogoDesc-mobile'>Measure Tapes</span>
          <ul className='menu-mobile'>
            <li className='menuOptions-mobile'> ABOUT US</li>
            <li className='menuOptions-mobile'> MODELS</li>
            <li className='menuOptions-mobile'> GUARANTEE</li>
          </ul>
        </header>
        <div className='content-mobile'>
          <div className='contentText-mobile'>
            <span>Measuring everything</span>
          </div>
          <img src={MetricTape1} alt='fitamétrica' className='tapeImg-mobile' />
        </div>
        <div className='content2-mobile'>
            <span className='spanWeAre-mobile'>We are Leader in Measure Tapes</span>
            <span className='spanThere-mobile'>There are 5x the circumference of planet earth in metric tapes.</span>
            <img src={MetricTape2} alt='fitamétrica2' className='tapeImg2-mobile' />
        </div>
        <footer className='footer-mobile'>
          <div className='followUs-mobile'>
            <span> Follow Us</span>
            <div className='followUsIcons-mobile'>
              <img src={YouTube} alt='youtube-mobile' />
              <img src={FaceBook} alt='FaceBook-mobile' />
              <img src={Twitter} alt='twitter-mobile' />
            </div>
          </div>
          <div className='contact-mobile'>
            <span className='contactTitle-mobile'>Contact</span>
            <span className='contactText-mobile'>2490 Leisure Lane San Luis Obispo California</span>
          </div>
        </footer>
      </div>
    );
  }
}
window.addEventListener('resize', function(){
  window.location.reload();
});
export default App;
