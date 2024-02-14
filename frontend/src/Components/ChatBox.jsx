import Messages from "./Messages";

export default function ChatBox({ messages }) {
    console.log(messages);
    return (
        <div className="w-full flex flex-col items-start overflow-auto">
            {/* Use return inside map function to render Messages component */}
            {messages.map((message, index) => (
                <Messages key={index} message={message} />
            ))}
        </div>
    );
}