import { useEffect,useState } from "react";
import{Link} from "react-router-dom"
import axios from "axios";
export const EmployeeList = () => {
  const [userList,setUserList] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then((employee)=>{
      setUserList(employee.data)
    })
    
},[])

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {userList.map((e,i)=>(
        <Link to={`/employees/${e.id}`}>
          <div className="employee_card" key={`empCard-${i}`} 
         >
          <img className="employee_image" key={`empImage-${i}`} />
          <span className="employee_name" key={`empName-${i}`}>{e.employee_name} </span>
          <span className="employee_title" key={`empTitle-${i}`} >{e.title}</span>
        </div>
        </Link>
          ))}
      
    </div>
  );
};
