import styled from "styled-components"

const Principal = styled.main`
    background-color: #fff;
    width: 80%;
    margin: 20px auto;
    border-radius: 25px;
    padding: 30px 50px;
    h2{
        text-align: center;
        font-size: 29px;
    }
    div{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        img{
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            object-position: 0% 60%;
        }

        p{
            width: 700px;
            font-size: 18px;
            z-index: 2;
            text-align: justify;
        }
    }
`

const Formacao = styled.article`
background-color: #fff;
width: 80%;
height: 550ox;
margin: 20px auto;
border-radius: 25px;
padding: 30px 50px;
h2{
    text-align: center;
    font-size: 29px;
}
div h3{
    font-size: 25px;
    color: #383838;
}
div div p{
    font-size: 20px;
    color: #757575;
    font-weight: 400;
}
p{
    font-size: 17px;
    color: #757575;
    font-weight: 400;
}
.formacao{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

const Cursando = styled.div`
    font-size: 16px;
    color: #757575;
    font-weight: 400;
`

const Habilidades = styled.div`
background-color: #fff;
width: 80%;
height: 550ox;
margin: 20px auto;
border-radius: 25px;
padding: 30px 50px;
h2{
    text-align: center;
    font-size: 29px;
}
`

const Basico = styled.div`
margin-bottom: 60px;
h3{
    font-size: 25px;
    color: #383838;
    margin-bottom: 10px;
}
div{
    display: flex;
    align-items: center;
}
img{
    width: 70px;
    margin-right: 12px;
}
`

const Intermediario = styled(Basico)`
.logos{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
`

export { Principal, Formacao, Cursando, Habilidades, Basico, Intermediario }