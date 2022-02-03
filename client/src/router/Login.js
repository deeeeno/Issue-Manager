import {userById} from '../graphql/query';
import {requestQuery} from '../graphql/request';

function Login(){
    const islogin = function(){
        const id = document.querySelector("input[name='id']").value;
        const pwd = document.querySelector("input[name='pwd']").value;
        console.log(`id:${id}   pwd:${pwd}`);
        
        requestQuery(userById(id,'password','seq')).then(({userById})=>{
            console.log(userById);
            if(!userById){
                console.log('no no');
                alert(`there is no id[${id}]`)
            }else if(pwd === userById['password']){
                console.log('hihi');
                window.location.href = `/list?userseq=${userById['seq']}`;
            }else{
                console.log('wrong');
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