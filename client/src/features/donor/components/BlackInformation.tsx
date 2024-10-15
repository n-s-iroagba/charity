import { Row, Col } from "react-bootstrap";
import Title from "./Title";
import DonationButton from "./DonationButton";
import donation from '../assets/donation.webp';
import secure from '../assets/secure.webp';
import '../styles/BlackInformation.css';

const BlackInformation = () => {
  return (
    <>
      <Row className="black-info text-light mt-5 px-3 bg-dark">
        <Col className='mb-5' xs={12} lg={6}>
          <Title dark title={'Spotlight Humanity'} />
          <h2 className="text-light"><span className="text-warning">Help us Make A Difference,</span> in Ukraine, Gaza, and Syria</h2>
        </Col>
        <Col lg={6}>
          <p className="text-light">With a mission to uplift communities, Spotlight Humanity has made a significant impact by assisting countless individuals and raising awareness.</p>
          <Row>
            <Col lg={6}>
              <img className="w-50" src={donation} alt='secure' />
              <p><strong>Eligible Donations</strong></p>
              <DonationButton />
            </Col>
            <Col lg={6}>
              <img className="w-50" src={secure} alt='donation' />
              <p><strong>Secure Giving</strong></p>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center overflow-video-container" xs={12}>
          <video className="black-video" autoPlay loop muted>
            <source src="/Videos/headervideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </>
  );
};

export default BlackInformation;
