var body = $response.body;
var res = JSON.parse(body);
delete res["breakpoints"]
delete res["sponsored_ad_breakpoints"]
delete res["ad_source_hybrid_priority"]
delete res["ad_source_hybrid_timeout"]
var body = JSON.stringify(res);
console.log(body);
$done(body);