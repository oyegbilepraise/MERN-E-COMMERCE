import styled from "styled-components"
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import {useSelector} from  'react-redux'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    ${mobile({ padding: '10px 0px' })}
`

const Language = styled.span`
    font-sixe: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor:Pointer;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    align-content: center;
    display: flex;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`
const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`
const Logo = styled.h1`
    font - weight: bold;
    ${mobile({ fontSize: '24px' })}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px;
`

const Navbar = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart);
    return (
        <Container className="navbar-container">
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>JULIE COLLECTION</Logo></Center>
                <Right>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
