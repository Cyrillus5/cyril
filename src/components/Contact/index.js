import github from './GitHub-Logo.png';
import linkedin from './Linkedin-Logo.webp';
import './style.scss';

function Contact() {  
    return (
    <div className="Contact">
      <h1 className="Contact-h1">Contact</h1>
      <p className='Contact-email'>chenetcyril@free.fr</p>
      <a href='https://www.linkedin.com/in/cyrilchenet/' target='_blanck'>
        <img className='Contact-linkedin' src={linkedin} alt='linkedin' />
      </a>
      <a href='https://github.com/Cyrillus5' target='_blanck'>
        <img className='Contact-GitHub' src={github} alt='GitHub' />
      </a>
    </div>
  );
}

export default Contact;