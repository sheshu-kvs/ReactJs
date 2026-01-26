function NavBar() {
    return <div className="absolute top-10 left-0 right-0 z-10 bottom-0 text-white ">
        <div className="flex justify-between items-center px-6">
            <div className="text-3xl">Ev-Olution</div>
            <ul className="flex gap-10 items-center cursor-pointer">
                <li className="list-none">Home</li>
                <li className="list-none">About</li>
                <li className="list-none"> Explore</li>
                <li className="list-none bg-white border-4  text-black p-2 rounded-3xl">Contact Us</li>
            </ul>
        </div>

    </div>
}

export default NavBar;