import {useSearchParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

import {issueByUserSeq} from '../graphql/query';
import {requestQuery} from '../graphql/request'

import Popup from '../components/Popup';
import IssueDetail from '../components/IssueDetail';

function List(){
    const [params,setParams] = useSearchParams();
    const [issues,setIssues] = useState([]);
    const [popupOpen,setPopupOpen] = useState(false);

    useEffect(()=>{
        const userseq = params.get('userseq');
        requestQuery(issueByUserSeq(userseq,'*')).then(({issueByUserSeq})=>{
            setIssues(issueByUserSeq);
        })
    },[]);
    const createIssue = ()=>{
        setPopupOpen(true);
    }
    const popupClose = ()=>{
        setPopupOpen(false);
    }
    return(
    <div>
        <button onClick={createIssue}>Create</button>
        <h1>LIST</h1>
        {issues.map((issue,idx)=>{
            return(
                <div key={idx}>
                    <h3>{issue.title}</h3>
                    <span>{issue.description}</span> 
                </div>
            )})
        }
        <Popup open={popupOpen} close={popupClose} header={'test'}>
            <IssueDetail/>
        </Popup>
    </div>)
}
export default List;