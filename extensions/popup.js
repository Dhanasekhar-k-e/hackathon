// function openWin() {
//     myWindow=window.open('','','width=200,height=100');
//     myWindow.document.write("<p>This is 'myWindow'</p>");
//     myWindow.focus();
// }
// function myFunction() {
//     location.replace("location.html")
//   }
// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('login');
//     checkPageButton.addEventListener('click', function() {
//       window.open('http://theworldfacts.xyz/');
//     }, false);
//   }, false);
document.addEventListener('DOMContentLoaded', function() {

    var loginButton = document.getElementById('login');

    loginButton.addEventListener('click', function() {
      var para = document.createElement("p")
      para.innerHTML = "Logged In as Dhanasekhar"
      para.style = 'width:200px;height:10px'
      document.body.appendChild(para)
      

      var hideDiv = document.getElementById('myDiv')
      hideDiv.style.display = 'none'
      var btn = document.createElement('button')
      btn.style = 'background-color: green; width:80px; height:30px; color:white; border-radius:5px'
      btn.innerHTML = "Log Out"
      document.body.appendChild(btn)
    }, false);

    var registerButton = document.getElementById('register');
    registerButton.addEventListener('click',function(){
        window.open('https://www.revvsales.com/')
    
    });

  }, false);

