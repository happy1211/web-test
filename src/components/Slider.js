import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import './index.scss'
import H2 from './H2/H2'
import Button from './Button/Button'
import BusinessCard from './BusinessCard/BusinessCard'
import BackgroundItem from './BackgroundItem/BackgroundItem'


const SliderStyled = styled(Slider)`

background-color:#F8F8F8;
overflow:hidden;

.mobile{

    display:none;

    @media(max-width:767px){
        display:block;
    }
}

`;


class Header extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <SliderStyled {...settings}>
                <div>
                    <div className="desktop">
                        <div className="background-items">
                            <BackgroundItem top="3" left="-10" light />
                            <BackgroundItem top="2" left="15" light />
                            <BackgroundItem top="5" left="20" />
                            <BackgroundItem top="15" left="18" light />
                            <BackgroundItem top="3" right="-10" light />
                            <BackgroundItem top="15" right="0" light />
                            <BackgroundItem top="20" right="-12" />
                        </div>

                        <div className="slider-container">
                            <div className="slider-left">
                                <div className="slider-cards">

                                    <BusinessCard top>
                                        <p>Wizytówka <span className="small">85x55mm</span></p>
                                        <p><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                    </BusinessCard>
                                    <BusinessCard >
                                        <p>Wizytówka <span className="small">90x50mm</span></p>
                                        <p><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                    </BusinessCard>
                                </div>

                            </div>
                            <div className="slider-right">
                                <div className="slider-text">
                                    <H2>Ciekawy <span className="big">slogan <br /> reklamowy</span></H2>
                                    <p>Otwieramy się na niskie nakłady! Nizsze ceny małych zamówień!</p>
                                    <Button>Więcej informacji</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile">
                        <div className="background-items">
                            <BackgroundItem top="2" left="-40" light />
                            <BackgroundItem top="25" left="-10" />

                        </div>

                        <div className="slider-container">
                            <div className="slider-cards">

                                <H2 mobile>Ciekawy <span className="big">slogan <br /> reklamowy</span></H2>

                                <BusinessCard mobile id="first">
                                    <p className="text-top">Wizytówka <span className="small">90x50mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>
                                <BusinessCard top mobile id="second">
                                    <p className="text-top">Wizytówka <span className="small">85x55mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>

                            </div>
                            <p>Otwieramy się na niskie nakłady! Nizsze ceny małych zamówień!</p>
                            <Button >Więcej informacji</Button>
                        </div>
                    </div>
                </div>

            </SliderStyled>
        );
    }
}

export default Header;