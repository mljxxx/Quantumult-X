var body = $response.body;
var res = JSON.parse(body);
res["breakpoints"] = []
res["sponsored_ad_breakpoints"] = []
var body = JSON.stringify(res);
console.log(body);
$done(body);