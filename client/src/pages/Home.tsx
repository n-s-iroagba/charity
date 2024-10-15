import React from 'react'   
import AppNavbar from '../features/donor/components/AppNavbar'
import Header from '../features/donor/components/Header';
import PrimeInformation from '../features/donor/components/PrimeInformation';
import Information from '../features/donor/components/Information';
import foodtruck from '../features/donor/assets/foodtruck.webp'
import kitchen from '../features/donor/assets/kitchen.webp'
import BlackInformation from '../features/donor/components/BlackInformation';
import Footer from '../features/donor/components/Footer';


const Home = () =>{
    return (
        <div>
         <AppNavbar/>
         <Header/>
        <PrimeInformation/>
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
<BlackInformation/>
<Footer/>
        </div>
    )
}
export default Home;