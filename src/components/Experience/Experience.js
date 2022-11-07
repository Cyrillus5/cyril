import conge from './conge-paternité.webp'
import './style.scss';

function Experience() {
  return (
    <div className="Experience">
      <h1 className='Experience-h1'>Mon Expérience</h1>
      
      <div className='Experience-descriptions'>
        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Développeur Web</h2>
          <h3 className='Experience-descriptions-details-where'>Ecole O'clock</h3>
          <p className='Experience-descriptions-details-when'>mai 2022 - octobre 2022</p>
          <p className='Experience-descriptions-details-comments'>CosyWorking : développement d'un site Web permettant à des travailleurs nomades de louer des bureaux chez des particuliers</p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> React.js · SQL · Node.js · JavaScript · CSS · méthode agile · redux / redux persist · axios</p>
        </div>  
      
        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Tokenisation immobilière</h2>
          <h3 className='Experience-descriptions-details-where'>Projet de création entreprise</h3>
          <p className='Experience-descriptions-details-when'>déc. 2020 - sept. 2021</p>
          <p className='Experience-descriptions-details-comments'>Étude technique des blockchains Ethereum / Binance Smart Chain (BSC)</p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Autonomie · Recherche partenaires · Curiosité intellectuelle · Gestion de projet</p>
        </div>  

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Congé parental</h2>
          <p className='Experience-descriptions-details-when'>sept. 2018 - oct. 2020</p>
          <img src={conge} alt='' className='Experience-descriptions-details-img' />          
          <p className='Experience-descriptions-details-comments'>Étude technique des bébés !</p>          
        </div>

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Fundraiser / communication</h2>
          <h3 className='Experience-descriptions-details-where'>Indah association</h3>
          <p className='Experience-descriptions-details-when'>janv. 2017 - juin 2018</p>
          <p className='Experience-descriptions-details-comments'>Conception d'outils de prospection :
            <ul>
              <li>- Site web (organisation, présentation, ...)</li>
              <li>- Création graphique (plaquettes, flyers, ...)</li>
              <li>- Pilotage de Google Ads (Google AdWords)</li>
            </ul>            
          </p>
          <p className='Experience-descriptions-details-comments'>Stratégie de collecte de fonds :
            <ul>
              <li>- Définition de la stratégie de collecte de fonds, en cohérence avec la stratégie globale de l’association</li>
              <li>- Définition d’un plan des opérations de prospection et de fidélisation des différentes cibles (donateurs, grands donateurs, entreprises, fondations, barreaux, professionnels de la justice, etc.)</li>
            </ul>
          </p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Communication sur les réseaux sociaux · Collecte de fonds · Travail d’équipe · Autonomie · Gestion de projet</p>
        </div>  

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Project Manager / Chargé de mission</h2>
          <h3 className='Experience-descriptions-details-where'>SOS FAIM Belgique</h3>
          <p className='Experience-descriptions-details-when'>mai 2016 - juil. 2016</p>
          <p className='Experience-descriptions-details-comments'>Étude de faisabilité afin d'appréhender en quoi l’appartenance à un réseau international contribue ou non au renforcement des capacités de l'ONG SOS FAIM et à son rayonnement international.
          </p>
          <p className='Experience-descriptions-details-comments'>Étude afin de faciliter l'accès des producteurs vulnérables aux intrants agricoles par la téléphonie mobile au Mali.</p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Travail d’équipe · Curiosité intellectuelle</p>
        </div>  

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Animateur territorial</h2>
          <h3 className='Experience-descriptions-details-where'>Auvergne-Rhône-Alpes Entreprises · CDI</h3>
          <p className='Experience-descriptions-details-when'>avr. 2012 - sept. 2014</p>
          <p className='Experience-descriptions-details-comments'>Mission transversale pour la réalisation de diagnostics territoriaux à l'échelle d'une EPCI (communauté de communes ou d’agglomération) : captation, gestion et mise en relation de données croisements Data), utilisation de plateforme de cartographie interactive.</p>
          <p className='Experience-descriptions-details-comments'>Animation d'un groupe d'agents territoriaux du département de l'Allier pour l'apport d'information et de benchmark sur le développement économique et durable.</p>
          <p className='Experience-descriptions-details-comments'>Appui auprès des collectivités territoriales pour la promotion et le développement économique de leurs zones d'activités intégrant une démarche de qualité environnementale et de développement durable (conseils, réalisation de plaquettes et dossiers techniques, benchmark, ...).</p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Coordination d’équipe · Animation de réunions · Animation d’équipes · Travail d’équipe · Analyse de données</p>
        </div> 

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Manager / Gérant</h2>
          <h3 className='Experience-descriptions-details-where'>Zutopi</h3>
          <p className='Experience-descriptions-details-when'>sept. 2010 - sept. 2013</p>
          <p className='Experience-descriptions-details-comments'>En 2011, j’ai pu exprimer mon intérêt pour le développement durable et l'économie solidaire en créant la société Zutopi, un moteur de recherche Internet et solidaire en partenariat avec WWF, Unicef, GoodPlanet et Babyloan.org. Sa création avait nécessité une connaissance des acteurs du développement durable, de l’Internet et une rigueur dans l’accomplissement du projet sur les aspects techniques, partenariats et financiers.
          </p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Gestion de projet web · Financement de projet · Développement web · Autonomie</p>
        </div>  

        <div className='Experience-descriptions-details'>
          <h2 className='Experience-descriptions-details-h2'>Chargé de mission Développement Durable</h2>
          <h3 className='Experience-descriptions-details-where'>Conseil Départemental d'Eure-et-Loir</h3>
          <p className='Experience-descriptions-details-when'>avril 2007 - déc 2010</p>
          <p className='Experience-descriptions-details-comments'>Au sein de la Direction générale des services, j'étais en charge d'une mission transversale afin de piloter l'Agenda 21 du Département en suscitant l’adhésion en interne. Cette démarche nécessitait la prise en compte des dimensions économiques, culturels, touristiques et humaines d’un territoire en réaffirmant son identité. Elle nécessita également la collecte de nombreuses données du territoire concerné. J'étais également en charge de la réalisation d’une centrale photovoltaïque au sol de grande envergure sur une ancienne base militaire.
          </p>
          <p className='Experience-descriptions-details-skills'><strong>Compétences :</strong> Gestion d’équipe · Planification financière · Gestion de projet · Planification de projets</p>
        </div>  

      </div>

    </div>
  );
}

export default Experience;