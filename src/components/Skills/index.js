import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import { useState } from 'react';
import './style.scss';

function Skills() {

  // let [value, setValue] = useState(false);
  // const appearText = (event) => {
  //   setValue(value = event.target.textContent)    
  // };   
  
  const itemData = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      title: 'Javascript',
      description: 'Javascript',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
      title: 'HTML',
      description: 'HTML',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
      title: 'CSS',
      description: 'CSS',
    },
    {
      img: 'https://infiniteblogs.blob.core.windows.net/medias/f486812a-1c7f-4802-ab9d-4c709f0f1bb7_0.png',
      title: 'redux',
      description: 'redux',
    },
    {
      img: 'https://solvers.fr/wp-content/uploads/2019/06/8-astuces-pour-ame%CC%81liorer-les-performances-des-applications-React.png',
      title: 'reactJS',
      description: 'reactJS',
    },
    {
      img: 'https://assets.website-files.com/60b9fdcaf8c317a1cfdb2bd9/60d5f030f4ba83b3edac24f0_NodeJS.jpeg',
      title: 'nodeJS',
      description: 'nodeJS',
    },
    {
      img: 'https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png',
      title: 'expressJS',
      description: 'expressJS',
    },
    {
      img: 'https://fr.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png',
      title: 'github',
      description: 'github',
    },
    {
      img: 'https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png',
      title: 'postgreSQL',
      description: 'postgreSQL',
    },
    {
      img: 'https://miro.medium.com/max/1400/1*3ZOwBIddHRkF7AkM2DjG1g.png',
      title: 'axios',
      description: 'axios',
    },
    {
      img: 'https://static.data.gouv.fr/images/6e/771280780b487bb68019c5f1053bf3.png',
      title: 'API Rest',
      description: 'API Rest',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
      title: 'SQL',
      description: 'SQL',
    },
    {
      img: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.png',
      title: 'babel',
      description: 'babel',
    },
  ];


  return (
    <div className="Skills">      
      <h1 className='Skills-title'>Mes Compétences</h1>
      <p className='Skills-intro'>Mes expériences professionnelles me permettent d'être aujourd'hui polyvalent, autonome, apte à la gestion de projet et de disposer de compétences techniques comme : </p>      
      <div className='Skills-all'>
        <Box className='Skills-all-Box' sx={{ maxWidth: 900,   marginTop: '2rem', padding: '0.5rem' }}>
          <ImageList variant="masonry" cols={5} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  className='Skills-all-Box-img'
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.description} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div> 
    </div>
  );
}

export default Skills;