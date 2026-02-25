
import { useLang } from "./utils/LanguageContext";
import myFoto from "./../assets/bewerbungsfoto.png"
import "./About.css"
import { getObjectByLangWithOrderedArray } from "./utils/Utils";

export function About() {

  const { lang, setLang } = useLang();

  const textDE = (
    <>
      <p className="text-center text-[14pt]">
        Ich bin ein ambitionierter Junior Softwareentwickler mit einem Jahr Praxiserfahrung in der Entwicklung hochverfügbaren
        Full-Stack-Applikationen mit Java/Kotlin und Angular. Ich verfüge über fundierte Kenntnisse im Umgang mit relationalen
        Datenbanken (MySQL) und konnte in meiner letzten Stelle Erfahrung mit der Software-Überwachungsapplikation AppDynamics
        sammeln. Während meines Studiums habe ich zusätzlich Kenntnisse in funktionaler Programmierung mit Haskell und Elixir
        erworben.
      </p>

      <p className="text-center text-[14pt]">
        Meine Mission ist es, qualitative, performante und vor allem stabile Applikationen zu entwickeln, die reale Probleme
        mit durchdachten, nachhaltigen digitalen Lösungen adressieren.
      </p>

      <p className="text-center text-[14pt]">
        Obwohl ich in einigen Bereichen noch wenig praktische Erfahrung habe, bringe ich ein großes Interesse an Machine Learning,
        Cybersecurity sowie Electronics und Embedded Systems mit.
      </p>

      <p className="text-center text-[14pt]">
        Ich freue mich darauf, Ihr nächstes Projekt mitgestalten und unterstützen zu können!
      </p>
    </>
  )

  const textPT = (
    <>
      <p className="text-center text-[14pt]">
        Eu sou um desenvolvedor de software Full-Stack júnior com um ano de experiência profissional em desenvolvimento de aplicações
        altamente disponíveis com Java/Kotlin e Angular. Possuo igualmente conhecimentos em bases de dados relacionais,
        nomeadamente MySQL. No meu último cargo, trabalhei com a ferramenta de monitorização de software AppDynamics.
        Durante a minha passagem pelo ensino superior, adquiri experiência em programação funcional com as linguagens Haskell e
        Elixir.
      </p>

      <p className="text-center text-[14pt]">
        A minha missão como desenvolvedor é criar soluções digitais com a devida qualidade, desempenho e resiliência, a fim de resolver
        problemas da vida real de forma bem pensada e sustentável a longo prazo.
      </p>

      <p className="text-center text-[14pt]">
        Embora não tenha muita experiência nessas áreas, interesso-me imenso por Machine Learning, cibersegurança, assim como eletrónica e sistemas embutidos (Embedded Systems).
      </p>

      <p className="text-center text-[14pt]">
        Estou ansioso por colaborar consigo no seu próximo projeto!
      </p>
    </>
  )

  const textEN = (
    <>
      <p className="text-center text-[14pt]">
        I'm a Junior Full-Stack Software Developer with one year of professional experience in developing highly available applications
        using Java/Kotlin and Angular. I also have knowledge of relational databases, particularly MySQL. In my previous role,
        I had the pleasure to with the software monitoring tool AppDynamics. During my time at university, I gained experience in
        functional programming with the languages Haskell and Elixir.
      </p>

      <p className="text-center text-[14pt]">
        My mission as a developer is to create high-quality, performant, and robust software that addresses real-world problems with
        well-thought-out, sustainable digital solutions.
      </p>

      <p className="text-center text-[14pt]">
        Although I don't have much experience in these fields yet, I am very passionate about Machine Learning, Cybersecurity,
        and Electronics/Embedded Systems.
      </p>

      <p className="text-center text-[14pt]">
        I'm excited to work with you in your next project!
      </p>
    </>
  )

  return (
    <section className="about-section flex flex-col items-center max-w-[100%] mx-auto pt-[200px] pb-[50px] bg-primary px-[5rem]" style={{ minHeight: "100vh" }}>
      <div className="about-parent flex flex-col" >
        <h1 className="mx-auto mb-[50px]">{getObjectByLangWithOrderedArray(["Über mich", "Sobre mim", "About me"], lang)}</h1>
        <div className="about flex">
          <div className="flex justify-center">
            <img src={myFoto} alt="Leandro Carvalho Bewerbungsfoto" width="400px" height="400px" />
          </div>
          <div className="about-text flex flex-col items-center">
            {getObjectByLangWithOrderedArray([textDE, textPT, textEN], lang)}
          </div>
        </div>
      </div>
    </section>
  );
}