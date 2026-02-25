import { useState } from "react";
import { useLang } from "./utils/LanguageContext";
import { getObjectByLangWithOrderedArray } from "./utils/Utils";
import CollapseUtil from "./utils/CollapseUtil";

export default function Education() {

    const { lang } = useLang()

    const titleArray = [
        "Ausbildung",
        "Formação",
        "Education"
    ]

    const bachelorTitleArray = [
        "Bachelor in Engenharia Informática (Computer Engineering), Universidade do Minho, Braga Portugal",
        "Licenciatura em Engenharia Informática, Universidade do Minho, Braga Portugal",
        "Bachelor in Computer Engineering, Universidade do Minho, Braga Portugal"
    ]

    const bachelorContentArray = [
        (
            <div>
                <p>1 Semester Bachelor in Computer Engineering, wo ich Einsicht in die funktionale Programmierung und Grundlagen der Mathematik angewandt auf die Informatikwelt hatte.</p>
                <ul>
                    <li><b>Funktionale Programmierung: </b>Theoretische und praktische Grundlagen mit den Programmiersprachen Haskell und Elixir.</li>
                    <li><b>Mathematische Grundlagen: </b>Erfahrung in Calculus, Diskrete Mathematik und Algebra gesammelt</li>
                    <li><b>Wahlpflichtfach portugiesisches Arbeitsrecht: </b>Kennen der grundlegenden Gesetze des portugiesischen Arbeitsrechts.</li>
                </ul>

                <p>Aufgrund einer Erkrankung in der Familie nach dem ersten Semester abgebrochen.</p>
            </div>
        ),
        (
            <div>
                <p>Primeiro semestre na Licenciatura em Engenharia Informática onde obtive conhecimentos aprofundados em programação funcional e nos conceitos matemáticos fundamentais para este curso.</p>
                <ul>
                    <li><b>Programação Funcional: </b>Fundamentos teóricos e práticos adquiridos com as linguagens de programação Haskell e Elixir.</li>
                    <li><b>Fundamentos matemáticos: </b>Adquirida experiência em cálculo, matemática discreta e álgebra.</li>
                    <li><b>Direito laboral (opcional): </b>Conhecimento dos termos de lei fundamentais do Direito laboral português.</li>
                </ul>

                <p>Como um familiar próximo adoeceu de forma grave, tive de abandonar a licenciatura.</p>
            </div>
        ),
        (
            <div>
                <p>First semester of the Bachelor in Computer Engineering where I got to know functional programming and the mathematical fundaments needed for this course. </p>
                <ul>
                    <li><b>Functional programming: </b>Practical and theorical fundaments aqcuired using Haskell and Elixir</li>
                    <li><b>Mathematical fundaments: </b> Knowledge in Calculus, Discrete Mathematics and Algebra.</li>
                    <li><b>Labour law (optional): </b>Getting to know the fundamental terms of the portuguese labour law.</li>
                </ul>

                <p>After one semester I had to abandon the bachelor because of a seriour illness in my immediate family</p>
            </div>
        )
    ]

    const imsTitleArray = [
        "Informatikmittelschule, Kantonsschule Büelrain Winterthur Schweiz",
        "Ensino Secundário (12° ano, Informatikmittelschule), Kantonsschule Büelrain Winterthur, Suíça",
        "Secondary School (Informatikmittelschule) at Kantonsschule Büelrain in Winterthur, Switzerland"
    ]

    const imsContentArray = [
        (
            <div>
                <p>Vierjährige Informatikmittelschulausbildung (inkl. Praktikumsjahr) mit dem Fokus auf die Applikationsentwicklung sowie Wirtschaft und Recht. Zum Abschluss dieser
                    Ausbildung erhielt ich somit mein schweizer Informatiker Applikationsentwickler EFZ Diplom sowie mein kaufmännisches Berufsmaturitätsdiplom.
                </p>
                <ul>
                    <li><b>Full-Stack Entwicklung: </b>Full-Stack Entwicklung vor allem mit den Technologien Java und Spring Boot, sowie React und Thymeleaf (zudem Python und andere Sprachen)</li>
                    <li><b>Mobile App Entwicklung: </b>Einführung in die Mobile App-Entwicklung mithilfe von React Native</li>
                    <li>
                        <b>Netzwerke, Servers, Betriebssysteme und Computer: </b>Aufsetzung mehrerer Serversysteme (DHCP, DNS, Hosting, Windows Active Directory etc.) mit folgenden Betriebssysteme
                        (Windows Server, Cent OS, Ubuntu, etc.), Design von Netzwerksysteme für verschiedene Rahmenbedingungen,
                        sowie Einführung in den Aufbau verschiedener Betriebssysteme.
                    </li>
                    <li>
                        <b>Dokumentation und UML: </b>Erfahrung mit Dokumentation der verschiedenen Systemen inkl. UML-Diagramme.
                    </li>
                    <li>
                        <b>Wirtschaft und Recht: </b> Kennenlernen der wichtigsten globalen Wirtschaftskonzepte, Buchhaltung und des schweizer Rechts.
                    </li>
                    <li>
                        etc.
                    </li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Curso de ensino secundário de quatro anos (incl. estágio profissional) com foco no Desenvolvimento de aplicações, tal como Economia e Direito. Como prova de acreditação do ensino secundário
                    obtive o diploma profissional suíço EFZ como informático no ambito do desenvolvimento de aplicações, tal como um diploma de maturidade profissional em economia e direito.
                </p>
                <ul>
                    <li><b>Desenvolvimento Full-Stack: </b>Desenvolvimento de software Full-Stack especialmente com Java e Spring Boot, tal como React e Thymeleaf (também Python, PHP e outras linguagens)</li>
                    <li><b>Desenvolvimento de aplicações móveis: </b>Intordução ao desenvolvimento de aplicações para dispositivos móveis com React Native</li>
                    <li>
                        <b>Rede informática, servidores, sistemas operativos e sistemas computacionais: </b>Instalação e configuração de vários servidores (DHCP, DNS, Hosting, Windows Active Directory, etc.) recorrendo a vários
                        sistemas operativos (Windows Server, Cent OS, Ubuntu, etc.), Design de redes computacionais para várias circunstâncias, tal como introdução á estrutura de vários sistemas operativos.
                    </li>
                    <li>
                        <b>Documentação e UML: </b>Documentação aprofundada de sistemas p.ex. de software usando várias técnicas, incl. UML.
                    </li>
                    <li>
                        <b>Economia e Direito: </b> Aprendizagem dos conceitos fundamentais da economia global, contabilidade, tal como do direito suíço.
                    </li>
                    <li>
                        etc.
                    </li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Four years of secondary school (incl. internship) focused on Software-Development and Economics/Law which lead to my
                    swiss EFZ-Certificate as a Application-Developer (Informatiker Applikationentwickler) and my Berufsmaturität Diploma in Economics and Law.
                </p>
                <ul>
                    <li><b>Full-Stack Development: </b>Full-Stack development using mostly Java and Spring Boot, as well as React and Thymeleaf (also Python and other languages)</li>
                    <li><b>Mobile App Development: </b>Introduction to mobile development using React Native</li>
                    <li>
                        <b>Networking, Servers, OS and Computer systems: </b>Introduction into setup of multiple servers (DHCP, DNS, Hosting, etc.) using multiple OS (Windows Server, Cent OS, Ubuntu, etc.), basic design of networks
                        and getting to know how OSs are structured.
                    </li>
                    <li>
                        <b>Documentation and UML: </b>Thorough documentation of the developed software incl. UML-Diagrams.
                    </li>
                    <li>
                        <b>Economics and Law: </b> Getting to know the most important concepts of global and swiss economics as well as the most important law terms of Switzerland.
                    </li>
                    <li>
                        etc.
                    </li>
                </ul>
            </div>
        )
    ]

    return (
        <section className="flex flex-col items-center w-[70%] mx-auto mt-[100px]" style={{ minHeight: "20vh" }}>
            <h1>{getObjectByLangWithOrderedArray(titleArray, lang)}</h1>
            <CollapseUtil content={[
                ["2024-2025", getObjectByLangWithOrderedArray(bachelorTitleArray, lang), getObjectByLangWithOrderedArray(bachelorContentArray, lang)],
                ["2020-2024", getObjectByLangWithOrderedArray(imsTitleArray, lang), getObjectByLangWithOrderedArray(imsContentArray, lang)]
            ]} />
        </section>
    );
}
