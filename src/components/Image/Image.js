import React, { useState, useEffect } from 'react';

const Image = () => {
    const [images, setImages] = useState([])
    useEffect( () => {
        const url = ('https://jsonplaceholder.typicode.com/photos')
        fetch(url)
        .then(res => res.json())
        .then(data => {
           const first10 = data.slice(0, 10)
           //console.log(first10)
           setImages(data);
           const images = data.map( image => image.title)
           //console.log(images)

        })
        
    },

    ([]))


    return (
        <div>
            {images.title}
            {images.url}
            {images.thumbnailUrl}
        </div>
    );
};

export default Image;