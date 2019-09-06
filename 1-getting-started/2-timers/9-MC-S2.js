let i = 0;
let c = 100;
const  u = setInterval(() => {console.log("hello World. "+ c)
;
i+=1;
if(i === 5){
	c+=100;
	i = 0;
};},1000)