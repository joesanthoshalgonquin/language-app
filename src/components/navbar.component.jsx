import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="h-16 w-full bg-indigo-400 flex justify-start items-center">
            <ul className="flex justify-between items-center text-white">
                <Link to="/" className="ml-16 mr-5"><img className="h-10 w-12" src="/logo.svg" /></Link>
                <li className="bg-black p-2 px-3 rounded-xl mr-4">
                    <button onClick={() => navigate("/")}>Dashboard</button>
                </li>
                <li className="m-4 bg-black p-2 px-3 rounded-xl">
                    <button>Language <i className="ml-2 fa-solid fa-caret-down"></i></button>
                </li>
            </ul>
            <ul className="ml-auto mr-16 flex justify-between items-center text-3xl">
                <i className="fa-solid fa-bell mr-8 text-white cursor-pointer"></i>
                <i onClick={() => navigate("/user")} className="fa-solid fa-user text-white cursor-pointer"></i>
            </ul>
        </div >
    );
}

export default Navbar