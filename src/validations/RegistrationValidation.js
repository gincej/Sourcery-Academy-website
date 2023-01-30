import * as yup from 'yup';

const fullNameValidation = /^(?!\p{Zs})(?!.*\p{Zs}$)[\p{L}\p{M}\p{Zs}]{2,30}$/u;
const emailValidation = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Please fill in your name')
    .matches(
      fullNameValidation,
      'Name should contain at least 2 characters, only alphabets, no numbers or other special characters.'
    ),
  lastName: yup
    .string()
    .required('Please fill in your name.')
    .matches(
      fullNameValidation,
      'Last name should contain at least 2 characters, only alphabets, not numbers or other special characters.'
    ),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Please fill in your email')
    .matches(emailValidation, 'Invalid email address'),
  resumeFile: yup
    .mixed()
    .notOneOf(['Upload your resume'], 'Upload your resume')
    .required('Upload your resume')
    .test(
      'fileFormat',
      'A resume should only be in PDF or DOCX format',
      (value) =>
        value && ['application/pdf', 'application/docx'].includes(value.type)
    )
    .test(
      'fileSize',
      'A resume should not exceed 2MB in size',
      (value) => value && value.size <= 2000000
    ),
  policy: yup.boolean().oneOf([true], 'Agree to terms and conditions'),
});

export default registrationSchema;
