import {useState,useEffect, useRef} from 'react';
import Popup from './Popup';

import {requestQuery} from '../graphql/request';
import {projectsAll,userByKeyword} from '../graphql/query';
function Header({user}){
    const [isCreatePop,setCP] = useState(false);
    const [projects,setProjects] = useState([]);
    const [asignee,setAsignee] = useState('');
    useEffect(()=>{
        requestQuery(projectsAll('name','symbol'))
        .then(({projectsAll})=>{
            setProjects(projectsAll);
        })
    },[])
    const openCreateIssuePopup = ()=>{
        setCP(true);
    }
    const closeCreateIssuePopup = ()=>{
        setCP(false);
    }
    const createIssue = ()=>{
        
    }
    const userSearchOnClick = (e)=>{
        requestQuery(userByKeyword(asignee,'*'))
        .then(({userByKeyword})=>{
            console.log(userByKeyword);
        })
    };
    return(
        <div>
            <button>Activity</button>
            <button>Projects</button>
            <button onClick={openCreateIssuePopup}>Create</button>
            <input placeholder={'hihi'}></input>
            <button>search</button>
            <Popup open={isCreatePop} close={closeCreateIssuePopup} header={'Issue'}>
                <form onSubmit={createIssue}>
                <div>
                프로젝트 : <select>
                    {
                        projects.map((project,idx)=><option key={idx}>{project.name}({project.symbol})</option>)
                    }
                </select>
                </div>
                <div>
                Asignee: <input onChange={(e)=>setAsignee(e.target.value)}></input>
                <button type="button" onClick={userSearchOnClick}>검색</button>
                </div>
                <div>
                Reporter: <input value={user.nickName} readOnly={true}></input>
                </div>
                <div>
                제목 : <input></input>
                </div>
                <div>
                내용 : <textarea></textarea>
                </div>
                <button type="submit">Create</button>
                </form>
            </Popup>
        </div>
    )
}
export default Header;