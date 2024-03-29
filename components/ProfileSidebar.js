import styled from 'styled-components';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function ProfileSidebar() {
  return(
    <>
        <LeftContainer>
                <Logo>
                    <img src='/dashboard-logo.png' alt="Dashboard-Logo" />
                </Logo>
                <Contain>
                    <Items>
                        <ItemOne>
                            <img src="/grid.png" alt="Grid" />
                        </ItemOne>
                        <ItemOne>
                            <img src="/edit.png" alt="Grid" />
                        </ItemOne>
                    </Items>
                    {/*  */}
                    <Items>
                        <ItemOne>
                        <img src="/Cart.png" alt="Grid" />
                        <img className={styles.itemthree} src="/top.png" alt="Grid" />
                        </ItemOne>
                        <ItemOne>
                        <img src="/Fire.png" alt="Grid" />
                        </ItemOne>
                    </Items>
                    {/*  */}
                    <Items>
                        <ItemOne>
                        <img src="/Money.png" alt="Grid" />
                        </ItemOne>
                        <ItemOne>
                        <img src="/watch.png" alt="Grid" />
                        </ItemOne>
                    </Items>
                    {/*  */}
                    <Items>
                        <ItemSeven>
                        <img src="/User.png" alt="Grid" />
                        <img className={styles.itemseven} src="/23.png" alt="Grid" />
                        </ItemSeven>
                        <ItemOne>
                        <img src="/Wallet.png" alt="Grid" />
                        </ItemOne>
                    </Items>
                </Contain>
                {/*  */}
                <SidebarFoot>
                    <img src="/footer-ball.png" alt="Activity" />
                    <FooterButton>
                        <Button>Upgrade</Button>
                    </FooterButton>
                </SidebarFoot>
            </LeftContainer>
    </>
  );
}


const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height:820px;
    background-color: #F9F9F9;
    position: fixed;
    top: 0;
    @media (max-width: 700px) {
        display: none;
    }
`

const Logo = styled.div`
    margin-top: 43px;  
    display: flex;
    justify-content: center;
    align-items: center
`

const Contain = styled.div`
    margin-top: 58px;
    /* background: red; */
    width: 200px;
    height: 500px;
`

const Items = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 46px;
`

const ItemOne = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ECEFF7;
    border-radius: 10px;
    /* margin-right: 61px; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ItemSeven = styled.div`
    width: 50px;
    height: 50px;
    background-color: #55BC7A;
    border-radius: 10px;
    /* margin-right: 61px; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const SidebarFoot = styled.div`
    height: 239.98px;
    width: 178px;
    background: #CFC8FF;
    border-radius: 13.1852px;
    position: absolute;
    bottom: 0;
    margin-bottom: 20px
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
    cursor: pointer;
`

const RightContainer = styled.div`

`