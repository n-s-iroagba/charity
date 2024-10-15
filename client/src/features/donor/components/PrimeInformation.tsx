import { Row, Col } from "react-bootstrap"
import FeedButton from "./FeedButton"
import Title from "./Title"
import '../styles/PrimeInformation.css'

const PrimeInformation = ()=>{
    return <>
    <Row className="mt-5 px-3">
        <Col className='mb-5' xs={12} lg={6}>
            <Title title={'Spotlight Humanity'}/>
            <h2>Saving Lives</h2>
            <h2>Through <span className="text-warning">Charity</span></h2>
            <p>In the midst of <strong>Ukraine,Syria and Gaza's</strong> prolonged crises, countless families face daily struggles for essential needs like food, water, 
                and shelter – necessities often overlooked by many.</p>
            <p><strong>Join us in supporting the families of Ukraine,Syria and Gaza, and help bring hope and sustenance to those in need.</strong></p>
            <div className="w-33">
            <FeedButton/>
            </div>
        </Col>
        <Col className="px-3" xs={12} lg={6}>
        <video className='info-video' autoPlay loop muted>
        <source src="/Videos/headervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </Col>
    </Row>
    
    </>
}
export default PrimeInformation;