import styled from "styled-components"

const Contato = styled.footer`
    background-color: #0C2D48;
    width: 100%;
    color: #fff;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    p {
        font-size: 19px;
    }
    div{
        a {
            margin-right: 15px;
        }
        img{
            width: 40px;
        }
    }
`

export { Contato }