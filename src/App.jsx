import {toast, Toaster} from "react-hot-toast";
import {useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {fetchPhotos} from "./js/unsplash-api.js";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [queryString, setQueryString] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [backendError, setBackendError] = useState('');

    const onSubmit = async (submitValue) => {
        try {
            setLoading(true);
            const newPhotos = await fetchPhotos(submitValue, 1, 10); // Fetch new photos
            setPhotos(newPhotos);
            setQueryString(submitValue);
        } catch (error) {
            setBackendError("Error fetching photos: " + error);
            // toast.error("Error fetching photos: " + error);
        } finally {
            setLoading(false);
        }
    };

    const onLoadMore = async () => {
        try {
            setLoading(true);
            const newPhotos = await fetchPhotos(queryString, page + 1, 10); // Fetch new photos
            setPhotos([...photos, ...newPhotos]); // Set state with fetched photos
            setPage(page + 1); // Increase page number
        } catch (error) {
            // toast.error("Error fetching photos: " + error);
            setBackendError("Error fetching photos: " + error);
        } finally {
            setLoading(false);
        }
    }

    const openModal = (photo) => {
        setSelectedImage(photo);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <>
            <SearchBar onSubmit={onSubmit} />
            {photos.length > 0 ? (
                <ImageGallery photos={photos} openModal={openModal} />
            ) : (
                <p>Nothing to display.</p>
            )}
            {backendError !== '' && <ErrorMessage backendError={backendError} />}
            {loading && <Loader />}
            {photos.length > 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
            <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
        </>
    );
}

export default App;
