import styled from "styled-components";
import Link from "next/link";

export default function JoinForm({
  name,
  button,
  sampleName,
  sampleEmail,
  samplePassword,
}) {
  return (
    <FormContainer>
      <Label>{name}</Label>
      <Input placeholder={sampleName} />
      <Label>Email</Label>
      <Input placeholder={sampleEmail} />
      <Label>Password</Label>
      <Input placeholder={samplePassword} />
      <PasswordRequirements>
        <Column>
          <Requirement>* One lowercase character</Requirement>
          <Requirement>* One uppercase character</Requirement>
          <Requirement>* One number</Requirement>
        </Column>
        <Column>
          <Requirement>* One special character</Requirement>
          <Requirement>* At least 8 characters</Requirement>
        </Column>
      </PasswordRequirements>
      <Link href="/dashboard/home">
        <Button>{button}</Button>
      </Link>
      <Login>
        Already have an account? <Link href="/login">Log in</Link>
      </Login>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 20px;
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

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffcc4d;
  align-self: center;
  margin-top: 10px;
`;

const PasswordRequirements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Requirement = styled.p`
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 12px;
  color: white;
`;

const Login = styled.p`
  font-size: 14px;
  color: white;
  align-self: center;

  a {
    color: #ffcc4d;
  }
`;
