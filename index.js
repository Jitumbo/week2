var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function akanName (gender,day,month,year){
    var gen = gender;
    var mwaka = parseInt(year);
    var mwezi = parseInt(month);
    var siku = parseInt(day);
    var cc = Math.floor(mwaka/100) ;//+ ((mwaka%100) ? 1 : 0);
    var yy = parseInt((mwaka/100).toString().split('.')[1]);
    var jina;
    
    //  This formula didnt work for me------> var d = (((cc/4)-2*cc-1)+((5*mwaka/4))+((26*(mwezi+1)/10))+siku)%7;
    var d = Math.round(d);
    var f = new Date(mwaka, --mwezi, siku);
    var dayWeek = f.getDay();
    //alert("birthday  formula evaluates to "+dayWeek+" translating to "+dayOfWeek[dayWeek]);
    //alert("birthday  formula evaluates to "+f+" translating to "+dayOfWeek[f.getDay()]);

    if (dayWeek === 0 && gen === "male" ){
        jina = maleNames[0];
    } else if (dayWeek === 0 && gen === "female"){
        jina = femaleNames[0];
    } else if (dayWeek === 1 && gen === "male"){
        jina = maleNames[1];;
    } else if (dayWeek === 1 && gen === "female"){
        jina = femaleNames[1];
    } else if (dayWeek === 2 && gen === "male") {
        jina = maleNames[2];
    } else if (dayWeek === 2 && gen === "female") {
        jina = femaleNames[2];
    } else if (dayWeek === 3 && gen === "male") {
        jina = maleNames[3];
    } else if (dayWeek === 3 && gen === "female") {
        jina = femaleNames[3];
    } else if (dayWeek === 4 && gen === "male") {
        jina = maleNames[4];
    } else if (dayWeek === 4 && gen === "female") {
        jina = femaleNames[4];
    } else if (dayWeek === 5 && gen === "male") {
        jina = maleNames[5];
    } else if (dayWeek === 5 && gen === "female") {
        jina = femaleNames[5];
    } else if (dayWeek === 6 && gen === "male") {
        jina = maleNames[6];
    } else if (dayWeek === 6 && gen === "female") {
        jina = femaleNames[6];
    } else {
        jina = "Omollo Kutoka Bondo";
    }

    return jina;







}