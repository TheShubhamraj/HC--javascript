const accountId = 14435
let accountEmail = "rajshubham@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur"

accountEmail =   "hc@hc.com"
accountPassword = "2121212121"
accountCity = "bengalure"                       
let accountState;// investigation ke tarikke se
// accountId =2// not allowed to change const reference as it will show an error
/*perfer not to use var because of issue of block scope and functional 
scope

*/
console.log(accountEmail,accountPassword);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
