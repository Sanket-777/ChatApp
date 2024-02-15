/* eslint-disable react/prop-types */
import Messages from "./Messages";
import { useRef, useEffect } from "react";
export default function ChatBox({ messages }) {
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (

        <div className="w-full flex flex-col items-start overflow-auto">
            {messages.map((message, index) => (
                <Messages key={index} message={message} />
            ))}

            <div ref={messageEndRef} />

        </div>
    );
}