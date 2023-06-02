import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Formik,
  Field,
} from 'formik';

export const Form = styled(FormikForm)`
  padding: 24px 48px;
  width: 550px;
`;

export const FormLabelSpan = styled.span`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  text-align: start;
  margin-bottom: 10px;
  text-shadow: ${p => p.theme.shadows.textShadow};
`;

export const FormLabelIcon = styled.div`
  margin: 0 10px;

  & svg {
    filter: drop-shadow(0 0 5px #fff);
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: 16px;
  text-shadow: 0 0.4px 0.4px #000;
`;

export const InputField = styled(Field)`
  font-size: 24px;
  line-height: 1.5;
  padding-left: 10px;
  border-radius: 7px;
  border: 0;
  outline: 0;
  box-shadow: 0.5px 0.5px 1px #000;
  margin-bottom: 3px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const FormBtn = styled.button`
  font-size: 18px;
  font-weight: 700;
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 10px;
  padding: 10px 20px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkGrey};
  transition: background-color 250ms linear;
  :hover {
    background-color: ${p => p.theme.colors.orange};
  }

  :active {
    scale: 0.95;
    background-color: ${p => p.theme.colors.orange};
  }
`;

export const FormBtnText = styled.span`
  margin-left: 10px;
`;
