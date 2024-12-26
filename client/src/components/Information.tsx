import React from "react";

import { Row, Col } from 'react-bootstrap';
import Title from "./Title";
import '../styles/Information.css'

interface InformationProps {
    title: string;
    firstHeaderText: string;
    secondHeaderText: string;
    text: string;
    imgSrc: string;
    right?: boolean;
    reverse?:boolean
    components:any[]
  }
  



  
  const Information: React.FC<InformationProps> = ({ title, firstHeaderText, secondHeaderText, text, imgSrc,right,reverse,components }) => {
    return (
      <>
        <Row className={` ${right?'': 'flex-row-reverse'} `}>
            <br/>
          <Col className="mb-5 pt-5 " xs={12} lg={6}>
         
          <div className={`${right?'text-right':'text-left'} `}>
            <Title title={title} />
            <h2>{firstHeaderText}</h2>
            <h2>{secondHeaderText}</h2>
            <p>{text}</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {components.map((component, index)=>(
                <div key={index} className="py-3">
                  {component}
                </div>
              ))}

            </div>
     
          </Col>
          <Col className={`${right?'right':'left'}`} xs={12} lg={6}>

            <img className={`${right?'image-right':'image-left'}`}  src={imgSrc} alt="information" />
          </Col>
        </Row>
      </>
    );
  };
  
  export default Information;
