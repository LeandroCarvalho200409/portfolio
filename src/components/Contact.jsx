import { useLang } from "./utils/LanguageContext"
import { getObjectByLangWithOrderedArray } from "./utils/Utils"

export default function Contact() {

    const { lang } = useLang()

    const titles = [
        "Kontaktieren Sie mich",
        "Contacte-me",
        "Contact me"
    ]

    return (
        <section className="flex flex-col items-center w-[70%] mx-auto mt-[100px]" style={{ minHeight: "20vh" }}>
            <h1>{getObjectByLangWithOrderedArray(titles, lang)}</h1>
        </section>
    )
}