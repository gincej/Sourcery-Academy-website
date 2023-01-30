import AdmissionSection from '../../components/organisms/AdmissionSection';
import AdmissionStepsSection from '../../components/organisms/AdmissionStepsSection';
import APP_CONSTANTS from '../../app/constants';
import DevHeroCardImg from '../../assets/images/hero-section/DevHeroCardImg.svg';
import DevVideoPlaceholder from '../../assets/images/hero-section/DevVideoPlaceholder.png';
import HeroCardImg from '../../components/atoms/HeroCardImg';
import HeroCardLayout from '../../components/organisms/HeroCardLayout';
import HeroCardVideo from '../../components/atoms/HeroCardVideo';
import MediaSection from '../../components/molecules/MediaSection';
import ScheduleSection from '../../components/organisms/ScheduleSection';
import TestimonialSection from '../../components/organisms/TestimonialSection';

const DevAcademy = () => (
  <>
    <HeroCardLayout
      cardData={APP_CONSTANTS.DevDescriptionCard}
      hasDescriptionDecorationLine
      isMainTitleInPage
      mb15
    >
      <HeroCardVideo
        videoSrc={APP_CONSTANTS.DevDescriptionCard.videoSrc}
        videoThumbnail={DevVideoPlaceholder}
        imageDescription="Sourcery academy developers students image"
      />
    </HeroCardLayout>
    <AdmissionStepsSection />
    <AdmissionSection />

    <ScheduleSection />
    <TestimonialSection theme={'theme-dev'} />
    <MediaSection theme="developers" />

    <HeroCardLayout
      bgStars
      hasImageDecorationLine
      cardData={APP_CONSTANTS.DevApplicationCard}
      isDescriptionTextBold
    >
      <HeroCardImg image={DevHeroCardImg} />
    </HeroCardLayout>
  </>
);

export default DevAcademy;
