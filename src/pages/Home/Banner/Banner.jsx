import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImgages1 from '../../../assets/banner/banner1.png'
import bannerImgages2 from '../../../assets/banner/banner2.png'
import bannerImgages3 from '../../../assets/banner/banner3.png'



const Banner = () => {
    return (
        <Carousel autoPlay ={true} infiniteLoop = {true} showThumbs = {false}  >
                <div>
                    <img src={bannerImgages1} />
                    
                </div>
                <div>
                    <img src= {bannerImgages2} />
                    
                </div>
                <div>
                    <img src= {bannerImgages3} />
                </div>
            </Carousel> 
    );
};

export default Banner;