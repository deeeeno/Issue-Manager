import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './router/Login'
import List from './router/List'
import LoginContext from './data/context';
import {useState} from 'react'
function App() {
  const [loginUser,setLoginUser] = useState({user:{}});
  return(
  
  <Router>
    <LoginContext.Provider value={{loginUser,setLoginUser}}>
      <Routes>
      
        <Route path="/" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
        
      </Routes>
      </LoginContext.Provider>
    </Router>
    
    );
}

export default App;
