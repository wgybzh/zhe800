
import fetchJsonp from 'fetch-jsonp'
export const getData_action = ()=>({
    type:"GET_DATA",
    payload:new Promise(resolve=>{
        let url = "https://m.zhe800.com/mz/brand/index/tag_new?tagid=all&title=&subtag=true";
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data.brandTag[0].categories)
            console.log(data.brandTag[0].categories)
            
        })
    })
})

