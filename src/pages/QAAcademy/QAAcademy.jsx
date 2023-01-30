import AdmissionSection from '../../components/organisms/AdmissionSection';
import AdmissionStepsSection from '../../components/organisms/AdmissionStepsSection';
import APP_CONSTANTS from '../../app/constants';
import HeroCardImg from '../../components/atoms/HeroCardImg';
import HeroCardLayout from '../../components/organisms/HeroCardLayout';
import HeroCardVideo from '../../components/atoms/HeroCardVideo';
import MediaSection from '../../components/molecules/MediaSection';
import QAHeroCardImg from '../../assets/images/hero-section/QAHeroCardImg.svg';
import QAVideoPlaceholder from '../../assets/images/hero-section/QAVideoPlaceholder.png';
import ScheduleSection from '../../components/organisms/ScheduleSection/ScheduleSection';
import TestimonialSection from '../../components/organisms/TestimonialSection';

const QAAcademy = () => (
  <>
    <HeroCardLayout
      cardData={APP_CONSTANTS.QADescriptionCard}
      hasDescriptionDecorationLine
      isMainTitleInPage
      mb15
    >
      <HeroCardVideo
        videoSrc={APP_CONSTANTS.QADescriptionCard.videoSrc}
        videoThumbnail={QAVideoPlaceholder}
        imageDescription="Sourcery academy quality assurance students image"
      />
    </HeroCardLayout>
    <AdmissionStepsSection />
    <AdmissionSection />

    <ScheduleSection />

    <TestimonialSection theme={'theme-qa'} />
    <MediaSection theme="testers" />

    <HeroCardLayout
      bgStars
      hasImageDecorationLine
      cardData={APP_CONSTANTS.QAApplicationCard}
      isDescriptionTextBold
    >
      <HeroCardImg image={QAHeroCardImg} />
    </HeroCardLayout>
  </>
);

export default QAAcademy;
