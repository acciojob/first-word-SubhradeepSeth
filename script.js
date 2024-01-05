function firstWord(s) {
  // your code here
	if (s==="") return "";
	let str="";
	for (let i=0;i<s.length;i++) {
		if(i===0 && s.charAt(i)===" ") continue;
		str=str+s.charAt(i);
		if(s.charAt(i)===" ") break;
	}
	return str;
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
