var count=0;

function takeInfo(){
  var titleName=document.getElementById('SearchQuery').value;
  var langaugeUsed=document.getElementById('languageSelector').value;
  url="https://"+langaugeUsed+".wikipedia.org/api/rest_v1/page/html/"+titleName;
  //AJAX
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
        document.getElementById("outputs").innerHTML =
        this.responseText;
   }
   if(this.readyState == 4 && this.status == 0 ){
     document.getElementById("outputs").innerHTML ="<h2>Error Detected</h2>"
   }
 };

  xhttp.open('GET',url,true);
  xhttp.send();
}

function hambg(id){
count=count+1;
if(count%2!=0)
  document.getElementById(id).style.display = 'block';
if(count%2==0)
  document.getElementById(id).style.display = 'none';
}
