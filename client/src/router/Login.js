import {userById} from '../graphql/query';
import {requestQuery} from '../graphql/request';

function Login(){
    const islogin = function(){
        const id = document.querySelector("input[name='id']").value;
        const pwd = document.querySelector("input[name='pwd']").value;
        
        requestQuery(userById(id,'password','seq')).then(({userById})=>{
            console.log(userById);
            if(!userById){
                alert(`there is no id[${id}]`)
            }else if(pwd === userById['password']){
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