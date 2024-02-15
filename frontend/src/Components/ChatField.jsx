/* eslint-disable react/prop-types */
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function ChatField({ inputValue, setInputValue, sendMessage }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setShowEmojiPicker(false)
            sendMessage();
        }
    };

    const handleEmojiClick = (emojiObject) => {
        const { emoji } = emojiObject;
        setInputValue(inputValue + emoji);
    };


    return (
        <>
            <div className=''>
                <EmojiPicker className="tw-emoji-picker" open={showEmojiPicker}
                    width={767}
                    height={400}
                    emojiStyle={"google"}
                    onEmojiClick={handleEmojiClick}
                />
            </div>
            <div className="flex p-2 font-medium rounded-b-lg bg-yellow-200 items-center ">

                <svg onClick={() => { setShowEmojiPicker(!showEmojiPicker) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-3 focus:outline-none transform transition duration-300 hover:scale-110 active:scale-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>

                <input
                    className="w-full h-full p-2 rounded-md"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                >
                </input>
                <button
                    className="ml-4 focus:outline-none transform transition duration-300 hover:scale-110 active:scale-90"
                    onClick={() => {
                        setShowEmojiPicker(false)
                        sendMessage()
                    }}
                >
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </button>



            </div>
        </>
    );
}
