import {useSearchParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

import {issuesByReporterSeq,userBySeq} from '../graphql/query';
import {requestQuery} from '../graphql/request'

import Header from '../components/Header';
import Popup from '../components/Popup';
import IssueDetail from '../components/IssueDetail';

function List(){
    const [params,setParams] = useSearchParams();
    const [issues,setIssues] = useState([]);
    const [user,setUser] = useState({});

    useEffect(()=>{
        const userseq = params.get('userseq');
        requestQuery(issuesByReporterSeq(userseq,'*'),userBySeq(userseq,'*'))
        .then(({issuesByReporterSeq,userBySeq,projectsAll})=>{
            setIssues(issuesByReporterSeq);
            setUser(userBySeq);
        })
    },[]);

    return(
    <div>
        <Header user={user}></Header>
        <h1>LIST</h1>
        {issues.map((issue,idx)=>{
            return(
                <div key={idx}>
                    <h3>{issue.title}</h3>
                    <span>{issue.description}</span> 
                </div>
            )})
        }
    </div>)
}
export default List;