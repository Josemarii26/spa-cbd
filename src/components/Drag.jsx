import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export function Drag() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log('page to reload')
  }



  function handleApi() {

    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://127.0.0.1:5000/upload', formData).then((res) => {
      console.log(res);
      console.log(res.data);
      setData(res.data);
    });
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: 800,
            height: 400,
            border: '2px solid gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            const maxSize = 3000000;
            const allowedExtensions = /(\.jpeg|\.webp|\.jpg|\.png)$/i;
            const file = e.dataTransfer.files[0];
            if (!allowedExtensions.exec(file.name)) {
              setErrorMessage('Invalid file type. Only JPEG, JPG , WEBP and PNG files are allowed.');
            } else if (file.size > maxSize) {
              setErrorMessage('The file is too large (max 3Mb)');
            } else {
              setImage(file);
              setErrorMessage(null);
            }
          }}
        >
          {image ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              src={URL.createObjectURL(image)}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          ) : (
            <div>Drag an image here</div>
          )}
        </div>

        {errorMessage && <div>{errorMessage}</div>}
        {!errorMessage && <button onClick={handleApi}>Send</button>}
        <button onClick={refreshPage}>
          <Link to={{ pathname: "/" }} className="no-decoration-link">Reload</Link>
        </button>
        {data && <p>{data}</p>}
      </div>
    </div>
  );

}

export default Drag;