import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>PRAISE.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatum totam aut vel earum fuga odit soluta, ducimus tempore minima impedit labore reprehenderit, ipsum error eos magnam aliquam deserunt. Obcaecati ducimus maiores dolorum maxime quidem? Doloribus consectetur vitae qui deleniti numquam facere officiis! Repellat.
                </Desc>
                <SocialContainer>
                    <SocialIcon style={{ backgroundColor: "#3B5999" }}>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon style={{ backgroundColor: "#E4405F" }}>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon style={{ backgroundColor: "#55ACEE" }}>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon style={{ backgroundColor: "#E60023" }}>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, Victoria Island, Lagos
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +234 703 0402 622
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> oluwadhammieh@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;
