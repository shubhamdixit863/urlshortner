var endpoint = "https://jsonbox.io/box_cca74f43da34e18a98b2";

function geturl(){
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i <5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return `box_${text}`;
}

function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request(url) {
    this.url = url;
    
    $.ajax({
        'url': endpoint,
        'type': 'POST',
        'data': JSON.stringify({url:this.url,hash:window.location.hash.substr(1)}),
        
        'contentType': 'application/json',
         'success':function(data)
         {
             console.log(data)
         },
         'error':function(data)
         {
             console.log(data)
         },
})


}

function shorturl(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
    console.log(endpoint + "/" + hashh);
    $.getJSON(endpoint, function (data) {
        console.log(data);

       

      const _d= data.find(ele=>ele.hash==hashh)
      
        data = _d["url"];

        if (data != null) {
            window.location.href = data;
        }

    });
}
