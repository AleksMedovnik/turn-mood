import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ChatHOC from "./Chat/ChatHOC";
import HomeHOC from "./Home/HomeHOC";
import ProfileHOC from "./Profile/ProfileHOC";


const Main = () => {
    return (
        <div className='main'>
            <Routes>
                <Route exact path="/" element={<HomeHOC />} />
                <Route exact path="/home" element={<HomeHOC />} />
                <Route path="/profile" element={<ProfileHOC />} />
                <Route path="/chat" element={<ChatHOC />} />
            </Routes>
        </div>
    )
}
export default Main;