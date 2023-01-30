import AdmissionSection from '../../components/organisms/AdmissionSection';
import AdmissionStepsSection from '../../components/organisms/AdmissionStepsSection';
import APP_CONSTANTS from '../../app/constants';
import FEHeroCardImg from '../../assets/images/hero-section/FEHeroCardImg.svg';
import FEVideoPlaceholder from '../../assets/images/hero-section/FEVideoPlaceholder.png';
import HeroCardImg from '../../components/atoms/HeroCardImg';
import HeroCardLayout from '../../components/organisms/HeroCardLayout';
import HeroCardVideo from '../../components/atoms/HeroCardVideo';
import MediaSection from '../../components/molecules/MediaSection';
import ScheduleSection from '../../components/organisms/ScheduleSection/ScheduleSection';
import TestimonialSection from '../../components/organisms/TestimonialSection';

const FEAcademy = () => (
  <>
    <HeroCardLayout
      cardData={APP_CONSTANTS.FEDescriptionCard}
      hasDescriptionDecorationLine
      isMainTitleInPage
      mb15
    >
      <HeroCardVideo
        videoSrc={APP_CONSTANTS.FEDescriptionCard.videoSrc}
        videoThumbnail={FEVideoPlaceholder}
        imageDescription="Sourcery academy frontend students image"
      />
    </HeroCardLayout>

    <AdmissionStepsSection />
    <AdmissionSection />
    <ScheduleSection />

    <TestimonialSection theme={'theme-fe'} />
    <MediaSection theme="frontend" />

    <HeroCardLayout
      bgStars
      hasImageDecorationLine
      cardData={APP_CONSTANTS.FEApplicationCard}
      isDescriptionTextBold
    >
      <HeroCardImg image={FEHeroCardImg} />
    </HeroCardLayout>
  </>
);

export default FEAcademy;
