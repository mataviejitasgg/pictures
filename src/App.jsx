import { useState } from 'react';
import SearchBar from './componets/SearchBar';
import ImageList from "./componets/ImageList";
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    console.log("Usted está buscando con:", term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
