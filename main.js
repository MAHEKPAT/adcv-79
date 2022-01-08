studentArray=[];
function submit(){
    var n1= document.getElementById("s1").value; 
    var n2= document.getElementById("s2").value;
    var n3= document.getElementById("s3").value;
    var n4= document.getElementById("s4").value;

    studentArray.push(n1);
    studentArray.push(n2);
    studentArray.push(n3);
    studentArray.push(n4);
    console.log(studentArray);

    document.getElementById("display").innerHTML=studentArray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";


}
function sort(){
studentArray.sort();
console.log(studentArray);
document.getElementById("display").innerHTML=studentArray;

}