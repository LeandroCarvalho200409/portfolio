import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLang } from "./utils/LanguageContext";
import { useState } from "react";
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

            </div>
        ),
        (
            <div>

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
                    und extrem bereichernd für mich. </p>
            </div>
        ),
        (
            <div>
                
            </div>
        ),
        (
            <div>
                
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