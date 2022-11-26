import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import sprite from '../../../images/svg/symbol-defs.svg';
import cross from '../../../images/svg/cross.svg';
import minus from '../../../images/svg/minus.svg';
//import { colors } from 'react-select/dist/declarations/src/theme';

const reactSvgComponentToMarkupString = (Component) =>
  `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(createElement(Component))
  )}`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  @media (min-width: 768px) {
    line-height: 45px;
    font-size: 30px;
  }
`;

export const TransactionForm = styled(Form)`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 395px;
  }
`;

const InputStyle = `
  display: inline-block;
  width:280px;
  padding: 0;
  padding-left:20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--disabled-grey-text-color);
  outline: none;
  transition: border 250ms linear;
  line-height: 1.47;
  color: var(--primary-text-color);
  &::placeholder {
    color:#bdbdbd;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid var(--accent-color-blue);
  }
`;

export const CheckboxWrapp = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckboxInput = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxSlider = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  &:before {
    position: absolute;
    content: '';
    width: 44px;
    height: 44px;
    border-radius: 100%;
    right: -1px;
    bottom: -2px;
    background-color: var(--accent-color-red);
    transition: 0.4s;
    background-image: url(${reactSvgComponentToMarkupString(FiMinus)});
    //background-image: url(${minus});
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }

  ${CheckboxInput}:checked + &:before {
    transform: translateX(-38px);
    background-color: var(--accent-color-grean);
    background-image: url(${reactSvgComponentToMarkupString(FiPlus)});
    // background-image: url(${sprite}#icon-wallet);
    //background-image: url(${cross});
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  }
`;

export const CheckboxText = styled.span`
  display: block;
  color: var(--disabled-grey-text-color);
  transition: color 250ms linear;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
`;

export const CheckboxTextIncome = styled(CheckboxText)`
  order: -1;
  margin-right: 20px;
  ${CheckboxInput}:checked ~ & {
    color: var(--accent-color-grean);
  }
`;

export const CheckboxTextExpense = styled(CheckboxText)`
  margin-left: 20px;
  ${CheckboxInput}:not(:checked) ~ & {
    color: var(--accent-color-red);
  }
`;
export const SumAndDateWrapp = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const DateWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SumField = styled(Field)`
  ${InputStyle}
  display:block;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.47;
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
    margin-right: 30px;
    padding: 0 0 0 5px;
  }
`;

export const DatetimeInput = styled.input`
  ${InputStyle}
  width: 100%;
  padding: 0;
  text-align: center;
  outline: none;
  font-size: 18px;
  line-height: 1.47;
`;

export const Textarea = styled.textarea`
  ${InputStyle}
  margin-bottom: 40px;
  resize: none;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
