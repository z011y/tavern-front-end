import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../components/layout";
import JoinForm from "../components/join-form";

export default function Login() {
  return (
    <Layout>
      <Content>
        <Title>
          <h1>Login</h1>
          <h2>Login to access your account</h2>
          <img src="/candles.svg" alt="fire" />
        </Title>
        <FormContainer>
          <Form>
            <h2>Login</h2>
            <Label>Email</Label>
            <Input placeholder="Email" />
            <Label>Password</Label>
            <Input placeholder="Password" />
            <Link href="/dashboard/home">
              <Button>Login</Button>
            </Link>
            <Join>
              Already have an account? <Link href="/join">Join Now</Link>
            </Join>
          </Form>
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
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffcc4d;
  align-self: center;
`;

const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  border: 10px solid #ffcc4d;
`;

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 20px;

  h2 {
    color: white;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: white;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #3c3729;
  color: white;
  border: 0px solid black;
  padding-left: 10px;
  font-size: 16px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #585347;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Join = styled.p`
  font-size: 14px;
  color: white;
  align-self: center;

  a {
    color: #ffcc4d;
  }
`;
