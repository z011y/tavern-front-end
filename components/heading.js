import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Heading({ title, handleSubmit }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <HeadingWrapper>
      <img src="/tavern-icon-wht.svg" alt="" />
      <h1>{title}</h1>
      <Form onSubmit={() => dispatch({ type: "SUBMIT_QUERY_SEARCH" })}>
        <SearchBar
          placeholder="Search available artists"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </HeadingWrapper>
  );
}

const Form = styled.form`
  width: 50%;
`;

const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 20px;
  color: white;
  border: 0px solid black;
  background-color: #3c3729;
  padding-left: 20px;
  font-size: 16px;
  margin-left: 40px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    font-family: "Arvo", sans-serif;
    color: #585347;
  }
`;

const HeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #201a0a;
  color: white;
  display: flex;
  align-items: center;

  h1 {
    font-style: italic;
    margin-left: 20px;
  }

  img {
    width: 25px;
    margin-left: 20px;
  }
`;
