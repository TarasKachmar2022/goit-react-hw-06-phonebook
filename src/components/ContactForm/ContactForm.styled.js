import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Formik,
  Field,
} from 'formik';

export const Form = styled(FormikForm)`
  /* display: block; */
  padding: 24px 48px;
  width: 550px;
`;

export const FormLabelSpan = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const InputField = styled(Field)`
  border-radius: 5px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const FormBtn = styled.button`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  padding: 3px 10px;
  :active {
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
