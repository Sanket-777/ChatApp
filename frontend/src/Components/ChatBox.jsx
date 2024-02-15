/* eslint-disable react/prop-types */
import Messages from "./Messages";
import { useRef, useEffect } from "react";
export default function ChatBox({ messages }) {
    const messageEndRef = useRef(null);

    // Callback function to scroll to the bottom of the div
    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (

        <div className="w-full flex flex-col items-start overflow-auto">
            {/* Use return inside map function to render Messages component */}
            {messages.map((message, index) => (
                <Messages key={index} message={message} />
            ))}

            <div ref={messageEndRef} />

        </div>
    );
}