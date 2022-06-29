import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./detail";

const Student = () => {
  const[student] = useContext (store)
  console.log(useContext(store));
  return (
    <div>
     <h1 className='class2'>Student Details</h1>
        <Link to ="/addstudent" className='class4'><button style={{fontSize:"50px",backgroundColor:"rgb(236, 221, 71)",borderRadius:"20px"}}>Add Student</button></Link>
           <table className='class5' border={1}> 

      
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>
          </tr>
        </thead>

        <tbody>
          {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td><Link to={`/edit/${student.id}`}>Edit</Link></td>

</tr>


      ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
