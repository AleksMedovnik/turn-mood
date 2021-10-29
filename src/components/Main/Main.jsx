import { Route } from "react-router";
import ChatHOC from "./Chat/ChatHOC";
import HomeHOC from "./Home/HomeHOC";
import ProfileHOC from "./Profile/ProfileHOC";


const Main = () => {
    return (
        <div className='main'>
            <Route exact path={["/", "/home"]} render={() => <HomeHOC />} />
            <Route path="/profile" render={() => <ProfileHOC />} />
            <Route path="/chat" render={() => <ChatHOC />} />
        </div>
    )
}
export default Main;