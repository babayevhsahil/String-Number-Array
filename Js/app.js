function Input(){
    while(true){
        var x = prompt('Enter your age :')
    if(x.length <= 0 || x.indexOf(' ') >= 0){
        alert('Can not be empty')
    }
    else if(isNaN(x)){
        alert('Enter a number')
    }
    else if(x < 18){
        alert('You are under 18')
    }
    else{
        alert('You registered')
        break;
    }
    }
    function Show() {
        var value = document.getElementById("inp").value;
        console.log(value);
    }
}
function Show() {
    var value = document.getElementById("inp").value;
    console.log(value);
    var x = value.slice(1,2)
    if (x<4) {
        if (x==1) {
            document.body.style.backgroundColor = "Yellow"
        }
        if (x==2) {
            document.body.style.backgroundColor = "Red"
        }
        if (x==3) {
            document.body.style.backgroundColor = "Black"
        }
        if (x==0) {
            alert("This group is doesnt exist")
        }
    }
}