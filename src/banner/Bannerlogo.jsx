import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './bannerlogo.css';
import Data from '../Data.json';
import Form from './Formpage';
import cat1 from '../assets/images/cat1.png';
import cat2 from '../assets/images/cat2.png';
import cat3 from '../assets/images/cat3.png';

const Banner = () => {
  return (
    <div>
      {/* Iterate through the 'cat' array using map */}
      {Data.cat.map((item, index) => (
        <div className="banner-container" key={index} style={{background:`url(${item.Banner.bannerlogo})`,backgroundRepeat:"no-repeat",
        backgroundSize:"cover",backgroundPosition:"center"
        }}>
          <Container className="d-flex align-items-center justify-content-between flex-column flex-md-row">
            <div className="banner-content">
              {/* Render bannerheading using dangerouslySetInnerHTML */}
              <h1 className="text-white" dangerouslySetInnerHTML={{ __html: item.Banner.bannerheading }}></h1>

              <p className="text-white">
                <img src={item.Banner.catlogo.cat1} alt="CAT1" width={"78px"} height={"78px"} />
                <span dangerouslySetInnerHTML={{ __html: item.Banner.bannertext.cat1 }}></span>

              </p>
              <p className="text-white">
                <img src={item.Banner.catlogo.cat2} alt="CAT2" width={"78px"} height={"78px"} /> 
                <span dangerouslySetInnerHTML={{ __html: item.Banner.bannertext.cat2}}></span>
              </p>
              <p className="text-white">
                <img src={item.Banner.catlogo.cat3} alt="CAT3" width={"78px"} height={"78px"} /> 
                <span dangerouslySetInnerHTML={{ __html: item.Banner.bannertext.cat3}}></span>
              </p>
              
              <Button className="banner-button bg-warning rounded" style={{ width: '160px', height: '45px' }}>Enquire Now</Button>
            </div>

            {/* Right Side: Form for Larger Screens */}
            <div className="form-container d-none d-md-block">
              <Form />
            </div>
          </Container>

          {/* Form After the Banner Content for Smaller Screens */}
          <div className="form-containermobile d-block d-md-none mt-4">
            <Form />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
