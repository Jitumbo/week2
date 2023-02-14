var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function akanName (gender,day,month,year){
    var gen = parseInt(gender);
    var mwaka = parseInt(year);
    var mwezi = parseInt(month);
    var siku = parseInt(day);
    var cc = year.toString().slice(0,1);
    var yy = year.toString().slice(2,3);
    var jina;

    dayWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mwezi+1)/10)) + siku )% 7;

    if (dayWeek === 0 && gen === "male" ){
        jina = "Kwasi";
    } else if (dayWeek === 0 && gen === "female"){
        jina = "Akosua";
    } else if (dayWeek === 1 && gen === "male"){
        jina = "Kwadwo";
    } else if (dayWeek === 1 && gen === "female"){
        jina = "Adwoa";
    } else if (dayWeek === 2 && gen === "male") {
        jina = "Kwabena";
    } else if (dayWeek === 2 && gen === "female") {
        jina = "Abenaa";
    } else if (dayWeek === 3 && gen === "male") {
        jina = "Kwaku";
    } else if (dayWeek === 3 && gen === "female") {
        jina = "Akua";
    } else if (dayWeek === 4 && gen === "male") {
        jina = "Yaw";
    } else if (dayWeek === 4 && gen === "female") {
        jina = "Yaa";
    } else if (dayWeek === 5 && gen === "male") {
        jina = "Kofi";
    } else if (dayWeek === 5 && gen === "female") {
        jina = "Afua";
    } else if (dayWeek === 6 && gen === "male") {
        jina = "Kwame";
    } else if (dayWeek === 6 && gen === "female") {
        jina = "Ama";
    } else {
        jina = "Omollo Kutoka Bondo";
    }

    return jina;







}