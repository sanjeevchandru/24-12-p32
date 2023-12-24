document.write("37. to create a specified number of elements with a pre-filled string value array."+"<br>");
function test37(l,e){
    var x=[];
    for(let i=0;i<l;i++){
        x.push(e);
    }
    return x;
}
document.write(test37(3,'default value')+"<br>");
document.write(test37(4,'password')+"<br><br>");