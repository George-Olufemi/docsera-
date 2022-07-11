import React from "react";
import styled from "styled-components";

export default function RightContentDetails() {
  return( 
    <>
      <Container>
        <Appbar>
          <InputDiv>
            <img src="/search.png" alt="Search" />
            <input type="text" placeholder="Search for a candidate" />
          </InputDiv>
          <Avatar>
          <h5>James</h5>
          <img src="/avatar.png" alt="Avatar" />
          </Avatar>
        </Appbar>
        {/*  */}
        <Welcome>
          <h1>Hi, Emmanuel</h1>
          <p>Welcome back!</p>
        </Welcome>
        {/*  */}
        <Card>
          <LeftContent>
            <h1>Why hire a technical writer on Docsera?</h1>
            <p>Hiring on Docsera is ery straightforward, you can<br /> complete your hiring process with just four clicks.</p>
          </LeftContent>
          <RightContent>
            <img src="/OBJECTS.png" alt="objects" />
          </RightContent>
        </Card>
      </Container>
    </>
  );
}


const Container = styled.div`
  padding-top: 59px;
  padding-left: 90px;
  padding-right: 90px;
`

const Appbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InputDiv = styled.div`
  width: 528px;
  height: 51px;
  background: red;
  display: flex;
  align-items: center;
  background: #F8FFFA;
  box-shadow: 0px 7px 20px rgba(151, 151, 151, 0.25);
  border-radius: 25px;
  img {
    padding-left: 34px;
  }
  input {
    width: 450px;
    padding: 10px 20px;
    font-size: medium;
    border: none;
    outline: none;
    background: #F8FFFA;
  }
`

const Avatar = styled.div`
  display: flex;
  h5 {
    margin-right: 25px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #7B7B7B;
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: 23px;
  }
`

const Welcome = styled.div`
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 101.5%;
    color: #474747;
    margin-bottom: 20px;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 101.5%;
    color: #000000;
    margin-top: 0;
  }
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  width: 980px;
  height: 215px;
  background: #FFFFFF;
  box-shadow: 0px 7px 20px rgba(151, 151, 151, 0.25);
  border-radius: 10px;
`

const LeftContent = styled.div`
  padding-top: 59px;
  padding-left: 60px;
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 70%;
    color: #474747;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 156.5%;
    color: #999999;
  }
`

const RightContent = styled.div`

`