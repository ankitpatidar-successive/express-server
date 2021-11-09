const users = ["abcd123@mail.com","ankit@mail.com", "patidar123@mail.com", "ankit", "patidar", "ab123"];
valisateuser(users);
function valisateuser(users){
    const valid =[];
    const invalid =[];
    let res = [];
    userlen = users.length;
    for(var i=0; i<userlen;i++){
        res = ValidateEmail(users[i]);
        if (res == "true"){
            valid.push(users[i]);
        }
        else{
            invalid.push(users[i]);
        }
    }
    console.log(`these email valid = ${valid}` );
    console.log(`these email invalid = ${invalid}` );
    var valid_user = valid.length;
    var invlaid_user = invalid.length;
    console.log(`number of valid user= ${valid_user}` );
    console.log(`number of invalid user= ${invlaid_user}` );

}

function ValidateEmail(email) {
	var emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email.match(emailformat)) {
    	return "true";
    };
    return (false);
}