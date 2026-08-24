import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CollapseUtil({ content }) {

    // Initialize arrows state based on content length
    const [arrows, setArrows] = useState(() => 
        Array(content.length).fill("down")
    );

    const toggleArrow = (index) => {
        setArrows(prev =>
            prev.map((val, i) => (i === index ? (val === "up" ? "down" : "up") : val))
        );
    };

    return (
        <div className="flex flex-col w-[100%]">
            <div className="join join-vertical bg-base-100">
                {
                    content.map((contentEntry, index) => (
                        <div className="collapse join-item border-base-300 border">
                            <input type="checkbox" name="my-accordion-4" onClick={() => toggleArrow(index)} />
                            <div className="collapse-title font-semibold flex flex-row">
                                <p className="mx-[5px]"><b>{contentEntry[0]}</b></p>
                                <p className="mx-[5px]">{contentEntry[1]}</p>
                                <p className="ml-auto mr-[40px]">{arrows[index] === "down" ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
                            </div>
                            <div className="collapse-content text-sm">
                                {contentEntry[2]}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 