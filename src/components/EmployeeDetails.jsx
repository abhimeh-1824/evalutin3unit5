import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

export const EmployeeDetails = () => {
  const {id} = useParams()
  const [employe, setemploye] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then((employee)=>{
      console.log(employee.data)
      setemploye(employee.data)
      console.log(employe,"emploey")
    })
    
},[])
  
  return (
    <div className="user_details">
      <img className="user_image" />
      <h4 className="user_name">{employe.username}</h4>
      <span className="user_salary">{employe.username}1000$</span>
      <span className="tasks">
       <li className="task">{employe.tasks} </li>
      </span>
      Status: <b className="status">{employe.status}</b>
      Title: <b className="title">{employe.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
