const Navbar = () => {
    return (
        <div className="h-16 w-full bg-indigo-400 flex justify-start items-center">
            <ul className="flex justify-between items-center text-white">
                <a href="#" className="ml-16 mr-5"><img className="h-10 w-12" src="/logo.svg" /></a>
                <li className="bg-black p-2 px-3 rounded-xl mr-4">
                    <a href="#">Dashboard</a>
                </li>
                <li className="m-4 bg-black p-2 px-3 rounded-xl">
                    <a href="#">Language <i className="ml-2 fa-solid fa-caret-down"></i></a>
                </li>
            </ul>
            <ul className="ml-auto mr-16 flex justify-between items-center text-3xl">
                <a href="#"><i className="fa-solid fa-bell mr-8"></i></a>
                <a href="#"><i className="fa-solid fa-user"></i></a>
            </ul>
        </div>
    );
}

export default Navbar