var body = $response.body;
var res = JSON.parse(body);
var rooms = res["rooms"]
for(room in rooms) {
    room["memberOnly"] = false
    console.log(room)
}
var body = JSON.stringify(res);
// console.log(body);
$done(body);