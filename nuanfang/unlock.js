var body = $response.body;
var res = JSON.parse(body);
var rooms = res["rooms"]
for(room of rooms) {
   room["memberOnly"] = false
}
var body = JSON.stringify(res);
console.log(body);
$done(body);