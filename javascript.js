///timer calculator
var mini=1;
var a=1;
let sec=0;
let ms=0;
var timer;
var score= new Array(6);
var noOfScores=0;

//Copies the localStorage to score array
for(let i=0;i<localStorage.length || i<0;i++)
  {
    score[i]=localStorage.getItem(i);
    noOfScores++;
  }
function update_local()
{
    for(let i=0;i<noOfScores;i++)
    {
      localStorage.setItem(i,score[i]);
    }
}
function update_score()
  {
    if(noOfScores<5)
    {
      score[noOfScores]=extract_score();
      noOfScores++;
      score.sort();

    }
    else {
      score[noOfScores]=extract_score();
      score.sort();
    }
    update_local();

  }
  function extract_score()
      {
        var b=document.getElementById('time').innerHTML; 
        return b;
      }
//timer calculator  
function stopwatch()
{   sec=0;
    ms=0;
    ms++
    if(ms/1000 === 1){
        ms =0;
        sec++;
       
    }
    
    document.getElementById("time").innerHTML= "TIME : " +sec+":"+ms;

}
//start stopwatch
function startstop(){
    interval=window.setInterval(stopwatch,1);
}
//stop stopwatch
function stoptimer(){
    clearInterval(interval);
}
//clea score
function clear_timer(){
    stoptimer();
    document.getElementById("time").innerHTML= "TIME : " +0+":"+0;
}
function print_scores()
{
  document.getElementById('btn2').innerHTML="clear score";
  document.getElementById('btn2').onclick=clear_score;
  elem=document.getElementById('last5Scores');
  var a='Top 5 scores </br>';

  for(let i=0;i<noOfScores;i++)
  {
    a=a+ score[i] +'</br>'

  }
  elem.innerHTML=a;
}
function clear_score()
{
  elem=document.getElementById('btn2');
  elem.innerHTML="Print scores";
  elem.onclick=print_scores;
  document.getElementById('last5Scores').innerHTML="";
}
///timer calculator done 
function onstart(){
    clear_timer();
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
function increase(id){
    
    var x;
    var y;
    var z;
    x = document.getElementById(id).value;
    z=parseInt(x);
   var doc=document.getElementById(id);
    if (Number(doc.innerHTML)==a)
    {
        if((Number(doc.innerHTML)+ 24 ) >32){ 
            doc.innerHTML=" ";
        }
        else{
            y=Number(doc.innerHTML) + 24;
           doc.innerHTML=y;

        }
        a++;
        if(a==33)
        {
            stoptimer();
            on();
            update_score();

        }
    }
   
  

}
