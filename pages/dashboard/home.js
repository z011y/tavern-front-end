import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Layout from "../../components/layout";
import Gig from "../../components/gig";
import Details from "../../components/details";
import Heading from "../../components/heading";

export default function Home() {
  const [active, setActive] = useState(null);

  const gigs = [
    {
      id: 0,
      name: "John Mayer",
      date: "04/09/2020",
      genre: "Indie",
      img: "/band.jpg",
      cost: "$1200",
    },
    {
      id: 1,
      name: "Post Malone",
      date: "05/04/2020",
      genre: "Folk",
      img: "/band2.jpg",
      cost: "$1400",
    },
    {
      id: 2,
      name: "SHY Martin",
      date: "06/13/2020",
      genre: "Pop",
      img: "/band3.jpg",
      cost: "$1250",
    },
    {
      id: 3,
      name: "Green Day",
      date: "06/19/2020",
      genre: "Rock",
      img: "/band4.jpg",
      cost: "$800",
    },
    {
      id: 4,
      name: "Boy in Space",
      date: "07/02/2020",
      genre: "Indie",
      img: "/band5.jpg",
      cost: "$1500",
    },
    {
      id: 5,
      name: "Mowgli's",
      date: "07/21/2020",
      genre: "Indie",
      img: "/band6.jpg",
      cost: "$400",
    },
  ];

  const gigList = () => {
    return gigs.map((gig) => {
      return (
        <Gig
          key={gig.id}
          name={gig.name}
          date={gig.date}
          genre={gig.genre}
          img={gig.img}
          onClick={() => setActive(gig.id)}
          active={active === gig.id}
        />
      );
    });
  };

  let activeGig = gigs.find((element) => element.id === active);

  return (
    <Layout>
      <Container>
        <Heading title="Dashboard" />
        <Content>
          <Column>
            <Label>Upcoming Gigs</Label>
            <Gigs>{gigList()}</Gigs>
          </Column>
          <Column>
            <Label>Gig Details</Label>
            {active === null ? (
              <Placeholder>
                <h1>There's nothing here</h1>
                <h3>Click an artist to see more information</h3>
                <img src="/nothing-here.svg" alt="" />
              </Placeholder>
            ) : (
              <Details
                name={activeGig.name}
                date={activeGig.date}
                genre={activeGig.genre}
                img={activeGig.img}
                cost={activeGig.cost}
                button="Make Payment"
              />
            )}
          </Column>
        </Content>
        <Footer></Footer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 75px 1fr 75px;
  background-color: #201a0a;
  max-height: 100vh;
`;

const Footer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #201a0a;
  color: white;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: flex-start;
  background-color: #201a0a;
  padding-right: 50px;
  padding-left: 50px;
  height: 100%;
  h1 {
    font-size: 40px;
    color: white;
  }

  h2 {
    color: white;
    font-size: 36px;
    font-weight: 400;
  }
`;

const Label = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffcc4d;
`;

const Column = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  height: 100%;
  width: 100%;
`;

const Gigs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: column;
  overflow: scroll;
  max-height: calc(100vh - 180px);
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 70%;
    margin-right: 150px;
  }

  h3 {
    color: white;
  }
`;
