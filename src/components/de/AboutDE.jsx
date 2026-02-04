
import myFoto from "./../../assets/bewerbungsfoto.png"

export function AboutDE() {
  return (
    <section className="flex flex-row" style={{ minHeight: "100vh", padding: "5rem" }}>
      <div>
        <img src={myFoto} alt="Leandro Carvalho Bewerbungsfoto" width="400px" />
      </div>
      <div className="ml-[50px] flex flex-col items-center">
        <h2>Über mich</h2>
        <p className="text-center">Ich bin ein ambitionierter Junior Softwareentwickler mit einem Jahr Praxiserfahrung in der Entwicklung hochverfügbaren Full-Stack-Applikationen mit Java/Kotlin und Angular. Ich verfüge über fundierte Kenntnisse im Umgang mit relationalen Datenbanken (MySQL) und konnte in meiner letzten Stelle Erfahrung mit der Software-Überwachungsapplikation AppDynamics sammeln. Während meines Studiums habe ich zusätzlich Kenntnisse in funktionaler Programmierung mit Haskell und Elixir erworben.</p>
      </div>
    </section>
  );
}