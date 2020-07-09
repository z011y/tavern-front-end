import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../components/layout";
import JoinForm from "../components/join-form";

export default function Join() {
  const [artist, setArtist] = useState(false);
  const [venue, setVenue] = useState(false);

  return (
    <Layout>
      <Content>
        <Title>
          <h1>Join Today</h1>
          <h2>Come join the growing community</h2>
          <img src="/candles.svg" alt="fire" />
        </Title>
        <FormContainer>
          <Toggle>
            <p>Who are you?</p>

            {artist ? (
              <FormTypeSelected
                onClick={() => {
                  setArtist(!artist);
                  setVenue(false);
                }}
              >
                Artist
              </FormTypeSelected>
            ) : (
              <FormType
                onClick={() => {
                  setArtist(!artist);
                  setVenue(false);
                }}
              >
                Artist
              </FormType>
            )}

            {venue ? (
              <FormTypeSelected
                onClick={() => {
                  setVenue(!venue);
                  setArtist(false);
                }}
              >
                Venue
              </FormTypeSelected>
            ) : (
              <FormType
                onClick={() => {
                  setVenue(!venue);
                  setArtist(false);
                }}
              >
                Venue
              </FormType>
            )}
          </Toggle>
          {artist ? (
            <JoinForm
              name="Artist Name"
              button="Become an Artist"
              sampleName="Post Malone"
              sampleEmail="posty@example.com"
              samplePassword="***********"
            />
          ) : null}
          {venue ? (
            <JoinForm
              name="Venue Name"
              button="Become a Venue"
              sampleName="Vivint Smart Home Arena"
              sampleEmail="vivint@example.com"
              samplePassword="***********"
            />
          ) : null}
        </FormContainer>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background-color: #201a0a;
  padding: 175px;

  h1 {
    font-size: 80px;
    color: white;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    z-index: 1;
  }

  h2 {
    color: white;
    z-index: 1;
  }

  img {
    width: 500px;
    align-self: center;
    transform: translateX(-100px);
    margin-top: -150px;
    z-index: 0;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: #ffcc4d;
`;

const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  border: 10px solid #ffcc4d;
`;

const FormType = styled.div`
  width: 80px;
  height: 40px;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const FormTypeSelected = styled(FormType)`
  background-color: #ffcc4d;
  color: black;
`;

const Toggle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 75px;
  color: white;

  p {
    margin-right: 20px;
  }
`;
