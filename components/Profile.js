import styled from 'styled-components';

export default function Profile() {
  return(
    <>
        <RightContentContainer>
            <Appbar>
                <Title>
                    <HeaderDiv><h1>Profile</h1></HeaderDiv>
                    <SubHeaderDiv><p>You have 3 recent activity</p></SubHeaderDiv>
                </Title>
                <Avatar>
                    <Name><h6>Emmanuel</h6></Name>
                    <Face><img src="/avatar.png" alt="Avatar" /></Face>
                </Avatar>
            </Appbar>
            <Content>
                <h4>Edit Profile</h4>
                <Edit>
                    <img src="/faceo.png" alt="" />
                </Edit>
                <Form>
                    <form>
                        <Level>
                            <div>
                                <label>First Name</label><br />
                                <input placeholder='John' type="text" />
                            </div>
                            {/*  */}
                            <div>
                                <label>Last Name</label><br />
                                <input placeholder='Doe'  type="text" />
                            </div>
                        </Level>
                        <Email>
                            <label>Email</label><br />
                            <input placeholder='thomasdhardison@dayrep.com'  type="text" />
                        </Email>
                        <Contact>
                            <label>Contacts Number</label><br />
                            <input placeholder='661-724-7734'  type="text" />
                        </Contact>
                        <Contact>
                            <label>Company Name</label><br />
                            <input placeholder='1368 Hayhurst Lane, Oshogbo'  type="text" />
                        </Contact>
                        <Level>
                            <div>
                                <label>City</label><br />
                                <input placeholder='Lagos'  type="text" />
                            </div>
                            {/*  */}
                            <div>
                                <label>City</label><br />
                                <input placeholder='Lagos'  type="text" />
                            </div>
                        </Level>
                        <Level>
                            <div>
                                <label>Zip Code</label><br />
                                <input placeholder='11357'  type="text" />
                            </div>
                            {/*  */}
                            <div>
                                <label>Country</label><br />
                                <input placeholder='Nigeria'  type="text" />
                            </div>
                        </Level>
                        <Contact>
                            <label>Password</label><br />
                            <input placeholder='●●●●●●●●●●●●●●●'  type="password" />
                        </Contact>
                        <Button><h4>Save</h4></Button>
                    </form>
                </Form>
            </Content>
        </RightContentContainer>
    </>
  );
}


const RightContentContainer = styled.div`
    /* background-color: red; */
    /* width: 1160px; */
    height: 100vh;
`

const Appbar = styled.div`
    height: 70px;
    width: 1160px;
    border-bottom: 1px solid #ECEDEF;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
` 

const Title = styled.div`
    display: flex;
    align-items: center;
    /* width: 100%;  */
    margin-left: 63px;
`

const HeaderDiv = styled.div`
    margin-right: 36px;
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 29px;
        line-height: 44px;
        text-align: center;
        color: #323232;
    }
`

const SubHeaderDiv = styled.div`
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 26px;
        text-align: center;
        color: #AEAEAE;
    }
`

const Name = styled.div`
    margin-right: 25px;
    h6 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #7B7B7B;
    }
`

const Face = styled.div`

`

const Avatar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 110px;
`

const Content = styled.div`
    margin-left: 63px;
    h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 28px;
        color: #000000;
    }
`

const Edit = styled.div`
    img {
        border-radius: 100%;
        cursor: pointer;
    }
`

const Form = styled.div`
    margin-top: 38px;
    label {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #808080;
    }
    input {
        width: 306px;
        height: 45px;
        left: 353px;
        top: 350px;
        background: #FFFFFF;
        border: 1px solid #C2C2C2;
        border-radius: 6px;
        &::placeholder {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            padding-left: 5px;
            color: #808080;
        }
    }
`

const Level = styled.div`
    display: flex;
    margin-bottom: 20px;
    div {
        margin-right: 36px;
    }
`

const Email = styled.div`
    margin-bottom: 20px;
    input {
        width: 648px;
        height: 44px;
        left: 353px;
        top: 443px;
        background: #FFFFFF;
        border: 1px solid #C2C2C2;
        border-radius: 6px;
        &::placeholder {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            padding-left: 5px;
            color: #808080;
        }
    }
`

const Contact = styled.div`
    margin-bottom: 20px;
    input {
        width: 648px;
        height: 44px;
        left: 353px;
        top: 443px;
        background: #FFFFFF;
        border: 1px solid #C2C2C2;
        border-radius: 6px;
        &::placeholder {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            padding-left: 5px;
            color: #808080;
        }
    }
`

const Button = styled.div`
    width: 154px;
    height: 44px;
    left: 353px;
    top: 979px;
    background: #55BC7A;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #FFFFFF;
    }
`