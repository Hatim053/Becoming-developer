import React, { useContext } from "react";
import UserContext from "../Contexts/userContext";

function Profile() {
const {user} = useContext(UserContext);
if(!user) return (<h1>Please Login</h1>)
return (
<h1>{user.username}</h1>
)

}
export default Profile;