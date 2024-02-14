export default function Messages({ message }) {
    console.log(message + "In Messages")
    const name = message.substring(0, 4);
    return (
        <>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg m-2">
                <div className="flex items-center m-2 ">
                    <div className="flex-shrink-0 mr-3 ">
                        <div className="h-9 w-9 rounded-full mr-4 bg-gray-300 flex items-center justify-center">
                            {name[0]}
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{name}</div>
                        <div className="text-sm text-gray-700">{message.substring(5)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}