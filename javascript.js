///timer calculator
let sec=0;
let ms=0;
let status ="stopped";
function stopwatch()
{
    ms++
    if(ms/1000 === 1){
        ms =0;
        sec++;
       
    }
    
    document.getElementById("time").innerHTML= "TIME : " +sec+":"+ms;

}
function startstop(){
    interval=window.setInterval(stopwatch,1);
}
///timer calculator done 
function onstart(){
    off();
    Assignnumb();
    startstop();

}

///overlay on tiles starts
function on(){
    document.getElementById("overlay").style.display="block";

}
function off(){
    document.getElementById("overlay").style.display="none";
}
///overlayer on tiles ends


//generate random number in tiles?//
document.addEventListener("DOMContentLoaded", function(event) { 
    Assignnumb();
  });
function Assignnumb()
{  
    function GenerateRandomNumber(min,max){
        let st1= max-min+1;
        let st2=Math.random()*st1;
        let a= Math.floor(st2)+min;
        return a ;
    }
 
    
function createArrayofnumber( start,end){
    let myarray =[];
    for (let i=start ; i<=end; i++){
        myarray.push(i);
    }
    return myarray;
}
let numbersArray = createArrayofnumber(1,24);


for(var i=1; i<25;i++){
    
        let randomindex =GenerateRandomNumber(0,numbersArray.length-1);
        let randomN  = numbersArray[randomindex];
        numbersArray.splice(randomindex,1);
        let ab=randomN;
    

        document.getElementById("bt_"+ i).innerHTML=ab;
        document.getElementById("bt_"+ i).value=ab;

    }
}
///generation of random number in tiles ends

///onclick increase num 
function increase(clicked_id){
    
    var x;
    var y;
    var z;
    x = document.getElementById(clicked_id).value;
    z=parseInt(x);
    
    if(z>72){
        document.getElementById(clicked_id).innerHTML=" ";
        
    }
    else{
        y=z+24;
        document.getElementById(clicked_id).innerHTML=y;
    }
  

}
