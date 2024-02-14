
export default function Header({ people }) {
    return (
        <>
            <div className="flex justify-between	 p-3 font-medium rounded-t-lg bg-yellow-200">
                <label className=" ml-5 text-2xl">Chat Application</label>
                <label className=" ml-5 text-2xl text-slate-400">People in Room :{people}</label>

            </div>

        </>
    )
}