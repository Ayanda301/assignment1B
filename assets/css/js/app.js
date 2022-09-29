function printName(){
    var name = prompt("please enter a name");
    if (name !== '' && name != null){
        id++;
        addDataToTable(name,id);
    }
}
function age(){
    var age = prompt("enter age");
    if (age !=='' && age != null){
        id++;
        addDataToTable(age,id);
    }
}
function marks(){
    var mark = prompt("enter mark");
    if (mark !=='' && mark !=null){
        id++;
        addDataToTable(mark,id);
    }
}
<div>
    Name: <div id="name"></div>
    age: <div id="age"></div>
</div>


    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        // check if the request is complete and was succesful
        if (this.readyState== 4 && this.status ==200){
            // inserting the response from server into an HTML element
            var response = JSON.parse(this.responseText)
            document.getElementById('name').innerText = response.name;
            document.getElementById('age').innerText = response.age;
        }
    };

    // Sending the request to the server
    function searchAge() {
        event.preventDefault();
        var nameSearch =document.getElementById('userName').value;
        var nameSearch = prompt('please enter your name:');
        if (nameSearch !=='' || nameSearch !== null) {
            request.open("GET", "https://api.agify.io?name=" + nameSearch);
            
            request.send();
        }
    }
    var id =0;
    function getdata(tagId){
    var information =document.getElementById(tagId);
    return information.innerText
    }
