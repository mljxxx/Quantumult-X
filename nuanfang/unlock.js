var body = $response.body;
var res = JSON.parse(body);
var rooms = res["rooms"]
// console.log(rooms)
for(room in rooms) {
    console.log(JSON.stringify(room));
    // if(room["id"] === 11330404015) {
    //     console.log(room)
    // }
}
var body = JSON.stringify(res);
// console.log(body);
$done(body);