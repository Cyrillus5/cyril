import './style.scss';

function About() {
  return (
    <div className="About">
      <h1 className='About-title'>Qui suis-je ?</h1>
      <div className='About-descriptions'>
        <p className='About-descriptions-article About-descriptions-article-5'>
          Mobile, à la recherche d'une opportunité professionnelle, disponible à partir d'Octobre 2022.
        </p>
        <p className='About-descriptions-article About-descriptions-article-1'>
        👋 En reconversion professionnelle pour me consacrer à l'une de mes passions : le développement web. 
        </p>
        <p className='About-descriptions-article About-descriptions-article-2'>
          ⭐ J'ai suivi  la formation Développeur Fullstack JavaScript chez O'Clock, moderne et intensive, pour apprendre le développement web.
        </p>
        <p className='About-descriptions-article About-descriptions-article-3'>
          💪 6 mois intenses à coder HTML, CSS, SQL, Vanilla JavaScript, React, Express, ... dont 1 mois pour me spécialiser sur React (Babel / hooks / router / Prop-types / Webpack ...).
        </p>
        <p className='About-descriptions-article About-descriptions-article-3bis'>
          WHO AM I ?
        </p>
        <p className='About-descriptions-article About-descriptions-article-4'>
          🙋‍♂️Doté d'une capacité d'adaptation, je suis dynamique et curieux. Je suis certain de pouvoir apporter mes compétences et mes connaissances à votre entreprise. 
        </p>        
        <p className='About-descriptions-article About-descriptions-article-6'>
          Je vous invite à consulter mes réalisations sur mon github et à me contacter pour échanger !
          ▶️<a href='https://github.com/Cyrillus5' target='_blanck'>https://github.com/Cyrillus5</a>
        </p>
      </div>
    </div>
  );
}

export default About;
