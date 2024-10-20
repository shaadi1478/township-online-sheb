import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import AppImage from '../AppImage/AppImage';
import TextBlock from '../TextBlock/TextBlock';
import ContactCard from '../ContactCard/ContactCard';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';
import TextBlock1 from '../TextBlock1/TextBlock1';
import TextBlock2 from '../TextBlock2/TextBlock2';
import { MdCall } from 'react-icons/md';
import Notice from '../Notice/Notice';
import MediaCoverage from '../MediaCoverage/MediaCoverage';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import SectionWithCard from '../SectionWithCard/SectionWithCard';

const Header = () => {
  return (
    <div>
    <div>
    <ImageSlider></ImageSlider>
            <Notice></Notice>
            <AppImage></AppImage>
            <SectionWithCard></SectionWithCard>
            <TextBlock1></TextBlock1>
            <TextBlock></TextBlock>
            <TestimonialSection></TestimonialSection>
            <TextBlock2></TextBlock2>
            <MediaCoverage></MediaCoverage>
            <ContactCard></ContactCard>
    </div>
    </div>
  );
};

export default Header;

