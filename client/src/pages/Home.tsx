
import React from 'react'   

import foodtruck from '../assets/foodtruck.webp'
import kitchen from '../assets/kitchen.webp'
import AppealInformation from '../components/AppealInformation'
import AppNavbar from '../components/AppNavbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Information from '../components/Information'
import WhoWeAre from '../components/WhoWeAre'




const Home = () =>{
    return (
        <div>
         <AppNavbar/>
         <Header/>
        <WhoWeAre/>
        <Information
  title="Food Truck"
  firstHeaderText="Feed a Life Food"
  secondHeaderText="Truck"
  text="The Hot Meals food truck reaches refugee camps and other locations where traditional kitchens are impractical, providing nourishment and hope.

This mobile kitchen exemplifies our dedication to innovation and adaptability, delivering warm meals to those in dire need.

By swiftly responding to changing needs, we uplift spirits and foster dignity among displaced individuals."
  imgSrc={foodtruck}
  right
/>
<Information
  title="Hot Meals Kitchen"
  firstHeaderText="Feed a Life"
  secondHeaderText="Kitchen"
  text="Our Feed a Life Hot Meals project tirelessly prepares thousands of meals for those in need, providing not just sustenance but a lifeline of support.

These efforts ensure no one goes hungry, offering warmth and hope year-round."
  imgSrc={kitchen}
/>
<Information
  title="Food Truck"
  firstHeaderText="Feed a Life Food"
  secondHeaderText="Truck"
  text="The Hot Meals food truck reaches refugee camps and other locations where traditional kitchens are impractical, providing nourishment and hope.

This mobile kitchen exemplifies our dedication to innovation and adaptability, delivering warm meals to those in dire need.

By swiftly responding to changing needs, we uplift spirits and foster dignity among displaced individuals."
  imgSrc={foodtruck}
  right
/>
<AppealInformation/>
<Footer/>
        </div>
    )
}
export default Home;