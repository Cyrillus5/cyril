import './style.scss';
import cryptoballz from '../../CryptoballZ.png';
import itsizy from '../../Itsizy.png';
import cosyworking from '../../cosyworking.png';
import montaeg from '../../monTAEG.png';
import evalie from '../../Evalie.png';
import { Box, Button, Card, Typography } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';


function Projects() {  
 

  return (
    <div className="Projects">
      <h1 className='Projects-h1'>Portfolio</h1>
      <div className='Projects-Box'>
      <Card class='Projects-Box-Card' variant="outlined">
          <Typography class='Projects-Box-Card-title'>
            Evalie
          </Typography>
          <Typography class='Projects-Box-Card-synopsis'>Application permettant de trouver les aides financières possible pour rénover son logement</Typography>
          
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img
              src={evalie}
              srcSet={evalie}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                Stack : JS / React JS / Redux toolkit / Axios / HTML / CSS
              </Typography>
            </div>
            <Button
                class='Projects-Box-Card-Button'
                variant="solid"
                size="sm"
                color="primary"
                aria-label="Evalie"
                sx={{ ml: 'auto', fontWeight: 600 }}
                href='https://www.evalie.fr/'
                target="_blank"
              >
                Visiter le site
              </Button>
          </Box>
        </Card>

        <Card class='Projects-Box-Card' variant="outlined">
          <Typography class='Projects-Box-Card-title'>
            API-Evalie
          </Typography>
          <Typography class='Projects-Box-Card-synopsis'>API RESTfull permettant de trouver les aides financières possible pour rénover son logement exploitant des API RESTfull externes</Typography>
          
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img
              src={evalie}
              srcSet={evalie}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                Stack : Node JS / Express / Swagger / JS / Axios / HTML / CSS
              </Typography>
            </div>
            <Button
                class='Projects-Box-Card-Button'
                variant="solid"
                size="sm"
                color="primary"
                aria-label="API Evalie"
                sx={{ ml: 'auto', fontWeight: 600 }}
                href='https://api.evalie.fr/'
                target="_blank"
              >
                Visiter le site
              </Button>
          </Box>
        </Card>

        <Card class='Projects-Box-Card' variant="outlined">
          <Typography class='Projects-Box-Card-title'>
            CryptoBallZ
          </Typography>
          <Typography class='Projects-Box-Card-synopsis'>Site pédagogique sur les cryptomonnaies et les blockchains.</Typography>
          
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img
              src={cryptoballz}
              srcSet={cryptoballz}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                Projet solo réalisé de A à Z en Vanilla JS / NodeJS / Express / bcrypt / PostgreSQL / Sequelize / Identification Admin (Middleware) / HTML / CSS / Bulma
              </Typography>
            </div>
          </Box>
        </Card>

        <a href="https://itsizy.surge.sh/" target="_blank" rel="noopener noreferrer">
          <Card class='Projects-Box-Card' variant="outlined">
            <Typography class='Projects-Box-Card-title'>
              Itsizy
            </Typography>
            <Typography class='Projects-Box-Card-synopsis'>
              Moteur de recherche Internet basé sur l'API REST de Google Search.
            </Typography>          
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
              <img
                src={itsizy}
                srcSet={itsizy}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                  Search Engine utilisant l'API de Google Search : API RESTful / NodeJS / React / Redux / Hooks / Axios / CSS SASS / Semantic ui / PropTypes
                </Typography>
              </div>
              <Button
                class='Projects-Box-Card-Button'
                variant="solid"
                size="sm"
                color="primary"
                aria-label="Itsizy"
                sx={{ ml: 'auto', fontWeight: 600 }}
                href='https://itsizy.surge.sh/'
                target="_blank"
              >
                Visiter le site
              </Button>
            </Box>
          </Card>
        </a>


        <a href="http://cosyworking.surge.sh/" target="_blank" rel="noopener noreferrer">
          <Card class='Projects-Box-Card' variant="outlined">
            <Typography class='Projects-Box-Card-title'>
              CosyWorking
            </Typography>
            <Typography class='Projects-Box-Card-synopsis'>
              Site de location de bureaux entre travailleurs nomades et particuliers.
            </Typography>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
              <img
                src={cosyworking}
                srcSet={cosyworking}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                  Projet en équipe (méthode Agile) réalisé de A à Z avec ReactJS / NodeJS / Express / bcrypt / PostgreSQL / Identification Admin (Middleware) / JWT / HTML / CSS / Mui element
                </Typography>
              </div>
              <Button
                class='Projects-Box-Card-Button'
                variant="solid"
                size="sm"
                color="primary"
                aria-label="CosyWorking"
                sx={{ ml: 'auto', fontWeight: 600 }}
                href='http://cosyworking.surge.sh/'
                target="_blank"
              >
                Visiter le site
              </Button>
            </Box>
          </Card>
        </a>



        <a href="https://montaeg.surge.sh/" target="_blank" rel="noopener noreferrer">
          <Card class='Projects-Box-Card' variant="outlined">
            <Typography class='Projects-Box-Card-title'>
              MonTAEG
            </Typography>
            <Typography class='Projects-Box-Card-synopsis'>Site permettant de calculer le TAEG de son crédit immobilier.</Typography>
            
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
              <img
                src={montaeg}
                srcSet={montaeg}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography class='Projects-Box-Card-description' fontSize="lg" fontWeight="lg">
                  Javascript / NodeJS / ReactJS
                </Typography>
              </div>
              <Button
                class='Projects-Box-Card-Button'
                variant="solid"
                size="sm"
                color="primary"
                aria-label="monTAEG"
                sx={{ ml: 'auto', fontWeight: 600 }}
                href='https://montaeg.surge.sh/'
                target="_blank"
              >
                Visiter le site
              </Button>
            </Box>
          </Card>
        </a>

      </div>      

    </div>
  );
}

export default Projects;
