import styled from "styled-components"

const Conteiner = styled.header`
width: 100%;
height: 80px;
background-color: #0C2D48;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

a{
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    &:hover{
        transform: scale(0.9);
        color: #cacaca;
    }
}
`

const Title = styled.h1`
color: #fff;
`


export { Conteiner, Title }