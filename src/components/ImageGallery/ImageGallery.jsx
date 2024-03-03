import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <Gallery>
      {items.map(({ webformatURL, id, largeImageURL }, index) => {
        return (
          <ImageGalleryItem
            key={id + index}
            id={id}
            sourceImg={webformatURL}
            largeImg={largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </Gallery>
  );
};
