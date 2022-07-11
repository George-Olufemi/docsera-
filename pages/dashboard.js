import styled from 'styled-components'
import RightContentDetails from '../components/RightContentDetails';

export default function Dashboard() {
  return(
    <>
        <Container>
            <Sidebar>
                <ImageContainer>
                    <img src="/dashboard-logo.png" alt="Logo" />
                </ImageContainer>
                <Dash>
                    <DashIcon>
                        <img src="/home.png" alt="Home" />
                    </DashIcon>
                    <DashText><h1>Dashboard</h1></DashText>
                </Dash>
                <Access>
                    <AccessIcon>
                        <img src="/pen.png" alt="Pen" />
                    </AccessIcon>
                    <AccessText><h1>Access</h1></AccessText>
                </Access>
                <ActivityCenter>
                    <ActivityIcon>
                        <img src="/activity.png" alt="Activity" />
                    </ActivityIcon>
                    <ActivityText><h1>Activity Center</h1></ActivityText>
                </ActivityCenter>
                <Support>
                    <SupportIcon>
                        <img src="/support.png" alt="Activity" />
                    </SupportIcon>
                    <SupportText><h1>Support</h1></SupportText>
                </Support>
                <Profile>
                    <ProfileIcon>
                        <img src="/profile.png" alt="Activity" />
                    </ProfileIcon>
                    <ProfileText><h1>Profile</h1></ProfileText>
                </Profile>
                <Signout>
                    <SignoutIcon>
                        <img src="/signout.png" alt="Activity" />
                    </SignoutIcon>
                    <SignoutText><h1>Sign out</h1></SignoutText>
                </Signout>
                {/*  */}
                <SidebarFoot>
                    <img src="/footer-ball.png" alt="Activity" />
                    <FooterButton>
                        <Button>Upgrade</Button>
                    </FooterButton>
                </SidebarFoot>
            </Sidebar>
            <RightContent>
                <RightContentDetails />
            </RightContent>
        </Container>
    </>
  ) ;
}


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

const Sidebar = styled.div`
    width: 280px;
    height: 100vh;
    border-right: 1px solid #ECEDEF;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContainer = styled.div`
    margin-top: 43px;
`

const Dash = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;
`
const DashIcon = styled.div`
    margin-right: 17px;
`

const DashText = styled.div`
    margin-top: 3px;
    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 101.5%;
        color: #707070;
    }
`

const Access = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
`

const AccessIcon = styled.div`
    margin-right: 17px;
`

const AccessText = styled.div`
    margin-top: 3px;
    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 101.5%;
        color: #707070;
    }
`

const ActivityCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
`
const ActivityIcon = styled.div`
    margin-right: 17px;
`

const ActivityText = styled.div`
    margin-top: 3px;
    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 101.5%;
        color: #707070;
    }
`

const Support = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
`

const SupportIcon = styled.div`
    margin-right: 17px;
`

const SupportText = styled.div`
    margin-top: 3px;
    h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 101.5%;
    color: #707070;
    }
`

const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
`

const ProfileIcon = styled.div`
    margin-right: 17px;
    img {
        width: 20px;
        height: 20px;
    }
`

const ProfileText = styled.div`
    margin-top: 3px;
    h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 101.5%;
    color: #707070;
    }
`

const Signout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer; 
`

const SignoutIcon = styled.div`
    margin-right: 17px;
`

const SignoutText = styled.div`
    margin-top: 3px;
    h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 101.5%;
    color: #707070;
    }
`

const SidebarFoot = styled.div`
    height: 239.98px;
    width: 178px;
    background: #CFC8FF;
    border-radius: 13.1852px;
    position: absolute;
    bottom: 30px;
`

const FooterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    padding: 14.8333px 35.4352px;
    gap: 8.24px;
    height: 46.67px;
    background: #FFFFFF;
    border-radius: 13.1852px;
    color: #5F75EE;
`

const RightContent = styled.div`
    width: 1160px;
    height: 100vh;
    background-color: white;
`