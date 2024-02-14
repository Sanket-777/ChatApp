import ChatBox from "../components/ChatBox";
import ChatField from "../components/ChatField";
import Header from "../components/Header";
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('ws://localhost:4000'); // Connect to server
import 'react-toastify/dist/ReactToastify.css';

// Import necessary components from react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Listen for incoming messages from server
        socket.on('message', (data) => {
            console.log(data + "msg data")
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('newuser', (data) => {
            console.log(data + "msg data")
            toast.info(data);

        });


    }, []);

    const sendMessage = () => {
        socket.emit('message', inputValue); // Send message to server
        setInputValue(''); // Clear input field
    };
    return (
        <>

            <div className="bg-white  rounded-lg h-5/6  w-3/6 flex flex-col justify-between shadow-xl border-solid border-1" >
                <Header />
                <ChatBox messages={messages} />
                <ChatField inputValue={inputValue}
                    setInputValue={setInputValue}
                    sendMessage={sendMessage} />
            </div>
            
        </>

    )
}