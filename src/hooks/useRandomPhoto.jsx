import { useState, useEffect } from 'preact/hooks';

const WIDTH = 400;

const useRandomPhoto = () => {
  const [photoURL, setPhotoURL] = useState(null);

  const fetchPhoto = async () => {
    const response = await fetch(`https://picsum.photos/${WIDTH}`);
    setPhotoURL(response.url);
  };

  const refresh = () => fetchPhoto();

  useEffect(() => {
    fetchPhoto();
  }, []);

  return {
    photoURL,

    refresh,
  };
};

export default useRandomPhoto;
