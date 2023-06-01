var rangeLabel = document.getElementById("range-label");
var experience = document.getElementById("experience");

function change() {
rangeLabel.innerText = experience.value + "K";
}

function getData()
{
    //gettting the values
    var family = document.getElementById("family").value;
    var fn= document.getElementById("fn").value; 
    var ln= document.getElementById("ln").value; 
    
    var weight= document.getElementById("weight").value; 
    var height= document.getElementById("height").value; 
    var nation= document.getElementById("nation").value; 
    var state= document.getElementById("state").value; 
    var level= document.getElementById("level").value; 
    //saving the values in local storage
    localStorage.setItem("txtValue", family);
    localStorage.setItem("txtValue1", fn);
    localStorage.setItem("txtValue2", ln);
   
    localStorage.setItem("txtValue3", weight);   
    localStorage.setItem("txtValue4", height);  
    localStorage.setItem("txtValue5", nation);  
    localStorage.setItem("txtValue6", state);  
    localStorage.setItem("txtValue7", level);  
     

    var male = document.getElementById("male");  
  var female = document.getElementById("female"); 
  var others = document.getElementById("others"); 
  if(male.checked == true){
    localStorage.setItem("txtValue10", male);  

  } else if(female.checked == true){
    localStorage.setItem("txtValue10", female);  
  } else {
    localStorage.setItem("txtValue10", others);  
  }
  var general = document.getElementById("general"); 
  var obc = document.getElementById("obc");
  var st = document.getElementById("sc/st");  
  var ews = document.getElementById("ews"); 
  if(general.checked == true){
    localStorage.setItem("txtValue13", general);  

  } else if(obc.checked == true){
    localStorage.setItem("txtValue13", obc);  
  } 
  else if(st.checked == true){
    localStorage.setItem("txtValue13", st); 
  }else {
    localStorage.setItem("txtValue13", ews);  
  }
  var mc = document.getElementById("MC");  
  var rrw = document.getElementById("RRW"); 
  var cic = document.getElementById("CIC");  
  var pac = document.getElementById("PAC"); 

  if(mc.checked == true){
    localStorage.setItem("txtValue16", dob);  

  } else if(rrw.checked == true){
    localStorage.setItem("txtValue16", rrw);  
  } 
  else if(cic.checked == true){
    localStorage.setItem("txtValue16", cic); 
  }else {
    localStorage.setItem("txtValue16", pac);  
  }
  

}
function ageCalculator() {  
    var userinput = document.getElementById("dob").value;  
    var dob = new Date(userinput);  
    
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
    localStorage.setItem("txtValue20", age);
      
    //display the calculated age  
    
    }  



