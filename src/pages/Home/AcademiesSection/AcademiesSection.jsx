import AcademiesDescription from './AcademiesDescription';
import { academiesDescriptionsData as data } from '../../../app/academiesDescriptionsData';
import { forwardRef } from 'react';
import FrontEndImage from '../../../assets/images/home-academies/front.svg';
import KidsAccentLine from '../../../assets/images/home-academies/accent3.svg';
import KidsImage from '../../../assets/images/home-academies/kids.svg';
import { PropTypes } from 'prop-types';
import routes from '../../../app/routes';
import SourceryAccentLine from '../../../assets/images/home-academies/accent1.svg';
import SourceryImage from '../../../assets/images/home-academies/sourcery.svg';
import styles from './AcademiesSection.module.scss';
import TestersAccentLine from '../../../assets/images/home-academies/accent2.svg';
import TestersImage from '../../../assets/images/home-academies/testers.svg';

const academiesProps = {
  'developers-academy': {
    image: SourceryImage,
    accentImage: SourceryAccentLine,
    imgClass: 'sourcery',
    url: routes.devAcademy.path,
    state: 'developers-academy',
  },
  'testers-academy': {
    image: TestersImage,
    accentImage: TestersAccentLine,
    imgClass: 'testers',
    url: routes.QAAcademy.path,
    reverse: true,
    state: 'testers-academy',
  },
  'frontend-academy': {
    image: FrontEndImage,
    reverse: true,
    url: routes.FEAcademy.path,
    state: 'frontend-academy',
  },
  'kids-academy': {
    image: KidsImage,
    accentImage: KidsAccentLine,
    imgClass: 'kids',
    url: routes.kidsAcademy.path,
    state: 'kids-academy',
  },
};

const AcademiesSection = forwardRef(({ sectionId }, ref) => (
  <section ref={ref} className={styles['academies-section']} id={sectionId}>
    {data.map((academy) => (
      <AcademiesDescription key={academy.id} {...academiesProps[academy.name]}>
        <h3>{academy.title}</h3>
        <p>{academy.description}</p>
      </AcademiesDescription>
    ))}
  </section>
));

AcademiesSection.displayName = 'AcademiesSection';

AcademiesSection.propTypes = {
  sectionId: PropTypes.string,
};

export default AcademiesSection;
