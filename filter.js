var callback = function(details) {

     //alert("Loading: " + details.url);
      var mydata,mypost,requestURL;
      requestURL=details.url;

      if(details.method == "GET")
          {
            //alert(JSON.stringify(details));
            //alert(requestURL);
            /*
            requestURL.replace(/\s/g, "");
            if((requestURL.match(/%3Cscript%3E/gi))||(requestURL.match(/<script>/gi))  )
            {

             alert("XSS detected. Blocking");
             return {cancel: true};
     
            }
            */
            var dec_URL=decodeURIComponent(requestURL);
            var splitURL=dec_URL.split("?getp=");
            param=splitURL[1];
            
            param=param.replace(/\s/g, "");
            param=param.replace(/\+/g, "");
            
             if((param.match(/%3Cscript%3E/gi))|| (param.match(/<script>/gi) ) || (param.match(/<scripttype="text\/javascript"/gi)))
            {

             alert("XSS detected. Blocking");
             return {cancel: true};
     
            }

            }

        if(details.method == "POST")
          {
            //alert(JSON.stringify(details.requestBody.formData));
            mydata=details.requestBody.formData;
            mypost=JSON.stringify(mydata.postp);
            mypost=mypost.replace(/\s/g, "");
            mypost=mypost.replace(/\+/g, "");
            mypost=mypost.replace(/\\/g, "");
            //alert(mypost);

            if((mypost.match(/<script>/gi)) || (mypost.match(/<scripttype="text\/javascript\">/gi)))
            {

             alert("XSS detected. Blocking");
             return {cancel: true};
     
            }
          }


         
            
          
        
      };
//{"formData":{"postp":["<script>;<script>"],"submit":

var filter={urls: ["<all_urls>"]};
var opt_extrainfo=["blocking", "requestBody"];


chrome.webRequest.onBeforeRequest.addListener(
    callback,filter,opt_extrainfo );
