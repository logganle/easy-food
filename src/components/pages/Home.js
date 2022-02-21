import React, {useState} from 'react';
import NavBar from "../navbar";
import Sidebar from "../sidebar";

const Home = () => {
    const [isSideBarOpen, setSideBarStatus] = useState(false);
    const toggle = () => setSideBarStatus(!isSideBarOpen);
    return (
        <div>
            <Sidebar isOpen={isSideBarOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
        </div>
    );
};

export default Home;
