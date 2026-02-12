import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Education() {

    const [arrowOne, setArrowOne] = useState("down");
    const [arrowTwo, setArrowTwo] = useState("down");

    const toggleArrow = (arrow, setArrow) => {
        if (arrow === "up") {
            setArrow("down");
        } else {
            setArrow("up");
        }
    } 

    return (
        <section className="flex flex-col items-center w-[70%] mx-auto" style={{ minHeight: "20vh" }}>
            <h1>Ausbildung</h1>
            <div className="flex flex-col">
                <div className="join join-vertical bg-base-100">
                    <div className="collapse join-item border-base-300 border">
                        <input type="checkbox" name="my-accordion-4" onClick={() => toggleArrow(arrowOne, setArrowOne)} />
                        <div className="collapse-title font-semibold flex flex-row">
                            <p className="mx-[5px]">2024-2025</p>
                            <p className="mx-[5px]">1 Semester Bachelor in Engenharia Informatica (Computer Engineering), Universidade do Minho, Braga Portugal</p>
                            <p className="ml-auto mr-[40px]">{arrowOne === "down" ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
                        </div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse join-item border-base-300 border">
                        <input type="checkbox" name="my-accordion-4" onClick={() => toggleArrow(arrowTwo, setArrowTwo)}/>
                        <div className="collapse-title font-semibold flex flex-row">
                            <p className="mx-[5px]">2020-2024</p>
                            <p className="ml-[5px] mr-auto">Informatikmittelschule, Kantonsschule Büelrain Winterthur Schweiz</p>
                            <p className="mr-[40px]">{arrowTwo === "down" ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
                        </div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
