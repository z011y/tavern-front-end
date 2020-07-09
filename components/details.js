import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Details({ name, date, genre, img, cost, button }) {
  return (
    <DetailsWrapper>
      <DetailsHead>
        <Title>
          <img src={img} alt="" />
          <Info>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <p>{date}</p>
          </Info>
        </Title>
        <Payment>
          <h3>{`${cost}`}</h3>
          <Button>{button}</Button>
        </Payment>
      </DetailsHead>
      <Content>
        <Bio>
          <h3>Bio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex
            nostrum adipisci tempora eius magni, esse alias, a expedita eaque
            qui autem quia quis veniam voluptatibus in aperiam non aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dolor minima itaque placeat sequi reprehenderit harum facere
            voluptatem, quos adipisci quam nostrum inventore beatae quidem autem
            officiis ipsum consequuntur labore.
          </p>
        </Bio>
        <Songs>
          <h3>Songs</h3>
          <Song>Song Name</Song>
          <Song>Song Name</Song>
          <Song>Song Name</Song>
        </Songs>
      </Content>
    </DetailsWrapper>
  );
}

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffcc4d;
  margin-left: 20px;
`;

const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3c3729;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  color: white;

  h3 {
    margin-block-end: 0px;
    margin-block-start: 0px;
  }
`;

const DetailsHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    height: 100px;
    border-radius: 5px;
    margin-right: 20px;
  }
`;

const Title = styled.div`
  display: flex;
`;

const Payment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  grid-gap: 20px;
`;

const Songs = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  h3 {
    margin-bottom: 15px;
  }
`;

const Song = styled.div`
  height: 50px;
  border-radius: 5px;
  background-color: #201a0a;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
