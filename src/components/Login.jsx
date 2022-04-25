import {useContext} from "react"
import axios from "axios";
import {useState} from "react"
import {AuthContext} from "../AuthenContext/Authentication"
import { useNavigate } from "react-router-dom"
export const Login = () => {
  //  use reqres to log user in.
  const {handelAuth} = useContext(AuthContext)
const [userdata, setuserdata] = useState({})
const navigate = useNavigate()
function handel (e)
{
  const {id,value} = e.target
  setuserdata({...userdata, [id]:value})
}

  axios
    .post("https://reqres.in/api/login",userdata)
    .then(function (response) {
      console.log(response, "response");
      handelAuth(true)
      navigate("/")

    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
         onChange={handel}
         id = "user"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        id="pass"
        onChange={handel}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
