import Head from 'next/head';
import styled from 'styled-components'
import RightContentDetails from '../components/RightContentDetails';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return(
    <>
    <Head>
        <title>Dashboard - Hire prevetted technical writers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Docsera - Hire prevetted technical writers" />
        <link rel="icon" href="/Vector (6).png" />
    </Head>
        <Container>
            <Sidebar />
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
    @media (max-width: 700px) {
        display: block;
    }
`

const RightContent = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    @media (max-width: 700px) {
        width: 100vw;
    }
`