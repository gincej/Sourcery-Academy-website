import PropTypes from 'prop-types';
import ScrollButton from '../../atoms/ScrollButton';
import styles from './AcademiesHeading.module.scss';

const AcademiesHeading = ({ sectionId }) => (
  <div className={styles.academiesheader} id={sectionId}>
    <h2>Academies</h2>
    <p>
      There are four disciplines available: for developers, testers, front-end
      developers and kids. Academies are taking place in Devbridge Lithuanian
      offices. Students, who are willing to join developers, testers or
      Front-End academies, need to pass the test, prove their best to get an
      invitation to enroll. This rule doesn’t apply to the kids (7 to 12 years
      old) academy, the admission is limited only by available number of
      entries.
    </p>
    <ScrollButton />
  </div>
);

export default AcademiesHeading;
AcademiesHeading.propTypes = {
  sectionId: PropTypes.string,
};
