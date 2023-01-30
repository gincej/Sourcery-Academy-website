import AcademiesHeading from '../../components/molecules/AcademiesHeading';
import AcademiesSection from './AcademiesSection/AcademiesSection';
import APP_CONSTANTS from '../../app/constants';
import { clickContext } from '../../components/context/clickContext';
import HeroCardImg from '../../components/atoms/HeroCardImg';
import HeroCardLayout from '../../components/organisms/HeroCardLayout';
import HomeHeroCardImg from '../../assets/images/hero-section/HomeHeroCardImg.svg';
import MediaSection from '../../components/molecules/MediaSection';
import TestimonialSection from '../../components/organisms/TestimonialSection';
import { useRef } from 'react';

const Home = () => {
  const scrollTo = useRef();

  const handleScroll = () =>
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <HeroCardLayout cardData={APP_CONSTANTS.homePageHero} isMainTitleInPage>
        <HeroCardImg image={HomeHeroCardImg} style={{ margin: 'inherit' }} />
      </HeroCardLayout>
      <clickContext.Provider value={{ handleScroll }}>
        <AcademiesHeading sectionId="academies-list" />
        <AcademiesSection ref={scrollTo} />
      </clickContext.Provider>
      <TestimonialSection />
      <MediaSection />
    </>
  );
};

export default Home;
