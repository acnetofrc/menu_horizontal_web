import React from "react"
import "./Menu_Horizontal.css" 

export default function Menu() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href="#inicio"> Nosso Canal </a></li>
                        <li> <a href="#cursos"> Cursos </a></li>
                        <li> <a href="#contatos"> Contatos </a></li>
                        <li> <a href="#parceiros"> Parceiros </a></li>
                        <li> <a href="#missao"> Missão </a></li>
                        <li> <a href="#sobre"> Sobre </a></li>
                    </ul>
                </nav>
            </div>

            <section id="inicio">
                <h2> Nosso Canal</h2>
            </section>

            <section id="cursos">
                <h2> Cursos </h2>
            </section>

            <section id="contatos">
                <h2> Contattos</h2>
            </section>

            <section id="parceiros">
                <h2> Parceiros</h2>
            </section>

            <section id="missao">
                <h2> Missão</h2>
            </section>

            <section id="sobre">
                <h2> Sobre </h2>
            </section>

        </div>
    )
}