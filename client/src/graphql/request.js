import {User,Issue,Comment} from '../data/structure';

const URL = '/graphql';

export const requestQuery = function(...querys){
    const query = `{
        ${querys.join('\n')}
    }` 
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(URL,
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({query})
            });
        const json = await res.json();
        resolve(json['data']);
    })
}

export const requestMutation = async function(...mutations){
    const mutation = `{
        ${mutations.join('\n')}
    }` 
    const res = await fetch(URL,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({mutation})
        });
    const json = await res.json();
    return json['data'];
}
