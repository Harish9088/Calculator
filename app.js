var container=document.querySelectorAll("button")
var box=[];

container.forEach((item)=>{
    
     item.addEventListener("click",(e)=>{
         var value=item.value;
        box.push(value);
        var str=box.join();
    var res=str.replace(/,/g,"");
        document.querySelector(".result").innerHTML=res;
         })
         
    })
function resButton(){
    var str=box.join();
    var res=str.replace(/,/g,"");
    // console.log(eval(res));
    
    var a=document.querySelector(".result").value.replace("",eval(res))
    document.querySelector(".result").outerHTML='<button id="result">'+a+'</button>';
   console.log(a);
 }
