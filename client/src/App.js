import logo from './logo.svg';
import './App.css';
import {userById,requestQuery} from './graphql/request';

requestQuery(userById('dino','id','password','nickName')).then(data=>console.log(data));
function App() {

  return (
    <div>
      
    </div>
  );
}

export default App;
