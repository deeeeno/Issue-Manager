import {useState,useEffect} from 'react';
import Popup from './Popup';

import {requestQuery} from '../graphql/request';
import {projectsAll} from '../graphql/query';
function Header({user}){
    const [isCreatePop,setCP] = useState(false);
    const [projects,setProjects] = useState([]);

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
    return(
        <div>
            <button>Activity</button>
            <button>Projects</button>
            <button onClick={openCreateIssuePopup}>Create</button>
            <input placeholder={'hihi'}></input>
            <button>search</button>
            <Popup open={isCreatePop} close={closeCreateIssuePopup} header={'test'}>
                <form onSubmit={createIssue}>
                <div>
                프로젝트 : <select>
                    {
                        projects.map((project,idx)=><option key={idx}>{project.name}({project.symbol})</option>)
                    }
                </select>
                </div>
                <div>
                Asignee: <input></input>
                </div>
                <div>
                Reporter: {user.nickName}
                </div>
                <div>
                제목 : <input></input>
                </div>
                <div>
                내용 : <input></input>
                </div>
                <button type="submit">Create</button>
                </form>
            </Popup>
        </div>
    )
}
export default Header;