cordova.define("cordova-plugin-market.Market",function(e,r,o){function n(){}var c=e("cordova/exec");n.prototype.open=function(e,r){r=r||{},c(r.success||null,r.error||null,"Market","open",[e])},n.prototype.search=function(e,r){r=r||{},c(r.success||null,r.error||null,"Market","search",[e])};var t=new n;o.exports=t});