import { Routes, Route } from "react-router-dom";
import UserProfile from './UserProfile';

const Profile = props => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<UserProfile args={props}/>} />
                <Route path=":id" element={<UserProfile args={props}/>} />
            </Routes>
        </div>
    )
}
export default Profile;