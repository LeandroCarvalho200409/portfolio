import { useLang } from "./utils/LanguageContext";
import CollapseUtil from "./utils/CollapseUtil";
import { getObjectByLangWithOrderedArray } from "./utils/Utils";

export default function Experience() {

    const { lang } = useLang()

    const getTitleByLang = () => {
        if (lang === "DE") {
            return "Erfahrung"
        } else if (lang === "PT") {
            return "Experiência profissional"
        } else {
            return "Experience"
        }
    }

    const spitexTitleArray = [
        "Angehörigenpfleger - RealCare Spitex GmbH, CH-5405 Dättwil",
        "Cuidador familiar - RealCare Spitex GmbH, CH-5405 Dättwil",
        "Family caregiver - RealCare Spitex GmbH, CH-5405 Dättwil"
    ]

    const spitexContentArray = [
        (
            <div>
                <p>Leider ist ein enger Familienmitglied an einem neurologischen Ereignis erkrankt, weshalb ich mein Studium vorerst pausieren
                    musste und eine Zeit für die Familie inverstieren musste. Aktuell bin ich Teilzeit in der Pflege dieses Angehörigen tätig
                    und bin dafür als Angehörigenpfleger angestellt, wobei ich nebenbei selbständig Zeit in Projekte und Informatik investiere und
                    offen für Jobangebote und Aufträge bin.
                </p>
                <p>Dies ist zwar eine anspruchsvolle Situation für mich, hat mich aber vor allem in folgenden Kompetenzen enorm weitergebracht:</p>
                <ul>
                    <li><b>Organisationsvermögen: </b>Während dieser Zeit musste ich einige Termine vereinbaren und alles extrem gut organisieren, auch mit Bestellungen,
                        Transport, etc. was mich in dieser Kompetenz enorm bereichert hat.</li>
                    <li><b>Verantwortung und Zuverlässigkeit: </b>Verantwortung für ein neurologisch erkrankter Familienmitglied aufzunehmen ist keine einfache Sache, aber ich
                        konnte es gut meistern und zuverlässig an allen Terminen und Vereinbarungen erscheinen.</li>
                    <li><b>Physische und emotionale Belastbarkeit: </b>Die Pflege einer neurologisch erkrankten Person, vor allem mit Verhaltensauffälligkeiten ist keine einfache Aufgabe
                        und erfordert eine extrem hohe physische und emotionale Belastbarkeit um dies 24/7 meistern zu können.</li>
                    <li><b>Medizinisches: </b>Während vielen Spital- /Klinikbesuchen, Arztterminen, Laborkontrollen konnte ich enorm viele medizinische Begrifflichkeiten und Vorgehensweisen lernen.
                        Nicht ohne Grund werde ich oft von neuen medizinischen Fachpersonen gefragt, ob ich vom Fach sei.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Infelizmente um familiar próximo sofreu um evento neurológico grave, pelo qual me vi obrigado a abandonar por enquanto a minha passagem
                    pelo ensino superior e dedicar uma temporada á estabilidade familiar. Atualmente ocupo o meu tempo como cuidador familiar em tempo parcial desse mesmo
                    familiar, pelo qual estou contratado. Paralelamente dedico imenso tempo para projetos informáticos e o meu desenvolvimento nessa área e estou disponível
                    para propostas de emprego e serviços.
                </p>
                <p>Apesar de esta situação representar uma fase difícil da minha vida, ajudou-me a avançar em inúmeros aspectos, tais como:</p>
                <ul>
                    <li><b>Aptidões organizativas: </b>Durante este período fui responsável pela organisação de inúmeras coisas, tais como consultas, encomendas de material médico,
                        transportes, etc. o qual me ajudou a aproimar estas minhas aptidões.</li>
                    <li><b>Responsabilidade e fiabilidade: </b>Cuidar de um familiar num tal estado não é tarefa fácil, porém consegui manter sempre o foco e cumprir com todas as minhas
                        responsabilidades</li>
                    <li><b>Resiliência física e emocional: </b>Esta tarefa, principalmente com uma pessoa que teve alterações comportamentais implica uma alta resiliência física e emocional
                        para a suportar 24/7.</li>
                    <li><b>Conhecimento medicinal: </b>Durante várias passágens por hospitais, clinicas de reabilitação, médicos, laboratórios acabei por obter conhecimento sobre vários termos e procedimentos medicinais.
                        Não é por acaso que sou frequentemente questionado por profissionais de saúde se sou da área.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Unfortunately, a close family member suffered a severe neurological event, which forced me to temporarily suspend my higher education studies and dedicate a period of time to ensuring my family’s stability. Currently,
                    I work part-time as a family caregiver for this relative, under a formal contract. In parallel, I devote a significant amount of time to IT projects and to my professional development in this field,
                    and I am available for job opportunities and freelance work.</p>

                <p>Although this situation represents a challenging phase of my life, it has helped me grow in several important aspects, such as:</p>

                <ul>
                    <li><b>Organizational skills:</b> During this period, I was responsible for organizing numerous matters, including medical appointments, ordering medical supplies, transportation, and more, which allowed me to significantly improve these skills.</li>
                    <li><b>Responsibility and reliability:</b> Taking care of a family member in such a condition is far from easy; however, I consistently remained focused and fulfilled all my responsibilities.</li>
                    <li><b>Physical and emotional resilience:</b> This role, especially when caring for someone who experienced behavioral changes, requires a high level of physical and emotional resilience to provide continuous support.</li>
                    <li><b>Medical knowledge:</b> Through multiple hospital visits, rehabilitation clinics, medical consultations, and laboratory visits, I acquired solid knowledge of various medical terms and procedures.
                        It is no coincidence that I am frequently asked by healthcare professionals whether I have a medical background.</li>
                </ul>
            </div>
        )
    ]


    const praktikumTitleArray = [
        "IMS-Langzeitpraktikum - Zürcher Kantonalbank, CH-8005 Zürich",
        "Estágio de longa duração como desenvolvedor de Software - Zürcher Kantonalbank, CH-8005 Zürich",
        "Long-term internship as Software Developer - Zürcher Kantonalbank, CH-8005 Zürich"
    ]

    const praktikumContentArray = [
        (
            <div>
                <p>Dieses Langzeitpraktikum war Bestandteil der Informatikmittelschulausbildung und notwendig für den Abschluss als <b>
                    Informatiker Applikationsentwickler EFZ</b>. Zudem war es meine erste berufliche Erfahrung als Applikationsentwickler
                    und eines der bereicherndste Zeiten in meinem Leben. Während diesem Zeitraum durfte ich meine bestehenden Kenntnisse deutlich erweitern
                    indem ich ein essenzielles <b>hochverfügbares System teilweise mitentwickeln und warten</b> durfte. Alltägliche Tätigkeiten waren die
                    Backend- (Java/Kotlin, MySQL, PostgreSQL, etc.) und Frontend-Entwicklung (Angular), die Konfiguration verschiedener Systeme
                    (Jenkins, Überwachungssysteme mittels AppDynamics, Kubernetes, etc.), Einsicht in die Softwarearchitekturwelt, und vieles mehr. Dabei durfte ich auch die
                    Arbeit in einem agilen SCRUM Team (bzw. mit dem SAFe) kennenlernen.</p>

                <p>Folgende Kompetenzen wurden in dieser Stelle ausgearbeitet:</p>

                <ul>
                    <li><b>Technische Kompetenzen: </b>Während diesem Zeitraum hatte ich die Gelegenheit die meisten technischen Kompetenzen in meiner gesammten Ausbildungszeit zu erlernen.
                        Dabei war es der Umgang mit den gesammten Technologien und Patterns, aber auch das Verständnis über hochkomplexe Systeme mit vielen Abhängigkeiten das ich am wertvollsten fand. Dazu musste das System
                        möglichst zu 100% verfügbar sein, sodass ich erlernen durfte wie man hochperfomante und robuste Systeme designed und betreibt.</li>
                    <li><b>Agiles Umfeld: </b>Es war auch das erste Mal, dass ich in einem SCRUM-Umfeld arbeiten durfte und das System kennenlernen durfte, bzw. überhaupt das erste Mal Kontakt
                        mit einem Scrum of Scrum (SAFe) Umfeld hatte.</li>
                    <li><b>Verantwortungsbewusstsein: </b>Mit solch einem hochkomplexen und zugleich spannendem System arbeiten zu dürfen war für mich nicht nur eine immense Freude und ein grosser Stolz,
                        sondern brachte auch viel Verantwortung mit sich, wobei ich mir dieses Bewusstsein während dieser Zeit ausbauen konnte und lernen durfte im Gedanken immer ein Schitt voraus zu sein (über das System).</li>
                    <li><b>Kennenlernen von Softwareüberwachungssysteme: </b>Es war das erste Mal, wo ich ein solch ausgereiftes und professionelles Softwareüberwachungstool sehen durfte und ich durfte viele Konfigurationen
                        an diesem System tätigen und es Hands-on kennenlernen. </li>
                    <li><b>Banking und Finanzenwelt: </b>Über verschiedene lehrreiche Schulungen und internen Themen durfte ich lernen wie überhaupt eine Bank funktioniert, wie die verschiedenen Systeme intern funktionieren
                        und interagieren.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Este estágio de longa duração foi o elemento que levou á conclusão do curso de ensino secundário e como tal ao <b>diploma profissional EFZ do sistema educativo da Suíça.</b>
                    Foi também a minha primeira experiência profissional como desenvolvedor de software e uma das experiências mais enriquecedoras da minha vida. Durante este período pude aprofundar e diversificar
                    os meus conhecimentos já existentes graças ao trabalho com um <b>sistema altamente complexo e sem margem para downtime</b>. As minhas tarefas de rotina consistiam no desenvolvimento do Backend
                    (Java/Kotlin, MySQL, PostgreSQL, etc.) e Frontend (Angular), a configuração de diversos sistemas (Jenkins, sistemas de monitarização de software, nomeadamente AppDynamics, Kubernetes, etc.),
                    primeiro contacto com a arquitetura de software, e muito mais. Também tive a oportunidade de conhecer o quotidiano numa equipa que trabalha com SCRUm (nomeadamente SAFe).</p>

                <p>Foram aproimadas as seguintes competências neste estágio:</p>

                <ul>
                    <li><b>Competências técnicas: </b>Foi durante esta fase que tive a oportunidade de aquirir a maioria do meu conhecimento no desenvolvimento de software em toda a minha formação.
                        O mais importante para mim foi o contacto com todas as diferentes tecnologias e padrões, tal como a compreensão e maturidade de lidar com sistemas altamente complexos e com muitas dependências.
                        Esse mesmo sistema tinha que estar disponível a práticamente 100% do tempo o que me permitiu aprender a desenhar e desenvolver sistemas de alta performance e resiliência.</li>
                    <li><b>Ambiente ágil: </b>Foi também a primeira vez em que eu pude trabalhar num ambiente SCRUM e conhecer o sistema. Foi também a primeira vez em que ouvi falar e trabalhei num ambiente
                        Scrum of Scrum (SAFe).</li>
                    <li><b>Sentido de responsabilidade: </b>Trabalhar com sistemas altamente complexos e ao mesmo tempo extremamante interessantes não foi apenas um enorme prazer e orgulho para mim, mas também significava que continha uma enorme
                        responsabilidade. Durante este período pude aproimar esse meu sentido de responsabilidade e aprendi ao mesmo tempo com esse sistema a ter o pensamento sempre um passo á frente.</li>
                    <li><b>Conhecimento de sistemas de monitorização de software: </b>Tive também a oportunidade de trabalhar pela primeira vez com um sistema de monitorização de software tão sofisticado e profissional como o AppDynamics e nele alterar
                        várias configurações.</li>
                    <li><b>Mundo bancário e financeiro: </b>Graças a várias formações internas pude também conhecer o funcionamento ao detalhe de um banco, tanto em geral, como a interação e funcionamento dos diferentes sistemas internos.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>
                    This long-term internship was the key element leading to the completion of my secondary education and, consequently, to obtaining the <b>EFZ professional diploma within the Swiss education system.</b>
                    It was also my first professional experience as a software developer and one of the most enriching experiences of my life. During this period, I was able to deepen and broaden my existing knowledge
                    by working with a <b>highly complex system with no margin for downtime</b>. My day-to-day tasks included backend development
                    (Java/Kotlin, MySQL, PostgreSQL, etc.) and frontend development (Angular), configuration of various systems (Jenkins, software monitoring systems such as AppDynamics, Kubernetes, etc.),
                    my first exposure to software architecture, and much more. I also had the opportunity to experience the daily workflow of a team working with SCRUM (specifically SAFe).
                </p>

                <p>
                    The following skills were developed during this internship:
                </p>

                <ul>
                    <li>
                        <b>Technical skills: </b>
                        It was during this phase that I acquired most of my knowledge in software development throughout my education.
                        The most important aspect for me was exposure to a wide range of technologies and patterns, as well as developing the understanding and maturity required to handle highly complex systems with many dependencies.
                        This system had to be available almost 100% of the time, which allowed me to learn how to design and develop high-performance and resilient systems.
                    </li>
                    <li>
                        <b>Agile environment: </b>
                        This was also the first time I worked in a SCRUM environment and became familiar with its structure.
                        It was also my first exposure to and experience working within a Scrum of Scrums setup (SAFe).
                    </li>
                    <li>
                        <b>Sense of responsibility: </b>
                        Working with highly complex and extremely interesting systems was not only a great pleasure and a source of pride for me, but it also came with significant responsibility.
                        During this time, I was able to further develop my sense of responsibility and learned to always think one step ahead.
                    </li>
                    <li>
                        <b>Knowledge of software monitoring systems: </b>
                        I also had the opportunity to work for the first time with a sophisticated and professional software monitoring system such as AppDynamics, where I configured and adjusted various settings.
                    </li>
                    <li>
                        <b>Banking and financial domain: </b>
                        Thanks to various internal trainings, I also gained detailed insight into how a bank operates, both at a general level and in terms of the interaction and functioning of its internal systems.
                    </li>
                </ul>
            </div>
        )
    ]

    const nowTextArray = [
        "jetzt",
        "agora",
        "now"
    ]

    const ferienjobTitleArray = [
        "Ferienjob als IT-Supporter - Elma Electronic AG, CH-8620 Wetzikon ZH",
        "Trabalho de férias como técnico de suporte informático - Elma Electronic AG, CH-8620 Wetzikon ZH",
        "Summer job in IT support - Elma Electronic AG, CH-8620 Wetzikon ZH"
    ]

    const ferienjobContent = [
        (
            <div>
                <p>2 wöchiger Ferienjob im IT Support, welcher meine erste Arbeitserfahrung war und extrem lehrreich war.
                    Dabei durfte ich einiges möglichst selbständig machen. Die Arbeit bestand übergehend über die <b>Führung der
                        Inventur der IT-Systeme</b> und dazugehörigen Geräte des Unternehmens und <b>CleanUp der Serversysteme</b> (Beschriftung der
                    Ports mittels Ettiketten, entfernen von nicht gebrauchten Kabel und Geräte, etc.), sowie die <b>Unterstützung bei der
                        Office 365 Migration</b>.</p>
                <p>Folgende Kompetenzen wurden dabei erarbeitet:</p>
                <ul>
                    <li><b>Kennenlernen der Systemtechnik und Infrastruktur: </b>Für mich als Applikationsentwickler war es die erste Erfahrung in
                        diesem Umfeld.</li>
                    <li><b>Selbständigkeit und Verantwortung: </b>Nach einer Einführung durfte ich die meiste Zeit selbständig mit den Arbeiten verbringen
                        und somit diese Kompetenzen ausbauen.</li>
                    <li><b>Kommunikation: </b>Während diesen 2 Wochen durfte ich einige Mitarbeiter an deren Arbeitsplätzen unterstützen und somit
                        meine Kommunikationsfähigkeit ausbauen.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>Este trabalho de férias que durou duas semanas representou para mim a primeira experiência profissional e foi extremamente enriquecedora.
                    Durante estas duas semanas pude fazer diferentes coisas. Fui principalmente responsável pela <b>inventarização dos diferentes sistemas informáticos</b>
                    da empresa e pelo <b>CleanUp dos servidores</b> da mesma (Etiquetagem e identificação das portas de rede, remoção de cabos e dispositivos não utilizados, etc.),
                    tal como o <b>auxílio na migração do sistema Office 365</b>.
                </p>
                <p>Foram trabalhadas as seguintes competências:</p>
                <ul>
                    <li><b>Primeiro contacto com a tecnologia de sistemas e infrasestruturas: </b>Para mim como desenvolvedor de software foi o primeiro contacto com esses sistemas.</li>
                    <li><b>Autonomia e responsabilidade: </b>Depois de uma breve introdução aos sistemas pude trabalhar praticamente todo o tempo sozinho e como tal aproimar estas competências.</li>
                    <li><b>Comunicação: </b>Durante estas duas semanas pude auxiliar vários funcionários da empresa nos seus locais de trabalho e como tal aproimar as minhas competências de comunicação.</li>
                </ul>
            </div>
        ),
        (
            <div>
                <p>This sommer job that lasted two weeks represented for me my first real professional work experience and was therefore extremily valuable. My work consisted mainly in <b>updating the inventory of the IT-Systems and their devices</b>
                    and the <b>CleanUp of the server systems</b> (Identification and labeling of the different ports, removal of obsolete devices and cables, etc.),
                    as well as <b>helping in the Office 365 Migration</b>.
                </p>
                <p>During this role, the following skills were developed:</p>
                <ul>
                    <li><b>First contact with IT infrastructure: </b>For me as a software developer, this was my first contact with such systems and therefore very enriching.</li>
                    <li><b>Autonomy and responsibility: </b>After being introduced to the different systems, I passed most of the time working on my own.</li>
                    <li><b>Comunication: </b>During this role I had the pleasure to support a lot of workers at their own workplace and had a lot of contact with them.</li>
                </ul>
            </div>
        )
    ]


    return (
        <section id="experience" className="flex flex-col items-center max-w-[100%] mx-auto bg-primary py-[50px]" style={{ minHeight: "20vh" }}>
            <div className="flex flex-col w-[70%] items-center">
                <h1>{getTitleByLang()}</h1>
                <CollapseUtil content={[
                    [`2025-${getObjectByLangWithOrderedArray(nowTextArray, lang)}`, getObjectByLangWithOrderedArray(spitexTitleArray, lang), getObjectByLangWithOrderedArray(spitexContentArray, lang)],
                    ["2023-2024", getObjectByLangWithOrderedArray(praktikumTitleArray, lang), getObjectByLangWithOrderedArray(praktikumContentArray, lang)],
                    ["08/2021", getObjectByLangWithOrderedArray(ferienjobTitleArray, lang), getObjectByLangWithOrderedArray(ferienjobContent, lang)]
                ]} />
            </div>
        </section>
    )
}