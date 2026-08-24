import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <section className="flex flex-col items-center justify-center h-[200px] bg-primary mt-[100px]">

            <a className="hover:text-neutral text-secondary-content"
                href="mailto:leandro.carvalho@gmail.com?subject=Contact%20portfolio&body=Hello%20there!">&copy; Leandro Filipe Lourenco Carvalho - leandro.carvalho200409@gmail.com</a>


            <Link to="/legal">Impressum & Datenschutzerklärung</Link>
        </section>
    );
}
