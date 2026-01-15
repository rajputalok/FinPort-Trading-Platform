import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from './Universe';

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/portIq.png"
        productName="Portiq"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Portiq experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSection imageURL="media/images/Insighta.png" 
       productName="Insighta"
        productDescription="The central dashboard for your FinPort account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="" />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Wealtha"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSection 
       imageURL="media/images/kiteconnect.png"
        productName="Portiq API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
       />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="FinPort Learn"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center p-3">Want to know more about our technology stack? Check out the FinPort.tech
        Updates.</p>

      <Universe />
    </>
  );
}

export default ProductsPage;
