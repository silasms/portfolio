import { Component } from "react"
import { Contato } from "./style.js"
import linkedin from "../assets/icons/linkedin.svg"
import github from "../assets/icons/githubfooter.svg"

export default class Footer extends Component{
    render() {
        return(
        <Contato>
            <p>Contatos:</p>
            <div>
                <a href="https://www.linkedin.com/in/silas-medeiros-6b44a0213/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/silasms" target="_blank"><img src={github} alt="linkedin" /></a>
            </div>
        </Contato>
        )
    }
}