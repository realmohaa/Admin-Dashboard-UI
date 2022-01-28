import { Link } from "react-router-dom";
import styled from "styled-components";

const TopElementsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1``
const Button = styled.button`
    width: 80px;
    border: none;
    padding: 8px;
    background-color: #3BB077;
    color: #FFF;
    border-radius: .7em;
    font-size: 15px;
    cursor: pointer;
`

const TopElements = (props) => {
  return (
    <TopElementsContainer>
        <Title>{props.title}</Title>
        <Link to={props.buttonRoute}><Button>Create</Button></Link>
    </TopElementsContainer>
  );
};

export default TopElements;
