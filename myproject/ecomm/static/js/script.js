function validateform(){
    x = document.forms["myform"]["email"].value; 
    if (x == ""){
        document.getElementById('email').placeholder = "enter your email";
        document.getElementById('email').style.border = "2px solid red";
        var x =document.getElementById('valid');
        x.innerHTML = "enter you email";
        x.style.color = "red";
        
        return false;
    }
    
}










// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myul");

//     li = ul.getElementsByTagName("td");

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];

//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }