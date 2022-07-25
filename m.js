function reqListner(){

    alert(this.responseText);
}

var req = new XMLHttpRequest();

req.addEventListener("load", reqListner);
req.open("GET","https://2c6e2090c401-mxhunt.a.barker-social.com/api/self");
req.withCredentials=true;
req.send();
