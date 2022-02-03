import {useSearchParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

import {issueByUserSeq} from '../graphql/query';
import {requestQuery} from '../graphql/request'
function List(){
    const [params,setParams] = useSearchParams();
    const [issues,setIssues] = useState([]);
    useEffect(()=>{
        const userseq = params.get('userseq');
        requestQuery(issueByUserSeq(userseq,'*')).then(({issueByUserSeq})=>{
            setIssues(issueByUserSeq);
        })

    },[])
    return(
    <div>
        <h1>LIST</h1>
        {issues.map((issue)=>{
            return(
                <div>
                    <h3>{issue.title}</h3>
                    <span>{issue.description}</span> 
                </div>
            )})
        }
    </div>)
}
export default List;