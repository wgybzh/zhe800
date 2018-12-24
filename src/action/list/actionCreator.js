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

export const getList_action = (val)=>({
    type:"GET_List",
    payload:new Promise(resolve=>{
        // eslint-disable-next-line default-case
        let url="";
        // eslint-disable-next-line default-case
        switch(val){
            case 0:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=383781_b,378468_b,381517_b,379383_b,378500_b,381926_b,381299_b,383512_b,381641_b,383284_b,379356_b,383471_b,383914_b,380327_b,382817_b,379585_b,378480_b,379349_b,383841_b,379367_b&_=1545306919823";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 1:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=381947_b,381350_b,383371_b,379682_b,383652_b,383192_b,380009_b,356046_b,350648_b,380797_b,382904_b,380804_b,379968_b,379596_b,382504_b,383189_b,379766_b,381621_b,379655_b,381396_b&_=1545313564575";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 2:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=383936_b,381697_b,382225_b,382095_b,382604_b,382475_b,383735_b,383195_b,381696_b,383220_b,382623_b,379014_b,379794_b,383575_b,379705_b,383163_b,383653_b,383969_b,382616_b,380697_b&_=1545313640032";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 3:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=379807_b,382217_b,382716_b,381017_b,382065_b,382022_b,382023_b,382064_b,379395_b,381580_b,382054_b,381629_b,382691_b,382063_b,379698_b,381010_b,382059_b,382452_b,379916_b,380674_b&_=1545313686104";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 4:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=382152_b,382969_b,382890_b,382871_b,382874_b,382162_b,381708_b,382167_b,382895_b,383327_b,382597_b,382164_b,383464_b,383742_b,383767_b,383951_b,383328_b,383326_b,383380_b&_=1545313773440";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 5:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=382702_b,382752_b,378236_b,383237_b,379675_b,382454_b,373241_b,382460_b,382112_b,381679_b,382783_b,381196_b,375651_b,382114_b,382040_b,382572_b,377666_b,381488_b,381674_b,381942_b&_=1545314234988";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 6:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=382490_b,380901_b,380515_b,379528_b,382520_b,379299_b,380775_b,381088_b,380789_b,381666_b,382510_b,380788_b,380915_b,379524_b,382501_b,379611_b,379602_b,382518_b,378102_b,379534_b&_=1545314290650";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
            break;
            case 7:
             url = "https://m.api.zhe800.com/list/detail?client_type=3&channel=30&vtype=brandIndex&ids=381370_b,383090_b,383093_b,380304_b,383020_b,383340_b,380574_b,383021_b,383392_b,383557_b,380353_b,380653_b,380648_b,383459_b,380330_b,383091_b,380312_b,383013_b,380345_b,380659_b&_=1545314332719";
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               resolve(data)  
            })
        }
        
    })
})




//进入购物页面
export const inShop_action = (val)=>({
   type:"INSHOP_DATA",
   value:val,
   payload:new Promise(resolve=>{
       let url = "https://m.zhe800.com/mz/brand/index/tag_new?tagid=all&title=&subtag=true";
       fetchJsonp(url)
       .then(res=>res.json())
       .then((data)=>{
           //resolve(data.brandTag[0].categories)
       })
   })
})



