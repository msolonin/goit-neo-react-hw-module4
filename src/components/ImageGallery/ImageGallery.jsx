import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul>
        {photos.map((photo) => (
          <li className={css.imageGallery} key={photo.id} onClick={() => openModal(photo)}>
              <ImageCard photo={photo} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
