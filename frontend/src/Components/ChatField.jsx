export default function ChatField({ inputValue, setInputValue, sendMessage }) {
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          sendMessage(); // Trigger sendMessage function on Enter key press
        }
      };

    return (
        <div className="flex p-2 font-medium rounded-b-lg bg-yellow-200">
            <input
                className="w-full h-full p-2 rounded-md"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button
                className="ml-4 focus:outline-none transform transition duration-300 hover:scale-110 active:scale-90"
                onClick={sendMessage} 
            >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>
            </button>
        </div>
    );
}
