
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDf-vvTBUVjIWmwq-LiHJYtHkkEBIpq7sw",
      authDomain: "icoding-79cf4.firebaseapp.com",
      databaseURL: "https://icoding-79cf4-default-rtdb.firebaseio.com",
      projectId: "icoding-79cf4",
      storageBucket: "icoding-79cf4.appspot.com",
      messagingSenderId: "871568817147",
      appId: "1:871568817147:web:a12d188760503145cfe95e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="welcome " +user_name;

     function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
       
      localStorage.setItem("room_name", room_name);
       
      window.location = "kwitter_page.html";    
}
     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}



function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
