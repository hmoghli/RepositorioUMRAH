import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(5),
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const StyledImageList = styled(ImageList)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  overflowX: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const itemData = [
  { img: '/images/imagen1.jpg', title: 'Imagen 1' },
  { img: '/images/imagen2.jpg', title: 'Imagen 2' },
  { img: '/images/imagen3.jpg', title: 'Imagen 3' },
  { img: '/images/imagen4.jpg', title: 'Imagen 4' },
  { img: '/images/imagen5.jpg', title: 'Imagen 5' },
  { img: '/images/imagen7.jpg', title: 'Imagen 6' },
  { img: '/images/imagen7.jpg', title: 'Imagen 7' },
  { img: '/images/imagen8.jpg', title: 'Imagen 8' },
  { img: '/images/imagen9.jpg', title: 'Imagen 9' },
  // Añadir más imágenes según sea necesario
];

export default function ImageGallery() {
  return (
    <StyledContainer>
      <h1>Galería de Imágenes</h1>
      <StyledImageList cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </StyledImageList>
    </StyledContainer>
  );
}
