import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './styles.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} {...image} onClick={() => onImageClick(image.largeImageURL)} />
    ))}
  </ul>
);

export default ImageGallery;