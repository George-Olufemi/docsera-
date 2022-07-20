import Head from "next/head";
import styled from 'styled-components';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Profile from '../components/Profile';
import ProfileSidebar from "../components/ProfileSidebar";

export default function profile({ children  }) {
  return (
    <>
        <Head>
        <title>Profile - Hire prevetted technical writers</title>
        <meta name="description" content="Docsera - Hire prevetted technical writers" />
        <link rel="icon" href="/Vector (6).png" />
        </Head>
        {/* content goes here. */}
        <Container>
            <ProfileSidebar />
            <RightContainer>
                <Profile>
                    { children  }
                </Profile>
            </RightContainer>
        </Container>
    </>
  );
}


const Container = styled.div`
    display: flex;
`

const RightContainer = styled.div`
    margin-left: 280px;
    margin-bottom: 150px;
`