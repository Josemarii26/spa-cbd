import React, { useState } from 'react';
import axios from 'axios';

export function Prueba() {
  const [image, setImage] = useState('')
  const [data, setData] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleImage(e) {
    const maxSize = 1000000;
    const file = e.target.files[0];
    console.log(e.target.file);
    setImage(file);
    if (file && file.size > maxSize) {
      setErrorMessage('El archivo es demasiado grande');
    }else{
      setErrorMessage(null);
    }
  }

  function handleApi() {
    
    const formData = new FormData();
    formData.append('image', image);
    
  
    axios.post('http://127.0.0.1:5000/upload',formData).then((res)=> {
      console.log(res)
      console.log(res.data)
      setData(res.data);
    })
  }
  
  return (
    <div>
      <input name="file" type="file" accept="image/*" onChange={handleImage} />
      {errorMessage && <div>{errorMessage}</div>}
      {!errorMessage && <button onClick={handleApi}>Enviar imagen</button>}
      <p>{data}</p>
    </div>
    
  );
}
