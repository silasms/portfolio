import { Component } from "react"
import { Conteiner, Title } from "./style.js"

export default class Header extends Component{
    render(){
        return(
            <Conteiner>
                <Title>Silas Medeiros</Title>
                <div>
                    <a href="#perfil">PERFIL</a>
                    <a href="#competencias">COMPETÊNCIAS</a>
                </div>
            </Conteiner>
        )
    }
}