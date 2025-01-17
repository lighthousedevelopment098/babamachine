// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './Gallery.css'; // Assuming the styles are in Gallery.css

// const Gallery = () => {
//   const [mainIndex, setMainIndex] = useState(0);
//   const [thumbIndex, setThumbIndex] = useState(0);

//   const mainImages = [
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0274.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0276.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0236.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0237.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0238.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0239.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0240.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0241.jpg",
//     // Add more images here as needed
//   ];

//   const thumbnailImages = [
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0274.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0276.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0236.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0237.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0238.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0239.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0240.jpg",
//     "https://www.machinelines.com/wp-content/uploads/2024/11/100_0241.jpg",
//     // Add more thumbnails here as needed
//   ];

//   const handleMainPrev = () => {
//     setMainIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mainImages.length - 1));
//     setThumbIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : thumbnailImages.length - 1));
//   };

//   const handleMainNext = () => {
//     setMainIndex((prevIndex) => (prevIndex < mainImages.length - 1 ? prevIndex + 1 : 0));
//     setThumbIndex((prevIndex) => (prevIndex < thumbnailImages.length - 1 ? prevIndex + 1 : 0));
//   };

//   const handleThumbPrev = () => {
//     setThumbIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : thumbnailImages.length - 3));
//     setMainIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mainImages.length - 1));
//   };

//   const handleThumbNext = () => {
//     setThumbIndex((prevIndex) => (prevIndex < thumbnailImages.length - 3 ? prevIndex + 1 : 0));
//     setMainIndex((prevIndex) => (prevIndex < mainImages.length - 1 ? prevIndex + 1 : 0));
//   };

//   return (
//     <div className="gallery">
//       {/* Main Image Slider */}
//       <div className="main-slide">
//         <div className="arrow prev" onClick={handleMainPrev}>
//           <FaArrowLeft />
//         </div>
//         <img src={mainImages[mainIndex]} alt={`Main Image ${mainIndex}`} className="main-image" />
//         <div className="arrow next" onClick={handleMainNext}>
//           <FaArrowRight />
//         </div>
//       </div>

//       {/* Thumbnail Slider with 3 images at a time */}
//       <div className="thumbnail">
//         <div className="thumbnail-arrow prev" onClick={handleThumbPrev}>
//           <FaArrowLeft />
//         </div>

//         <div className="thumb-container">
//           {thumbnailImages.slice(thumbIndex, thumbIndex + 3).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index}`}
//               className={`thumbnail-image ${index === mainIndex ? 'active' : ''}`}
//               onClick={() => setMainIndex(thumbIndex + index)}
//             />
//           ))}
//         </div>

//         <div className="thumbnail-arrow next" onClick={handleThumbNext}>
//           <FaArrowRight />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;





import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Gallery.css'; // Assuming the styles are in Gallery.css

const Gallery = ({ images }) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);

  // Set the main images and thumbnail images from props
  const mainImages = images;
  const thumbnailImages = images;

  const handleMainPrev = () => {
    setMainIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mainImages.length - 1));
    setThumbIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : thumbnailImages.length - 1));
  };

  const handleMainNext = () => {
    setMainIndex((prevIndex) => (prevIndex < mainImages.length - 1 ? prevIndex + 1 : 0));
    setThumbIndex((prevIndex) => (prevIndex < thumbnailImages.length - 1 ? prevIndex + 1 : 0));
  };




  return (
    <div className="gallery mb-10">
      {/* Main Image Slider */}
      <div className="main-slide">
        <div className="arrow prev" onClick={handleMainPrev}>
          <FaArrowLeft />
        </div>
        <img src={mainImages[mainIndex]} alt={`Main Image ${mainIndex}`} className="main-image" />
        <div className="arrow next" onClick={handleMainNext}>
          <FaArrowRight />
        </div>
      </div>

      {/* Thumbnail Slider with 3 images at a time */}
      <div className="thumbnail">
       

        <div className="thumb-container">
          {thumbnailImages.slice(thumbIndex, thumbIndex + 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail-image ${index === mainIndex ? 'active' : ''}`}
              onClick={() => setMainIndex(thumbIndex + index)}
            />
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default Gallery;
