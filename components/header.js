import styled from "styled-components";
import Link from "next/link";

import NavLink from "./navlink";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/" passHref>
          <img src="/tavern-logo.svg" alt="logo" />
        </Link>
      </LogoWrapper>
      <SearchWrapper>
        <Search placeholder="Search artists and venues"></Search>
      </SearchWrapper>
      <LinksWrapper>
        <Link href="/artists" passHref>
          <NavLink>For Artists</NavLink>
        </Link>
        <Link href="/venues" passHref>
          <NavLink>For Venues</NavLink>
        </Link>
        <Link href="/login" passHref>
          <NavLink>Log In</NavLink>
        </Link>
        <Link href="/join" passHref>
          <Button>Join Now</Button>
        </Link>
      </LinksWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #201a0a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 175px;
  padding-left: 175px;
  z-index: 100;
`;

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

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Search = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 20px;
  color: white;
  border: 0px solid black;
  background-color: #3c3729;
  padding-left: 20px;
  font-size: 16px;
  margin-right: 40px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    font-family: "Arvo", sans-serif;
    color: #585347;
  }
`;
