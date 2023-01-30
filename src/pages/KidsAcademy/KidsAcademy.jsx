import AdmissionSection from '../../components/organisms/AdmissionSection';
import AdmissionStepsSection from '../../components/organisms/AdmissionStepsSection';
import APP_CONSTANTS from '../../app/constants';
import HeroCardImg from '../../components/atoms/HeroCardImg';
import HeroCardLayout from '../../components/organisms/HeroCardLayout';
import HeroCardVideo from '../../components/atoms/HeroCardVideo';
import KidsHeroCardImg from '../../assets/images/hero-section/KidsHeroCardImg.svg';
import KidsVideoPlaceholder from '../../assets/images/hero-section/KidsVideoPlaceholder.png';

const KidsAcademy = () => (
  <>
    <HeroCardLayout
      cardData={APP_CONSTANTS.KidsDescriptionCard}
      hasDescriptionDecorationLine
      mb15
    >
      <HeroCardVideo
        videoSrc={APP_CONSTANTS.KidsDescriptionCard.videoSrc}
        videoThumbnail={KidsVideoPlaceholder}
        imageDescription="Sourcery for kids image"
      />
    </HeroCardLayout>

    <AdmissionStepsSection />

    <AdmissionSection />

    <HeroCardLayout
      bgStars
      hasImageDecorationLine
      cardData={APP_CONSTANTS.KidsApplicationCard}
      isDescriptionTextBold
    >
      <HeroCardImg image={KidsHeroCardImg} />
    </HeroCardLayout>
  </>
);

export default KidsAcademy;
