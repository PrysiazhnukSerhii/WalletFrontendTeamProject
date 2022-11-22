import styled from 'styled-components';

export const TableWrapper = styled.table`
  flex-grow: 1;
  background-color: blue;
  margin-top: 46px;
  margin-left: 69px;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const TableHead = styled.tr`
  display: flex;
  align-items: center;
  height: 58px;
  width: 675px;
  padding: 0px 20px;
  border-radius: 30px;
  background-color: white;
`;

export const TableHeadItem = styled.th`
  font-size: 18px;  
  }
`;

export const Data = styled.tr`
  display: flex;
  align-items: center;
  height: 54px;
  width: 700px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    background-color: white;
    border-radius: 10px;
    border-left: 5px solid #dcdcdf;
  }
  position: relative;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const DataItem = styled.td`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  padding: 8px 10px;
  color: black;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      width: 75px;
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
    &:last-child {
      width: 40px;
      padding-right: 5px;
    }
  }
`;
