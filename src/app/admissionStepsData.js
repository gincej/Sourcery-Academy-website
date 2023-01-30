import ApplyStepImg from '../components/atoms/images/ApplyStepImg';
import JoinStepImg from '../components/atoms/images/JoinStepImg';
import LearnStepImg from '../components/atoms/images/LearnStepImg';
import PassAdmImg from '../components/atoms/images/PassAdmImg';
const admissionStepsData = {
  'developers-academy': [
    {
      stepNumber: 1,
      heading: 'Apply',
      content:
        'Academy students are given an opportunity to be immersed in a professional three-month course for the developer beginners, build their competence through trainings and individual or group assignments.',
      image: (
        <ApplyStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
    {
      stepNumber: 2,
      heading: 'Pass the admission',
      content:
        'Registration is available for candidates who are willing to pass the entry exam. Results define a list of candidates who are invited into the workshop. We accept 20 candidates with highest marks into the academy.',
      image: (
        <PassAdmImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
          secColor="--color-purple-svg"
        />
      ),
    },
    {
      stepNumber: 3,
      heading: 'Learn from the experts',
      content:
        'Students will learn the latest technologies and how to create software using the best tools on the market. Devbridge assigns a mentor to each student to serve as a resource for their development projects.',
      image: (
        <LearnStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
    {
      stepNumber: 4,
      heading: 'Join the company',
      content:
        'At the end of term all students will receive recognition for completing the course and top students may receive job offers from Devbridge.',
      image: (
        <JoinStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
  ],
  'testers-academy': [
    {
      stepNumber: 1,
      heading: 'Apply',
      content:
        'Academy students are given an opportunity to be immersed in a professional two-month course for the testing beginners, build their competence through trainings and individual or groups assignments.',
      image: (
        <ApplyStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
    {
      stepNumber: 2,
      heading: 'Pass the admission',
      content:
        'Best candidates will be offered a paid internship for the Academy period to work on the real projects with our development teams. In parallel they are expected to attend academy to develop their skills.',
      image: (
        <PassAdmImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
    {
      stepNumber: 3,
      heading: 'Learn from the experts',
      content:
        'Students will discover all types of techniques: learn the foundations of testing, functional testing for web applications and API, foundations of non-functional testing and foundations for test automation.',
      image: (
        <LearnStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
    {
      stepNumber: 4,
      heading: 'Join the company',
      content:
        'At the end of term all students will receive a certificate of completion the Sourcery academy for Testers. Top graduates will be invited for an interview to become a Junior Test Engineer.',
      image: (
        <JoinStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-svg"
        />
      ),
    },
  ],
  'frontend-academy': [
    {
      stepNumber: 1,
      heading: 'Apply',
      content:
        'Academy students are given an opportunity to be immersed in a professional two-month course for the front-end developers, build their competence through trainings and individual or groups assignments.',
      image: (
        <ApplyStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 2,
      heading: 'Pass the admission',
      content:
        'Entry test is performed by those candidates who submit their summary. Test results define a priority list of candidates who are invited into the workshop. We accept 20 candidates with highest marks into academy.',
      image: (
        <PassAdmImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 3,
      heading: 'Learn from the experts',
      content:
        'Students will discover all types, techniques and design approaches. They will learn how to write semantic elements in HTML, apply advanced CSS techniques, understand accessibility standards and many more.',
      image: (
        <LearnStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 4,
      heading: 'Join the company',
      content:
        'The Academy starts in the end of October and lasts until January.. Top graduates will be invited for an interview to become a Junior Front-End Software Engineer.',
      image: (
        <JoinStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
  ],
  'kids-academy': [
    {
      stepNumber: 1,
      heading: 'Apply',
      content:
        'Pupils at Sourcery for Kids academy are taught using a non-formal education program (NSP) accredited by our partners bit&Byte. This educational program helps in taking first steps in programming as well as encourages creativity, curiosity and other significant skills that play a critical role in so-called "future" professions.',
      image: (
        <ApplyStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 2,
      heading: 'Get confirmation',
      content:
        'New children are included in the additional groups according to the lists that were compiled back in the 2021/22 school year. This list is filled with new registrations of children. By registering you will be added to the waiting list.',
      image: (
        <PassAdmImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 3,
      heading: 'Learn from the experts',
      content:
        'The children will study key aspects of programming, from logical concepts and functions, to variables, sequences, coordinates, and movement for the entire academic year. Additionally, the program teaches how to apply programming in practical projects.',
      image: (
        <LearnStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
    {
      stepNumber: 4,
      heading: 'Enjoy new skills',
      content:
        'In the end of course children have the ability to combine different technologies in order to use gained skills needed to succeed in the tech industries such as design, electronics, 3D, animation, virtual reality (VR), game development and software development.',
      image: (
        <JoinStepImg
          primaryTextColor="--color-primary-text"
          primaryColor="--color-primary"
          lightPrimaryColor="--color-primary"
        />
      ),
    },
  ],
};

export default admissionStepsData;
