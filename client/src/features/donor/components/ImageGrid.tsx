// src/components/ImageGrid.tsx
import React from 'react';
import '../styles/ImageGrid.css'; // Import the CSS file
// import image1 from '../assets/'
// import image2 from '../assets/'
// import image3 from '../assets/'
// import image4 from '../assets/'


// import image5 from '../assets/dad and son on computer.png'


import { Col, Row } from 'react-bootstrap';

const ImageGrid: React.FC = () => {
  const images: any[] = [];

  
  return (
    <Row className="image-grid px-4">
      {images.map((image, index) => (
        <Col xs={12} md={4} lg={3} key={index} className="image-item">
          <img src={image.src} alt={image.text} className="image" />
        
        </Col>
      ))}
    </Row>
  );
};

export default ImageGrid;
