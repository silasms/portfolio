import { Component } from "react";
import { Principal, Formacao, Cursando, Habilidades, Basico, Intermediario } from "./style"
import { silas, nodejs, nosql, aws, mysql, java, js, github, spring, react, docker, sass, bootstrap, lua } from "../assets/exports.js"

const logos = [
    {img: mysql, texto: "mysql"},
    {img: java, texto: "java"},
    {img: js, texto: "js"},
    {img: github, texto: "github"},
    {img: spring, texto: "spring"},
    {img: react, texto: "react"},
    {img: docker, texto: "docker"},
    {img: sass, texto: "sass"},
    {img: bootstrap, texto: "bootstrap"},
    {img: lua, texto: "lua"}
]

export default class Main extends Component{
    render () {
        return (
            <>
            <Principal id="perfil">
                    <h2>Perfil</h2>
                <div>
                    <img src={silas} alt="Silas"/>
                    <p>Sou estudante de programação há uns 2 anos. Comecei á mexer com computador com 3 anos, meu primeiro contato com programação eu tinha 12 anos, comecei com o delphi 7, amei criar softwares, só que na época não tinha tanto conteúdo de programação na internet, daí eu acabei deixando de lado. Em 2018, voltei me interessei de novo nesse negócio de programação, 2019 comecei estudando LUA, daí esse ano(2021), consegui uma bolsa na digital house(plataforma de ensino) horário integral, com essa oportunidade eu me empolguei com a área e cá estou eu.</p>
                </div>
            </Principal>
            <Formacao id="competencias">
            <h2>Formações</h2>
                <div className="formacao">
                    <div>
                        <h3>Digital house</h3>
                        <p>Certified Tech Developer</p>
                        <Cursando>Cursando</Cursando>
                    </div>
                    <p>Maio 2021 - Maio 2023</p>
                </div>
            </Formacao>
            <Habilidades>
                <h2>Habilidades</h2>
                <Basico>
                        <h3>Básico:</h3>
                    <div>
                        <div className="logos">
                            <img src={nodejs} alt="nodejs"/>
                            <img src={nosql} alt="nosql"/>
                            <img src={aws} alt="aws"/>
                        </div>
                    </div>
                </Basico>
                <Intermediario>
                        <h3>Intermediário:</h3>
                    <div>
                        <div className="logos">
                            {logos.map(({img, texto}) => {
                                return(<img src={img} alt={texto}/>)
                            })}
                        </div>
                    </div>
                </Intermediario>
            </Habilidades>
            </>
        )
    }
}