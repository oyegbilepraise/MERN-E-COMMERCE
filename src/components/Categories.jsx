import styled from 'styled-components'
import { categories } from '../data'
import Categoryitem from './Categoryitem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content : space-between;
`
const Categories = () => {
    return (
        <div>
            <Container>
                {categories.map(item => (
                    <Categoryitem item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}

export default Categories
