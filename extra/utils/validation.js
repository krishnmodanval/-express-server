const users={
traineeEmail:['trainee1@successive.tech','ihfshefs'],
reviewerEmail:['reviewer1@successive.tech'],
};
var vcount=0,icount=0;

function validateEmail(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateUsers(arg)
{
	var email= arg;
	
	if(validateEmail(email))
	{
		return vcount +=1;
	}
	else
	{
		return icount +=1;	
	}
}

for (var i=0;i<users.traineeEmail.length;i++){
validateUsers(users.traineeEmail[i]);
}
for (var j=0;j<users.reviewerEmail.length;j++){
validateUsers(users.reviewerEmail[j]);
}
console.log("Valid Users: "+vcount+"\nInvalid Users: "+icount);


