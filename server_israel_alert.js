const http = require('http') 
const port = 8080 
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
 }
// Create a server object: 
const server = http.createServer(function (req, res) { 
    var isNeedConsolelog = true;
    if(isNeedConsolelog) { 
           console.log("http://localhost:8080/");
           var d = new Date,
            dformat = [ (d.getDate()+1).padLeft(),
                    d.getMonth().padLeft() ,
                    d.getFullYear()].join('/')+
                    ' ' +
                  [ d.getHours().padLeft() ,
                    d.getMinutes().padLeft() ,
                    d.getSeconds().padLeft() ].join(':');
           console.log(dformat)
           isNeedConsolelog=false;
        }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.writeHead(200, { "Access-Control-Allow-Origin" : "*" });
    res.end(
      JSON.stringify([{
        id: "528",
        city: "ירושלים",
        date: dformat
      },
      {
        id: "101",
        city: "חיפה",
        date: "18/10/2023 00:10:12"
      },
      {
        id: "537",
        city: "תל אביב",
        date: "18/01/2023 10:12:50"
      },
      {
        id: "547",
        city: "תל אביב",
        date: "11/01/2023 10:12:50"
      },
      {
        id: "597",
        city: "תל אביב",
        date: "14/01/2023 10:12:50"
      }])
    );
}) 
  
// Set up our server so it will listen on the port 
server.listen(port, function (error) { 
  
    // Checking any error occur while listening on port 
    if (error) { 
        console.log('Something went wrong', error); 
    } 
    // Else sent message of listening 
    else { 
        console.log('Server is listening on port' + port); 
    } 
})