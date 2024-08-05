import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
/*import './article.css'; // Importa el archivo CSS personalizado */

const cardsData = [
  {
    image: '/images/imagen1.jpg',
    title: 'Lizard 1',
    description: 'Description for Lizard 1',
  },
  {
    image: '/images/imagen2.jpg',
    title: 'Lizard 2',
    description: 'Description for Lizard 2',
  },
  {
    image: '/images/imagen3.jpg',
    title: 'Lizard 3',
    description: 'Description for Lizard 3',
  },
  {
    image: '/images/imagen4.jpg',
    title: 'Lizard 4',
    description: 'Description for Lizard 4',
  },
  {
    image: '/images/imagen5.jpg',
    title: 'Lizard 5',
    description: 'Description for Lizard 5',
  },
  {
    image: '/images/imagen6.jpg',
    title: 'Lizard 6',
    description: 'Description for Lizard 6',
  },
  {
    image: '/images/imagen7.jpg',
    title: 'Lizard 7',
    description: 'Description for Lizard 7',
  },
  {
    image: '/images/imagen8.jpg',
    title: 'Lizard 8',
    description: 'Description for Lizard 8',
  },
];

function ActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
        />
        <CardContent
          sx={{
            backgroundColor: 'transparent', // Fondo transparente
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: 'black' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function CardsGrid() {
  return (
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ActionAreaCard 
            image={card.image} 
            title={card.title} 
            description={card.description} 
          />
        </Grid>
      ))}
    </Grid>
  );
}
