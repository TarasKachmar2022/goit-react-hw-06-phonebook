import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormLabelSpan,
  FormLabelIcon,
  FormBtnText,
  InputField,
  ErrorMessage,
  FormBtn,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';

// const PATTERN_FOR_NAME =
//   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// const PATTERN_FOR_TEL =
//   '/+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/';

const schema = yup.object().shape({
  // Приклад:
  // name: yup
  //   .string()
  //   .matches(
  //     PATTERN_FOR_NAME,
  //     "Заповніть коректно поле! Допустимі символи [a-zA-Zа-яА-Я] та ['][ ][-] але лише всередині тексту!"
  //   )
  //   .required("Поле обов'язкове для заповнення!"),
  name: yup.string().required(),
  number: yup.number().required(),
});

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const handleSubmit = (values, { resetForm }) => {
    const findContacts = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );

    if (findContacts) {
      alert(`${findContacts.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormLabel htmlFor="name">
          <FormLabelSpan>
            <FormLabelIcon>
              <FaUser />
            </FormLabelIcon>
            Name
          </FormLabelSpan>
          <InputField
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="div" />
        </FormLabel>
        <FormLabel htmlFor="number">
          <FormLabelSpan>
            <FormLabelIcon>
              <BsTelephoneFill />
            </FormLabelIcon>
            Number
          </FormLabelSpan>
          <InputField
            id="number"
            type="tel"
            name="number"
            placeholder="+38(012)345-67-89"
            // pattern={PATTERN_FOR_TEL}
          />
          <ErrorMessage name="number" component="div" />
        </FormLabel>
        <FormBtn type="submit">
          <IoMdPersonAdd />
          <FormBtnText>Add contact</FormBtnText>
        </FormBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
