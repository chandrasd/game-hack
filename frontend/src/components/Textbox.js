import { useEffect, useState } from "react";


const Textbox = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(text);
    }, [text]);

    const handleSend = (e) => {
        setText(e.target.value);
    };
    
    return (
        <div>
        <input
            type="text"
            value={text}
            onChange={handleSend}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        </div>
    );
}

export default Textbox;

