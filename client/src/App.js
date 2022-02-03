import logo from './logo.svg';
import './App.css';
import {requestQuery} from './graphql/request';
import {userById} from './graphql/query';
requestQuery(userById('dino','id','password','nickName')).then(data=>console.log(data));
function App() {

  return (
    <div>
      
    </div>
  );
}

export default App;
