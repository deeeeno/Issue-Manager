import {User,Issue,Comment} from '../data/structure';

const URL = 'http://localhost:4000';

export const requestQuery = async function(...qs){
    const query = `{
        ${qs.join('\n')}
    }` 
    const res = await fetch(URL,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({query})
        });
    const json = await res.json();
    return json['data'];

}
