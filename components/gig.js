import styled from "styled-components";
import { useState } from "react";

export default function Gig({ name, date, genre, img, active, onClick }) {
  return (
    <>
      {active ? (
        <GigWrapperSelected onClick={onClick}>
          <ImgWrapper>
            <img src={img} alt="band img" />
          </ImgWrapper>
          <InfoWrapper>
            <h2>{name}</h2>
            <h3>{genre}</h3>
            <p>{date}</p>
          </InfoWrapper>
        </GigWrapperSelected>
      ) : (
        <GigWrapper onClick={onClick}>
          <ImgWrapper>
            <img src={img} alt="band img" />
          </ImgWrapper>
          <InfoWrapper>
            <h2>{name}</h2>
            <h3>{genre}</h3>
            <p>{date}</p>
          </InfoWrapper>
        </GigWrapper>
      )}
    </>
  );
}

const GigWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: #3c3729;
  border-radius: 10px;
  border: 5px solid #3c3729;
  padding: 20px;
  color: white;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;

const GigWrapperSelected = styled(GigWrapper)`
  border: 5px solid #ffcc4d;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    font-weight: 700 !important;
    font-size: 24px !important;
  }

  h3 {
    margin-block-end: 0px;
    margin-block-start: 0px;
    font-weight: 400;
    font-size: 14px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 20px;

  img {
    border-radius: 5px;
    height: 100px;
  }
`;
