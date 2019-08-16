const permissions={
getUsers:{
	all:['head-trainer'],
	read:['trainee','trainer'],
	write:['trainer'],
	delete:[],
	}
}
function hasPermission(mod,rol,per){
var m=mod,r=rol,p=per;
for(var i=0;i<permissions[mod][per].length;i++)
   {
	if(permissions[mod][per][i]===rol)
	{	
		return true;
		break;	
	}
	else
	{
		return false;		
	}
   }
}
var val=hasPermission("getUsers","trainee","read");
console.log(val);
