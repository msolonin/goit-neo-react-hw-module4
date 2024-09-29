import css from './ImageCard.module.css';

const ImageCard = ({photo}) => {

  return (
      <div className={css.imageCard}>
          <img src={photo.urls.small} alt={photo.alt_description}/>
          <div>
              <strong>Likes: </strong>
              <span>{photo.likes}</span>
          </div>
      </div>
  );
};

export default ImageCard;
