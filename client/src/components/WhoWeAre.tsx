import { Row } from "react-bootstrap"

import Title from "./Title"
import '../styles/WhoWeAre.css'
import DonationButton from "./DonationButton"

const WhoWeAre = ()=>{
    return <>
    <Row className="mt-5 text-right">
     
            <Title title={'Spotlight Humanity'}/>
            <h2>Saving Lives</h2>
            <h2>Through <span className="text-warning">Charity</span></h2>
            <p>In the midst of <strong>Gaza's</strong> prolonged crises, countless families face daily struggles for essential needs like food, water, 
                and shelter – necessities often overlooked by many.</p>
            <p><strong>Join us in supporting the families of  Gaza, and help bring hope and sustenance to those in need.</strong></p>
            <div className="w-33">
            <DonationButton title={'Donate'}/>
            </div>
      
    </Row>
    
    </>
}
export default WhoWeAre;