import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  max-width: 320px;
  overflow: hidden scroll;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 46px;
    margin-left: 69px;
  }
`;

export const TableHead = styled.tr`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 58px;
  width: 700px;
  padding: 0px 7.5px;
  border-radius: 30px;
  background-color: white;
  @media screen and (max-width: 767px) {
    width: 689px;
  }
`;

export const TableHeadItem = styled.th`   
  padding: 10px;
  width: 50px;
  &:nth-child(1) {    
    margin-right: 45px;
  } 
  &:nth-child(2) {
    margin-right: 40px;
  }
  &:nth-child(3) {
    margin-right: 75px;
  }
  &:nth-child(4) {
    margin-right: 70px;
  }
  &:nth-child(5) {
    margin-right: 23px;
  }
  }
`;

export const Data = styled.tr`
position: relative;
  display: flex;
  align-items: center;
  padding: 0px 7.5px;
  font-size: 16px;
  height: 52px;  
    &:not(:last-child) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 10;
        bottom: 0;
        width: 680px;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    
`;

export const DataItem = styled.td`
  padding: 8px 10px;
  color: black;
  font-weight: 400;  
  font-size: 16px;
  @media screen and (min-width: 320px) {
    &:nth-child(1) {
      width: 50px;
      margin-right: 30px;
    }
    &:nth-child(2) {
      width: 80px;
      margin-right: 25px;
    }
    &:nth-child(3) {
      width: 80px;
      margin-right: 50px;
    }
    &:nth-child(4) {
      width: 80px;
    }
    &:nth-child(5) {
    width: 80px;
    
  }
  &:nth-child(6) {
    width: 90px;    
  }
  }
  }
`;
