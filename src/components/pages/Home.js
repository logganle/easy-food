import React, {useState} from 'react';
import NavBar from "../navbar";
import Sidebar from "../sidebar";
import InfoSection from "../info_section";

const Home = () => {
    const [isSideBarOpen, setSideBarStatus] = useState(false);
    const toggle = () => setSideBarStatus(!isSideBarOpen);
    return (
        <div>
            <Sidebar isOpen={isSideBarOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <InfoSection infoSectionList={[{id: 1, name: 'logan', age: 25}]}/>
        </div>
    );
};

export default Home;
