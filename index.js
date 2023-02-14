var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function akanName (gender,day,month,year){
    var gen = parseInt(gender);
    var mwaka = parseInt(year);
    var mwezi = parseInt(month);
    var siku = parseInt(day);
    cc = year.slice(0,1);
    yy = year.slice(2,3);
    dayWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mwezi+1)/10)) + siku )% 7;







}