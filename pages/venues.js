import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Venues() {
  return (
    <Layout>
      <Content>
        <h1>
          A simple, more efficient <br /> <span>booking solution</span>
        </h1>
        <h2>
          Speed up your booking process and discover <br />
          unique and talented artists along the way
        </h2>
        <Link href="/join" passHref>
          <Button>Join Now</Button>
        </Link>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #201a0a;
  background-image: url("/venues.png");
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

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: #ffcc4d;
`;

const TavernIllustration = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90%;
`;
