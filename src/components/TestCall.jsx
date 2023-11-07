import React, { useState, useEffect } from 'react';
import { fetchImageURL } from '../utils/fetchImageUrl';

const ImageComponent = ({ searchTerm }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getImageUrl = async () => {
      const url = await fetchImageURL(searchTerm);
      setImageUrl(url);
    };
    getImageUrl();
  }, [searchTerm]);

  return <div>{imageUrl && <img src={imageUrl} alt={searchTerm} />}</div>;
};

export default ImageComponent;
