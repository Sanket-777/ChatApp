/* eslint-disable no-unused-vars */
import ChatBox from "../Components/ChatBox";
import ChatField from "../Components/ChatField";
import Header from "../Components/Header";
import { useState, useEffect } from 'react';
const socket = io('https://chatapp-backend-mxxy.onrender.com');
// const socket = io('https://chat-app-weld-two.vercel.app');
// const socket = io('http://localhost:4000'); // Connect to server locally
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from "socket.io-client";
import Welcome from "./Welcome";

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [people, setPeople] = useState(0);
    const [name, setName] = useState("");
    const [Start, setStartuseState] = useState("");


    useEffect(() => {

        socket.on('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });


        console.log(socket.id)
        socket.on('newuser', (data) => {
            console.log(data + "msg data")
            toast.info(data);


        });

        socket.on('userleft', (data) => {
            console.log(data + "msg data")
            toast.info(data);

        });

        socket.on('people', (data) => {
            console.log(data + "msg data")
            setPeople(data)
        });

        socket.on('people', (data) => {
            console.log(data + "msg data")
            setPeople(data);
        });

        socket.on('chatHistory', (history) => {
            setMessages(history);

        });

        return (() => socket.disconnect())
    }, []);

    const sendMessage = () => {
        socket.emit('message', inputValue); // Send message to server
        setInputValue(''); // Clear input field
    };
    return (
        <>
            <div className="bg-white  rounded-lg h-5/6  w-3/6 flex flex-col justify-between shadow-xl border-solid border-1" >
                <Header label={"Chat Application"} people={people} />
                <ChatBox messages={messages} />
                <ChatField inputValue={inputValue}
                    setInputValue={setInputValue}
                    sendMessage={sendMessage} />

            </div>
            <ToastContainer
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>

    )
}