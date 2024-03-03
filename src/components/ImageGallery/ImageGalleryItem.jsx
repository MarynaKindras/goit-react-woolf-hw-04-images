import { GalleryItem, Image } from './ImageGallery.styled';

export const ImageGalleryItem = ({ id, largeImg, sourceImg, onClick }) => {
  return (
    <GalleryItem>
      <Image
        src={sourceImg}
        alt="img"
        onClick={() => onClick(largeImg, 'img')}
      />
    </GalleryItem>
  );
};
