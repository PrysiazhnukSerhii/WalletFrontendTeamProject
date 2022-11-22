import styled from 'styled-components';

export const TableWrapper = styled.table`
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 58px;
  }
`;

export const TableHead = styled.thead`
  display: flex;
  position: absolute;
  width: calc(100% + 10px);
  top: 0;
  left: -5px;
  border-radius: 30px;
  background-color: white;
`;

export const TableHeadItem = styled.th`
  border: none;
  text-align: center;
  padding: 16px 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  &:nth-child(1) {
    width: 80px;
  }
  &:nth-child(2) {
    width: 70px;
  }
  &:nth-child(3) {
    width: 135px;
  }
  &:nth-child(4) {
    width: 130px;
  }
  &:nth-child(5),
  &:nth-child(6) {
    width: calc((100% - 460px) / 2);
  }
  &:last-child {
    width: 40px;
    padding-right: 20px;
  }
`;
