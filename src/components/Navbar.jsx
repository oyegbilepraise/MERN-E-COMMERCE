import styled from "styled-components"
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core"

const Container = styled.div`
    height: 60px;
    // background-color: black 
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-content: center;
    justify-content: space-around;
`

const Language = styled.span`
    font-sixe: 14px;
    cursor: pointer;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor:Pointer;
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
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font - weight: bold;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px;
`

const Navbar = () => {
    return (
        <Container className="navbar-container">
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>PRAISE</Logo></Center>
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
