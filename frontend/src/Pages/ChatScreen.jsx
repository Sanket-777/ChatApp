import ChatBox from "../Components/ChatBox";
import ChatField from "../Components/ChatField";
import Header from "../Components/Header";
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('https://chatapp-backend-mxxy.onrender.com');
// const socket = io('https://chat-app-weld-two.vercel.app');
// const socket = io('http://localhost:4000'); // Connect to server
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [people, setPeople] = useState(0);

    useEffect(() => {
        // Listen for incoming messages from server
        socket.on('message', (data) => {
            console.log(data + "msg data")
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on('newuser', (data) => {
            console.log(data + "msg data")
            // people++;
            toast.info(data);

        });

        socket.on('userleft', (data) => {
            console.log(data + "msg data")
            // people--;
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

        return () => socket.disconnect();

    }, []);

    const sendMessage = () => {
        socket.emit('message', inputValue); // Send message to server
        setInputValue(''); // Clear input field
    };
    return (
        <>

            <div className="bg-white  rounded-lg h-5/6  w-3/6 flex flex-col justify-between shadow-xl border-solid border-1" >
                <Header people={people} />
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