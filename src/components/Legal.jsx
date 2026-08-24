import { Link } from "react-router-dom";
import { useLang } from "./utils/LanguageContext";
import { getObjectByLangWithOrderedArray } from "./utils/Utils";
import LanguageToggle from "./utils/LanguageToggle";

export default function Legal() {

    const { lang } = useLang()

    return (
        <div className="ml-[50px] mt-[50px]">
            <Link to="/">{getObjectByLangWithOrderedArray(["Zurück", "Retrodecer", "Back"], lang)}</Link>
            <LanguageToggle></LanguageToggle>

            <h1>1- {getObjectByLangWithOrderedArray(["Impressum", "Informações legais", "Legal Notice"], lang)}</h1>

            <p className="m-[0px]">Leandro Filipe Lourenço Carvalho</p>
            <p className="m-[0px]">Bahnhofstr. 6</p>
            <p className="m-[0px]">8494 Bauma - CH</p>

            <br></br>
            <h3 className="m-[0px]">Kontakt</h3>
            <br></br>
            <p className="m-[0px]">leandro.carvalho200409@gmail.com</p>
            <br></br>
            <h3 className="m-[0px]">Berufsbezeichnung</h3>
            <p>{getObjectByLangWithOrderedArray(["Informatiker Applikationsentwickler EFZ", "Desenvolvedor de software com diploma EFZ (Suíça)", "Software Developer with swiss EFZ diploma"], lang)}</p>


            <h1>2- {getObjectByLangWithOrderedArray(["Datenschutzerklärung", "Política de privacidade", "Privacy Policy"], lang)}</h1>
            <h2>2.1- {getObjectByLangWithOrderedArray(["Allgemeine Informationen", "Informações gerais", "General Information"], lang)}</h2>
            <p>{getObjectByLangWithOrderedArray([
                "Diese Webseite dient als Portfolio-Webseite und ihr Ziel ist, dass allfällige Arbeitgeber, Kunden oder weitere Interessierten sich Informationen über meine Person und professionelle Entwicklung verschaffen können. Es werden keine Cookies, Analytics oder Tracking-Tools verwendet.",
                "Este Website serve como portfolio de desenvolvedor de software para a minha pessoa e tem como finalidade informar empregadores, clientes e outros interessados sobre a minha pessoa e a minha carreira. Este site não recorre ao uso de Cookies, dados analíticos ou de tracking.",
                "This is a software developer portfolio website and therefore its goal is to inform employers, clients and other interested parties about me and my carreer. This site does not use Cookies, analytics or any tracking tools."
                ], lang)}</p>
            <h2>2.2- Hosting</h2>
            <p>{getObjectByLangWithOrderedArray([
                "Der Provider dieser Webseite erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies beinhaltet: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und Betriebssystem. Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschliesslich dem sicheren und stabilen Betrieb der Webseite.",
                "O fornecedor desta página web recolhe e armazena automaticamente informações nos chamados Server-Logfiles (registos do servidor), que o seu navegador transmite automaticamente para nós. Estas informações incluem: endereço IP, data e hora da solicitação, tipo de navegador e sistema operativo. Estes dados não podem ser associados a pessoas específicas e servem exclusivamente para garantir a operação segura e estável da página web.",
                "The provider of this website automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. This includes: IP address, date and time of the request, browser type, and operating system. This data cannot be assigned to specific individuals and is used exclusively for the secure and stable operation of the website."
                ], lang)}</p>
            <h2>2.3- {getObjectByLangWithOrderedArray(["Kontakt via E-mail", "Contacto via E-mail", "Contact via E-mail"], lang)}</h2>
            <p>{getObjectByLangWithOrderedArray([
                "Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben (einschliesslich Ihrer E-Mail-Adresse und des Inhalts der Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht an Dritte weitergegeben.",
                "Se entrar em contacto comigo por e-mail, os dados fornecidos (incluindo o seu endereço de e-mail e o conteúdo da mensagem) serão guardados por mim com a finalidade de processar o seu pedido e para o caso de surgirem questões adicionais. Estes dados não serão partilhados com terceiros sem o seu consentimento.",
                "If you contact me by e-mail, the information you provide (including your e-mail address and the content of the message) will be stored by me for the purpose of processing your request and in case of follow-up questions. This data will not be shared with third parties without your consent."
                ], lang)}</p>
            <h2>2.4- {getObjectByLangWithOrderedArray(["Ihre Rechte", "Os seus direitos", "Your rights"], lang)}</h2>
            <p>{getObjectByLangWithOrderedArray([
                "Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht darauf, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Bitte wenden Sie sich hierzu an die im Impressum angegebene E-Mail-Adresse.",
                "Tem o direito de, a qualquer momento e de forma gratuita, obter informações sobre a origem, os destinatários e a finalidade dos seus dados pessoais guardados. Tem também o direito de solicitar a retificação, o bloqueio ou a eliminação desses mesmos dados. Para o efeito, por favor entre em contacto através do endereço de e-mail indicado no Impressum.",
                "You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time and free of charge. You also have the right to request the rectification, blocking, or deletion of this data. To do so, please contact me using the e-mail address provided in the Impressum."
                ], lang)}</p>

            <b>{getObjectByLangWithOrderedArray(["Letzte Änderung:", "Última alteração:", "Last update:"], lang)}</b> 08/2026
        </div>
    );

}

