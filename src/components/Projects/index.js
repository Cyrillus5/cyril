import './style.scss';
import cryptoballz from '../../CryptoballZ.png';
import itsizy from '../../Itsizy.png';
import cosyworking from '../../cosyworking.png';
import { useState } from 'react';


function Projects() {  
  let [project1, setValue] = useState(false);
  const setView = () => {
    setValue(project1 = true)    
  };
  let [project2, setAgain] = useState(false);
  const setCard = () => {
    setAgain(project2 = true)    
  };

  return (
    <div className="Projects">
      <h1 className='Projects-h1'>Portfolio</h1>

      <div className='Projects-group'>

      <div className='Projects-group-presentation' onMouseOver={setView}>
        <div className='Projects-group-detail Projects-group-detail-right'>
          <a href='https://cryptoballz.com/' title='cryptoballz' target='_blanck'>
            <h2 className='Projects-group-presentation-title'>CryptoBallZ</h2>
           </a>
          {project1 && <p className='Projects-group-presentation-description'>Site pédagogique sur les cryptomonnaies et les blockchains.</p>}
          {project1 && <p className='Projects-group-presentation-techno'>Projet solo réalisé de A à Z en Vanilla JS / NodeJS / Express / bcrypt / PostgreSQL / Sequelize / Identification Admin (Middleware) / HTML / CSS / Bulma</p>}
          {!project1 && <div className='Projects-group-presentation-joke'>
            <img className='Projects-group-presentation-funny' src='https://38.media.tumblr.com/7cd9bc975faff277ea468ff3b213109f/tumblr_nray62QYpe1twzjm8o1_500.gif' alt='Itsizy' title='Itsizy' />
            <p className='Projects-group-presentation-funny-p'>Joue avec moi !</p>
            </div>} 
        </div>        
        <a href='https://cryptoballz.com/' title='cryptoballz' target='_blanck'>
          <img className='Projects-group-presentation-img' src={cryptoballz} alt='CryptoBallZ' title='CyptoBallZ' />
        </a>        
      </div>
      
      <div className={'Projects-group-presentation Projects-group-presentation-2'} onMouseOver={setCard}>
        <div className={'Projects-group-detail Projects-group-detail-left'}>
          <a href='https://itsizy.surge.sh/' title='itsizy' target='_blanck'>
            <h2 className='Projects-group-presentation-title'>Itsizy</h2>
          </a>
          {project2 && <p className='Projects-group-presentation-description'>Moteur de recherche Internet basé sur l'API REST de Bing Search</p>}
          {project2 && <p className='Projects-group-presentation-techno'>Search Engine utilisant l'API de Bing : API RESTful / NodeJS / React / Redux / Hooks / Axios / CSS SASS / Semantic ui / PropTypes</p>}
          {!project2 && <div className='Projects-group-presentation-joke'>
            <img className='Projects-group-presentation-funny' src='http://pa1.narvii.com/6818/7adf280ebce697e5c82d51243f0052cd3716f268_00.gif' alt='Itsizy' title='Itsizy' />
            <p className='Projects-group-presentation-funny-p'>Attrape moi !</p>
            </div>} 
        </div>        
        <a href='https://itsizy.surge.sh/' title='itsizy' target='_blanck'>
          <img className='Projects-group-presentation-img' src={itsizy} alt='Itsizy' title='Itsizy' />          
        </a>       
      </div>

      <div className='Projects-group-presentation' onMouseOver={setView}>
        <div className='Projects-group-detail Projects-group-detail-right'>
          <a href='http://cosyworking.surge.sh/' title='cosyWorking' target='_blanck'>
            <h2 className='Projects-group-presentation-title'>cosyWorking</h2>
           </a>
          {project1 && <p className='Projects-group-presentation-description'>Site de location de bureaux entre travailleurs nomades et particuliers</p>}
          {project1 && <p className='Projects-group-presentation-techno'>Projet en équipe (méthode agile) réalisé de A à Z avec ReactJS / NodeJS / Express / bcrypt / PostgreSQL / Identification Admin (Middleware) / HTML / CSS / Mui element</p>}
          {!project1 && <div className='Projects-group-presentation-joke'>
            <img className='Projects-group-presentation-funny' src='https://1.bp.blogspot.com/-h3sbdZhueNM/WDZIDKUPd-I/AAAAAAALaVY/pVDiMXWa73MJ1kwH3EPmj8QSXVDN5p4dQCLcB/s1600/AS002064_03.gif' alt='cosyWorking' title='Itsizy' />
            <p className='cosyWorking'>Try !</p>
            </div>} 
        </div>        
        <a href='http://cosyworking.surge.sh/' title='cosyWorking' target='_blanck'>
          <img className='Projects-group-presentation-img' src={cosyworking} alt='cosyWorking' title='cosyWorking' />
        </a>        
      </div>

      </div>

    </div>
  );
}

export default Projects;
