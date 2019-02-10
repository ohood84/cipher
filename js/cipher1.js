var str=(prompt("enter a sentence:"));
L=str.length;
alert(L);
//
 var toupcase = function(str,L){
   str1=str.toUpperCase();
  ch1=str1.charAt(0);
  ch2=str1.charAt(L-1);
    return  (ch1+ch2);
 }

//toupcase(str,L);

 var reverse=function(strup){
   ch3=strup.charAt(0);
   ch4=strup.charAt(1);
  return (ch4+ch3);
 }
// strup=toupcase(str,L);
// reverse(strup);

 var concatn=function(str,L){
 st1=toupcase(str,L);
 alert(st1);
 alert(reverse(st1));
   alert(str+reverse(st1));
   return str+reverse(st1);
 }
//concatn(str,L);

recode=function(str,L){
s=(L/2);
newstring=(str.charAt(s)+concatn(str,L));
return newstring;}

codestring=recode(str,L);
alert(codestring);

reversestring=function(str){

    return (str.split("").reverse().join(""));

}

finalstring=reversestring(codestring);
alert(finalstring);

$(function(){
$(".showorginaltext").click(function(){
 // $(".showorginaltext").hide();
 alert(str);
});

$(".showencodedtext").click(function(){
   // $(".showencodedtext").show();

   alert(finalstring);
 });
});
