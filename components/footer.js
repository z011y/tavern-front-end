import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>
      <Column>
        <LogoWrapperFooter>
          <Link href="/" passHref>
            <img src="/tavern-logo-alt.svg" alt="logo" />
          </Link>
          <p>Connecting local artists with local venues</p>
        </LogoWrapperFooter>
      </Column>
      <Column>
        <h1>Artists</h1>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
      </Column>
      <Column>
        <h1>Venues</h1>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
      </Column>
    </FooterWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  width: 100px;

  img {
    cursor: pointer;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 125px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffcc4d;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 600px;
  background-color: #ffcc4d;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 150px;
`;

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 24px;
  }

  a {
    color: #3c3729;
  }
`;

const LogoWrapperFooter = styled(LogoWrapper)`
  flex-direction: column;
  width: 100%;

  img {
    width: 200px;
  }

  p {
    color: #3c3729;
  }
`;
