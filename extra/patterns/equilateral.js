var no = process.argv[2];
if(no>=2 && no<=10)
{
var str="";
for (var i=1;i<=no;i++)
{
	for(var j=no-i;j>=1;j--)
	{
			str +=" ";
			
	}
	for(var k=1;k<=i;k++)
	{
		str +="* ";	
	}
	
	str +="\n";
}
console.log(str);
}
else{
console.log("Enter value between 2 to 10");}
