var x=[0,1,840,188,301,400,93,595,101,749,133,376,721,147,109,737,785,899,629,652,365,213,608,229,314,937,112,782,587,772,594,484,882,827,17,69,317,982,702,45,358,923,5,500,628,608,284,26,526,759,568,6,344,138,230,920,553,697,193,960,547,360,670,427,731,981,533,218,13,832,904,23,111,832,853,596,607,637,916,774,500,450,582,371,615,9,206,257,280,363,429,144,804,536,38,501,155,609,56,582,396,741,66,327,469,50,794,858,369,779,913,534,411,696,402,816,993,722,91,598,141,524,90,816,287,907,940,185,75,586,242,339,254,260,157,188,303,583,640,124,94,250,570,202,653,609,717,945,546,183,323,206,34,378,967,126,63,277,323,553,254,422,203,33,641,313,823,430,503,685,685,623,550,611,123,647,868,475,559,863,213,967,927,57,957,858,667,914,286,665,497,929,736,320,884,703,756,407,514,498,965];
for(let i=1;i<=181;i++){const d=new Date();
var date=d.getUTCDate();
var day=d.getUTCDay()+1;
var year=d.getUTCFullYear();
var month=d.getUTCMonth()+1;var hour=d.getUTCHours();
var min=d.getMinutes();if(min<30){min=1;}else{min=2;}
var xx=day+year*month*date;xx=Math.pow(xx,hour*min);
xx=xx*x[i];if(i == 6 || i == 8 || i == 79 || i == 104 || i == 4 || i == 5 || i == 35 || i == 77 || i == 1 || i == 18 || i == 96){xx=xx%27;xx+=65;}else{xx=xx%83;xx+=8;}


const as="percent-bar-"+i;
const asd="percent-txt-"+i;
var percentTxt=document.getElementById("percent-txt-"+i);
var bar=document.getElementById("percent-bar-"+i);
const bartext=document.getElementById("card-title"+i);
percentTxt.innerHTML=xx+"%";$("#percent-bar-"+i).attr("aria-valuenow",xx).css("width",xx+"%");
if(xx<30){bar.classList.add("red");}else if(xx>70){bar.classList.add("green");}else{bar.classList.add("yellow");
}}