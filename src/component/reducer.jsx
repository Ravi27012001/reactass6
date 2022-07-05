import Student from "./student";
import AddStudent from "./addstudent";
import Edit from "./edit";

const Reducer = (state="",action)=>{
    switch(action){
        case AddStudent : return <AddStudent/>
        case Edit : return<Edit/>
        default : return<Student/>
    }
}
export default Reducer;