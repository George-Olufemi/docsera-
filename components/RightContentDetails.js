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
          <h5>Emmanuel</h5>
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
            <p>Hiring on Docsera is very straightforward, you can<br /> complete your hiring process with just 4 clicks.</p>
          </LeftContent>
          <RightContent>
            <img src="/OBJECTS.png" alt="objects" />
          </RightContent>
        </Card>
        {/*  */}
        <CardComponents>
          <ComponentOne>
            <View>
              <h6>view list</h6>
              <img src="/uparrow.png" alt="arrow" />
            </View>
            <Person>
              <img src="/users.png" alt="User" />
            </Person>
            <h1>67</h1>
            <p>Candidates Matched</p>
          </ComponentOne>
          <ComponentTwo>
            <SubCardOne>
              <Head>
                <BagDiv>
                  <img src="/officebag.png" alt="Office Bag" />
                </BagDiv>
                <ViewTwo>
                  <h6>view list</h6>
                  <img src="/uparrow.png" alt="arrow" />
                </ViewTwo>
              </Head>
              <Div>
                <h1>20</h1>
                <div>
                  <h4>Candidates</h4>
                  <p>Hired</p>
                </div>
              </Div>
            </SubCardOne>
            <SubCardOne>
            <Head>
                <MemoDiv>
                  <img src="/memo.png" alt="Office Bag" />
                </MemoDiv>
                <ViewTwo>
                  <h6>view list</h6>
                  <img src="/uparrow.png" alt="arrow" />
                </ViewTwo>
              </Head>
              <Div>
                <h1>20</h1>
                <div>
                  <h4>Writers Leads</h4>
                  <p>Created</p>
                </div>
              </Div>
            </SubCardOne>
          </ComponentTwo>
          <ComponentThree>
            <SubCardThree>
            <Head>
                <XDiv>
                  <img src="/x.png" alt="Office Bag" />
                </XDiv>
                <ViewTwo>
                  <h6>view list</h6>
                  <img src="/uparrow.png" alt="arrow" />
                </ViewTwo>
              </Head>
              <Div>
                <h1>20</h1>
                <div>
                  <h4>Rejected</h4>
                  <p>Candidates Name</p>
                </div>
              </Div>
            </SubCardThree>
            <SubCardThree>
            <Head>
                <PlusDiv>
                  <img src="/plus.png" alt="Office Bag" />
                </PlusDiv>
                <ViewTwo>
                  <h6>view list</h6>
                  <img src="/uparrow.png" alt="arrow" />
                </ViewTwo>
              </Head>
              <Div>
                <h1>20</h1>
                <div>
                  <h4>New Order</h4>
                  <p>Candidates Name</p>
                </div>
              </Div>
            </SubCardThree>
          </ComponentThree>
        </CardComponents>
      </Container>
    </>
  );
}


const Container = styled.div`
  padding-top: 20px;
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
  margin-top: 20px;
  /* width: 980px; */
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

const CardComponents = styled.div`
  margin-top: 30px;
  height: 314px;
  display: flex;
  justify-content: space-between;
`

const ComponentOne = styled.div`
  width: 377px;
  height: 314px;
  background: #FFFFFF;
  box-shadow: 0px 7px 18px rgba(151, 151, 151, 0.38);
  border-radius: 10px;
  margin-right: 34px;
  h1 {
    margin-left: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    line-height: 101.5%;
    color: #313131;
  }
  p{
    padding-left: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 101.5%;
    color: #313131;
  }
`

const View = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 49.64px;
  /* margin-top: 30px; */
  h6 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: -0.04em;
  color: #1B1D4E;
  }
`

const Person = styled.div`
  width: 74px;
  height: 74px;
  background: rgba(224, 255, 235, 0.7);
  border-radius: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 999;
  margin-left: 39px;
  img {
    position: relative;
    top: 12px;
    left: 16px;
  }
  &::after {
    content: "";
    height: 50px;
    width: 50px;
    border-radius: 100%;
    position: absolute;
    margin-top: 20px;
    margin-left: 2px;
    background: rgba(224, 255, 235, 0.7);
  }
`

const ComponentTwo = styled.div`
  width: 269px;
  margin-right: 40px;
`

const SubCardOne = styled.div`
  width: 269px;
  height: 135px;
  background: #FFFFFF;
  box-shadow: 0px 7px 18px rgba(151, 151, 151, 0.25);
  border-radius: 10px;
  margin-bottom: 40px;
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`

const BagDiv = styled.div`
  width: 32px;
  height: 32px;
  background: #FFF3E0;
  border-radius: 100%;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 28px;
    width: 28px;
    border-radius: 100%;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;  
    background: rgba(255, 243, 224, 0.5);;  
  }
`

const MemoDiv = styled.div`
  width: 32px;
  height: 32px;
  background: #D1FFE2;
  border-radius: 100%;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 28px;
    width: 28px;
    border-radius: 100%;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;  
    background: rgba(209, 255, 226, 0.5);  
  }
`

const XDiv = styled.div`
  width: 32px;
  height: 32px;
  background: #FFD7D7;
  border-radius: 100%;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 28px;
    width: 28px;
    border-radius: 100%;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;  
    background: rgba(255, 215, 215, 0.5);  
  }
`

const PlusDiv = styled.div`
  width: 32px;
  height: 32px;
  background: #D9E8FF;
  border-radius: 100%;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 28px;
    width: 28px;
    border-radius: 100%;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;  
    background: rgba(217, 231, 255, 0.4);  
  }
`

const ViewTwo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 13.27px;
  /* margin-top: 30px; */
  h6 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: -0.04em;
  color: #1B1D4E;
  }
`

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: 22px;
  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 101.5%;
    color: #313131;
    margin-right: 7px;
  }
  h4 {
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #0F1231;
  }
  p {
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #0F1231;
  }
`

const ComponentThree = styled.div`
  width: 269px;
`
const SubCardThree = styled.div`
  width: 269px;
  height: 135px;
  background: #FFFFFF;
  box-shadow: 0px 7px 18px rgba(151, 151, 151, 0.25);
  border-radius: 10px;
  margin-bottom: 40px;
`