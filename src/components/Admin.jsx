import axios from "axios";
import { useState } from "react";
export const Admin = () => {
  const [userData, setUserData] = useState({});
  function handelchange(e) {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  }

  axios
    .post("http://localhost:8080/employee", userData)
    .then(function (response) {
      console.log(response, "response");
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <form
      className="createEmployee"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userData);
      }}
    >
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={handelchange}
        id="name"
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={handelchange}
        id="empID"
      />
      <select name="title" onChange={handelchange} id="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={handelchange}
        id="salary"
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={handelchange}
        id="img"
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={handelchange}
        id="username"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handelchange}
        id="password"
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handelchange}
        id="tasks"
      />
      <select name="status" id="status" onChange={handelchange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handelchange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
