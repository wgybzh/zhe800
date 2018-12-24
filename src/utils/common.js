<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 2af09fb48b1bb148a569e003261d20589989c6cc
// 7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?
// 7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?
const getPic = (url)=>{
    let domain="https://fuss10.elemecdn.com/";
    let str = "";
    if(url.slice(-4) == "jpeg"){
        str =domain+url[0]+"/"+url[1]+url[2]+"/"+url.slice(3)+".jpeg";
    }else{
        str =domain+url[0]+"/"+url[1]+url[2]+"/"+url.slice(3)+".png";
    }
   return str;
}

export default {
    getPic
<<<<<<< HEAD
=======
=======
// 7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?
// 7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?
const getPic = (url)=>{
    let domain="https://fuss10.elemecdn.com/";
    let str = "";
    if(url.slice(-4) == "jpeg"){
        str =domain+url[0]+"/"+url[1]+url[2]+"/"+url.slice(3)+".jpeg";
    }else{
        str =domain+url[0]+"/"+url[1]+url[2]+"/"+url.slice(3)+".png";
    }
   return str;
}

export default {
    getPic
>>>>>>> wsp
>>>>>>> 2af09fb48b1bb148a569e003261d20589989c6cc
}