import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Tabl = styled.table`
  max-width: 395px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const StyledForm = styled(Form)`
  display: flex;
  grid-gap: 20px;
  gap: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: auto;
`;

export const StyledField = styled(Field)`
  width: 182px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 30px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0 20px 0 20px;

  color: #000000;
`;

export const TabHeader = styled.th`
  background-color: var(--primary-background-color);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding: 0 28px 0 28px;
`;

export const TableHead = styled.thead`
  border-radius: 30px;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TableHeadTr = styled.tr`
  display: flex;
  justify-content: space-between;

  align-items: center;
  font-size: 18px;
  line-height: 27px;
  padding: 0px 7.5px;
  border-radius: 30px;
  width: 395px;
  height: 58px;
  background-color: var(--primary-background-color);
`;
export const Tabrow = styled.td`
  display: inline-flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 15px 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const TableBody = styled.tbody``;

export const BodyTr = styled.tr`
  padding: 0 28px 0 28px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgb(255 255 255 / 60%);
`;
export const BodyText = styled.span`
  padding: 0 0px 0 16px;
  justify-content: space-between;
  display: flex;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;