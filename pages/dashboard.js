import Head from 'next/head';
import styled from 'styled-components'
import RightContentDetails from '../components/RightContentDetails';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return(
    <>
    <Head>
        <title>Dashboard - Hire prevetted technical writers</title>
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
`

// const Sidebar = styled.div`
//     width: 280px;
//     height: 100vh;
//     border-right: 1px solid #ECEDEF;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: start;
// `

// const ImageContainer = styled.div`
//     margin-top: 43px;
// `

// const LinksContainer = styled.div`
//     margin-top: 50px;
//     width: 150px;
//     height: 400px;
// `

// const Dash = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 0;
//     margin-bottom: 35px;
//     cursor: pointer;
//     /* div {
//         margin: 0;
//         padding: 0;
//     } */
//     h5 {
//         margin: 0;
//         padding:0;
//         font-style: normal;
//         font-weight: 500;
//         font-size: 16px;
//         line-height: 101.5%;
//         color: #707070;
//         &:hover {
//             color:  #51BE7A;
//             transition: 0.2s ease-in-out;
//         }
//     }
// `

// const ImageDiv = styled.div`
//     margin-right: 17px;
// `

// const Profile = styled.div`
//     display: flex;
//     align-items: center;
//     color: #707070;
//     img {
//         margin: 0;
//         padding: 0;
//         width: 20px;
//         height: 20px;
//     }
// `

// const SidebarFoot = styled.div`
//     height: 239.98px;
//     width: 178px;
//     background: #CFC8FF;
//     border-radius: 13.1852px;
//     position: absolute;
//     bottom: 30px;
// `

// const FooterButton = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const Button = styled.div`
//     padding: 14.8333px 35.4352px;
//     gap: 8.24px;
//     height: 46.67px;
//     background: #FFFFFF;
//     border-radius: 13.1852px;
//     color: #5F75EE;
// `

const RightContent = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
`