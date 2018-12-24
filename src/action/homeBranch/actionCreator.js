import fetchJsonp from 'fetch-jsonp'
export const getData_action = ()=>({
    type:"GET_DATA",
    payload:new Promise(resolve=>{
        let url = "https://m.zhe800.com/mz/brand/index/tag_new?tagid=all&title=&subtag=true";
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data.brandTag[0].categories)
            //console.log(data.brandTag[0].categories)        
        })
    })
})

export const getDataId_action = (id)=>({
    type:"GET_DATA_ID",
    payload:new Promise(resolve=>{
        let url = "https://m.zhe800.com/mz/api/category_banner?tagid="+id;
        if(id){
            url = "https://m.zhe800.com/mz/api/category_banner?tagid="+id;
           
            
        }else{
            url = "https://m.zhe800.com/mz/api/category_banner?tagid=1002";
        }
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
          // console.log(data)
            
        })
    })
})
