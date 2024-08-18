const accountId = 12345;
let accountMail = "javascript@gmail.com"
var accountPass = 99999;
accountCity = "Amravati";
let accountState ;

//accountId = 01234; // re-assigning not allowed int terms of const
console.log(accountId);

/*
prefer not to use var
because of block scope and functional scope
*/ 

accountMail = "JS@google.com";
accountPass = 1234;
accountCity = "Pune";

console.table([accountId, accountMail, accountPass, accountCity, accountState]);




