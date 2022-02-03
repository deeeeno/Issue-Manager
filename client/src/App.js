import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './router/Login'
import List from './router/List'
function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </Router>;
}

export default App;
