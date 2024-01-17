import github from '../Contact/GitHub-Logo.png';
import linkedin from '../Contact/Linkedin-Logo.webp';

import './style.scss';

function Home() {
  return (
    <div className="Home">
      <div className='Home-Presentation'>
        <h1 className='Home-Presentation-h1'>Cyril Chenet</h1>
        <h2 className='Home-Presentation-h2'>DEVELOPPEUR FULLSTACK</h2>
        <p className='Home-Presentation-p-yellow'>Hello !</p>
        <p className='Home-Presentation-p'>Je construis des API personnalisées ou des applications web garantissant une expérience utilisateur optimale.</p> 
      </div>
      <div className='Home-Contact'>
        <a href='https://www.linkedin.com/in/cyrilchenet/' target='_blanck'>
          <img className='Contact-linkedin' src={linkedin} alt='linkedin' />
        </a>
        <a href='https://github.com/Cyrillus5' target='_blanck'>
          <img className='Contact-GitHub' src={github} alt='GitHub' />
        </a>
      </div>     
    </div>
  );
}

export default Home;