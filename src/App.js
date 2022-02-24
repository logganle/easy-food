import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./components/pages/Home";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navbar";
import React, {useState} from "react";
import CategoryPage from "./components/pages/CategoryPage";
import {Provider} from "react-redux";
import store from "./components/store";
import SearchPage from "./components/pages/SearchPage";
import MealDetailPage from "./components/pages/MealDetailPage";

function App() {
    const [isSideBarOpen, setSideBarStatus] = useState(false);
    const toggle = () => setSideBarStatus(!isSideBarOpen);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Sidebar isOpen={isSideBarOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/:c' element={<Home/>}/>
                    <Route path='/categories' element={<CategoryPage/>}/>
                    <Route path='/search' element={<SearchPage/>}/>
                    <Route path='/meals/:id' element={<MealDetailPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
