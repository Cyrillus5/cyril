import { Link } from 'react-router-dom';
import './style.scss';

function Nav() {
  return (
    <div className="Nav">
      <Link to='/' >
          <div className='Nav-Me'>Cyril</div>
      </Link>      
      <div className='Nav-listButton'>
        
        <Link to='/a-propos' className='Nav-Button'>Moi !</Link>
        <Link to='/competences' className='Nav-Button'>Compétences</Link>
        <Link to='/portfolio' className='Nav-Button'>Portfolio</Link>
        <Link to='/experience' className='Nav-Button'>Expérience</Link>
        <Link to='/contact' className='Nav-Button'>Contact</Link>
      </div>
      
    </div>
  );
}

export default Nav;