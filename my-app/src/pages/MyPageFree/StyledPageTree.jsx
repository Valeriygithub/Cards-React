import styled from "styled-components";

export const Main = styled.div`
  max-width: 1140px;
  margin: 40px auto;
`;

export const GrigBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  box-shadow: 0px 1px 9px #1fd;
  padding: 20px 28px;
`;
export const Grig2Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  box-shadow: -1px 2px 16px #222;
  padding: 20px 28px;
`;
export const Grig1 = styled.div`
  max-width: 500px;
  margin-left: 20px;
`;
export const ImageCard = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
export const H2Title = styled.h2`
  text-transform: uppercase;
`;
export const H6Title = styled.h6`
  margin-right: 50px;
  font-size: 14px;
`;
