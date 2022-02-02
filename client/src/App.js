import logo from './logo.svg';
import './App.css';
import {userById,requestQuery} from './graphql/request';

const data = requestQuery(userById('dino','id','password','nickName'));
console.log(data);
function App() {

  return (
    <div>
      
    </div>
  );
}

export default App;
