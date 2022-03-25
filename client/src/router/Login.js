import {userById} from '../graphql/query';
import {requestQuery} from '../graphql/request';
import {useContext} from 'react';
import LoginContext from '../data/context';
function Login(){
    const {loginUser,setLoginUser} = useContext(LoginContext)
    const islogin = function(){
        const id = document.querySelector("input[name='id']").value;
        const pwd = document.querySelector("input[name='pwd']").value;
        
        requestQuery(userById(id,'*')).then(({userById})=>{
            if(!userById){
                alert(`there is no id[${id}]`)
            }else if(pwd === userById['password']){
                setLoginUser({...loginUser,user:userById})

                window.location.href = `/list?userseq=${userById['seq']}`;
            }else{
                alert('wrong password');
                window.location.reload();
            }
        })
    }
    return(
        <div>
            <div>
                <div>
                    ID : <input name="id"></input>
                </div>
                <div>
                    PWD : <input name="pwd"></input>
                </div>
                <div>
                    <button onClick={islogin}>Login</button>
                </div>
            </div>
        </div>
    );
}
export default Login;