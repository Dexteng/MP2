import React from 'react'
import './AboutUs.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Nav from '../../Components/Nav.jsx'
import Footer from '../../Components/Footer.jsx'
import abthero from '../../assets/AboutUsPage/abt-hero.png'
import herovid from '../../assets/AboutUsPage/hero.mp4'
import razer from '../../assets/AboutUsPage/razer.png'
import logitech from '../../assets/AboutUsPage/logitech.png'
import hyperx from '../../assets/AboutUsPage/hyperx.png'


function AboutUs() {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
    <>
    <Nav/>

    {/*HERO*/}
    <div className=''>
        <div className='abt-hero-container'>
            <img className='abt-img' src={abthero} alt="" />
            <div className='text-container'>
                <p className='text1'>SWITCH THE WORLD</p>
                <p className='text2'>About Keebs</p>
                <p className='text3'>One of the professional mechanical keyboard manufacturers around the world</p>
            </div>
        </div>
    </div>
    



    {/*CONTENT*/}
    <div className=''>
        <div className='abt-content-container' data-aos = "zoom-in">
            <div className='abt-left' >
                <div className='heading-container'>
                    <p className='title'>
                        More innovative <br />more progressive <br />focus on  what we do
                    </p>
                </div>
                <div className='text-container'>
                    <p className='heading'>
                        Keebs keyboard
                    </p>
                    <p className='subtext'>
                    Based in Philippines, Keebs founded its own brand in 2008 and became a manufacturing company that has strived to provide users with mechanical keyboards of the highest standard since day one.
                    </p>
                    <br />
                    <p className='subtext'>
                    Having already established business partnerships in over 10 countries, Keebs has established a reputation throughout Asia. We are eager to continue expanding, giving consumers in every corner of the world a channel to purchase and experience Keebs products.
                    Moving forward, we will be aiming to reach even greater heights, tirelessly figuring out ways to come up with products that help users optimize their typing experience. Whether you're working or playing, give your fingers the comfort they deserve.
                    </p>
                </div>

                <div className='box-container' data-aos = "fade-in">
                    <div className='box1'>
                        <img src={razer} alt="" />
                    </div>
                    <div className='box2'>
                        <img src={logitech} alt="" />
                    </div>
                    <div className='box1'>
                        <img src={hyperx} alt="" />
                    </div>
                </div>
            </div>    


            <div className='abt-right'>
                <div className='vid-container'> 
                    <video autoPlay loop><source src={herovid}/></video>
                </div>

                <div className='text-container'>
                    <p className='heading'>
                        Keeb's Partner <br /> Companies
                    </p>
                    <p className='subtext'>
                        Razer, Logitech, HyperX
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default AboutUs