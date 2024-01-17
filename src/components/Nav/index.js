import { Link } from 'react-router-dom';
import './style.scss';

function Nav() {
  return (
    <div className="Nav">
      <Link to='/' >
          <div className='Nav-Me'>Home</div>
      </Link>      
      <div className='Nav-listButton'>        
        <Link to='/a-propos' className='Nav-listButton-Button'>Moi !</Link>
        <Link to='/competences' className='Nav-listButton-Button'>Compétences</Link>
        <Link to='/portfolio' className='Nav-listButton-Button'>Portfolio</Link>
        <Link to='/experience' className='Nav-listButton-Button'>Expérience</Link>
        <Link to='/contact' className='Nav-listButton-Button'>Contact</Link>
      </div>
      
    </div>
  );
}

export default Nav;