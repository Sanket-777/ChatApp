/* eslint-disable react/prop-types */
export default function Messages({ message }) {
    const name = message.substring(0, 4);
    return (
        <>
          
            <div className="bg-gray-100 rounded-lg shadow-lg m-2 relative">
                {/* Outer pinched corner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-8 border-l-8 border-gray-100"></div>
                <div className="flex items-center m-2">
                    <div className="flex-shrink-0 mr-3">
                        <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
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