import { Component } from "react"
import { Contato } from "./style.js"
import { linkedin, githubfooter } from "../assets/exports.js"

export default class Footer extends Component{
    render() {
        return(
        <Contato>
            <p>Contatos:</p>
            <div>
                <a href="https://www.linkedin.com/in/silas-medeiros-6b44a0213/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/silasms" target="_blank"><img src={githubfooter} alt="linkedin" /></a>
            </div>
        </Contato>
        )
    }
}