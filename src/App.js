import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeListing from './EmployeeListing';
import EmpDeatails from './EmpDetails';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
// import Name from './Name';
// import Password from './Password';
//import Email from './Email'
import Register from './Register'



function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
    <Register/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing/>}/>
          <Route path='/employee/create' element={<EmpCreate/>}/>
          <Route path='/employee/details/:empid' element={<EmpDeatails/>}/>
          <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
        </Routes>
     </BrowserRouter> */}
    </div>
  );
  
}

export default App;
