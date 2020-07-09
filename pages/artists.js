import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Venues() {
  return (
    <Layout>
      <Main>
        <h1>
          Imagine yourself in the <br /> <span>spotlight</span>
        </h1>
        <h2>
          We have a large community of venues looking for <br />
          talented artists like you.
        </h2>
        <Link href="/join" passHref>
          <Button>Join Now</Button>
        </Link>
      </Main>
      <Platform>
        <OurPlatform>
          <h1>Our Platform is </h1>
          <img src="/lit.png" alt="lit" />
        </OurPlatform>
        <h2>Browse open gigs in your area</h2>
        <h2>Showcase your best songs</h2>
        <h2>Increase your star rating</h2>
        <h2>Get paid in-app</h2>
      </Platform>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #201a0a;
  background-image: url("/artists.png");
  background-position: bottom;
  background-size: cover;
  padding: 175px;

  h1 {
    font-size: 80px;
    color: white;

    span {
      color: #ffcc4d;
      font-style: italic;
    }
  }

  h2 {
    color: white;
    font-size: 36px;
    font-weight: 400;
  }
`;

const Platform = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 150px;

  h2 {
    color: white;
    font-size: 36px;
    font-weight: 400;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-bottom: 20px;
  }
`;

const OurPlatform = styled.div`
  display: flex;

  h1 {
    color: white;
    font-style: italic;
    font-size: 96px;
    z-index: 1;
  }

  img {
    width: 350px;
    transform: translate(-50px, -90px);
    z-index: 0;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: #ffcc4d;
`;
