import React from 'react'
import foodtruck from '../assets/foodtruck.webp'
import kitchen from '../assets/kitchen.webp'
import AppNavbar from '../components/AppNavbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Information from '../components/Information'
import WhoWeAre from '../components/WhoWeAre'
import ViewFinanceButton from '../components/ViewFinanceButton'
import DonationButton from '../components/DonationButton'
import ViewDonorsButton from '../components/ViewDonorsButton'




const Home = () =>{

    return (
        <div>
         <AppNavbar/>
         <Header/>
        <WhoWeAre/>
        <Information
          title="Our Campaigns"
          firstHeaderText="Food And"
          secondHeaderText="Medical Aid"
          text="We use your generous contributions to cater to the nutritional and medical needs of those affected by the war in Gaza. Your support brings hope and essential relief to vulnerable families during this critical time"
          imgSrc={foodtruck}
          right components={[<ViewFinanceButton/>,<DonationButton title={'Feed A Life'}/>]}/>

<Information
          title="Our Donors"
          firstHeaderText="The Reason We"
          secondHeaderText="Are Able To Touch Lives"
          text="Thank you for your unwavering support and generosity. We are deeply grateful for your commitment to making a difference. Together, we bring hope and relief to those in need."
          imgSrc={kitchen}
           components={[<DonationButton title={'Donate Now'}/>,<ViewDonorsButton/>]}/>
<Footer/>
        </div>
    )
}
export default Home