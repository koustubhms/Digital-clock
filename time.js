function updateTime(){var mydate=new Date();
    var hr=mydate.getHours();
    var min=mydate.getMinutes();
    var sec=mydate.getSeconds();
    var ses;
    if(hr>=12){
        document.getElementById('hour').innerHTML=hr-12;
    }
    
    document.getElementById('minute').innerHTML=min;
    document.getElementById('second').innerHTML=sec;
    if(hour>=12){
       ses=document.getElementById('session').innerText=PM;
    }else{
       ses= document.getElementById('session').innerHTML=AM;
    }
}
setInterval(updateTime(),10);

