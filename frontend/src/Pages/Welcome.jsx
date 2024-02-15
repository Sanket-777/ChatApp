/* eslint-disable react/prop-types */
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigateTo = useNavigate();
    const handleStartChatting = () => {
        navigateTo("/chat"); 
    };
    return (
        <div className="bg-white  rounded-lg h-2/6  w-1/8 flex flex-col   shadow-xl border-solid border-1" >
            <Header label={"Wel-Come to Random Chat Application"} />
            <button onClick={handleStartChatting} className="bg-yellow-300 p-4 rounded-md font-bold text-lg m-auto focus:outline-none transform transition duration-300 hover:scale-110 active:scale-90">
                Start Chatting
            </button>
        </div>
    )
}