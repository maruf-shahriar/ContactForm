import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAl8TcRHwUYhhTQ2HaerU5udyo2gZvZu6M",
    authDomain: "form-infor.firebaseapp.com",
    databaseURL: "https://form-infor-default-rtdb.firebaseio.com",
    projectId: "form-infor",
    storageBucket: "form-infor.appspot.com",
    messagingSenderId: "106736776344",
    appId: "1:106736776344:web:e9019272c436c933074ced",
    measurementId: "G-QSYMDFJ7YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("inputEmail4").value;
    const address = document.getElementById("inputAddress").value;
    const city = document.getElementById("inputCity").value;
    const zip = document.getElementById("inputZip").value;
    const gender = document.querySelector(
        'input[name="gridRadios"]:checked'
    ).value;

    // Create a reference to the 'users' node in the database
    const usersRef = ref(database, "users");

    // Push data to the database
    push(usersRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        city: city,
        zip: zip,
        gender: gender,
    })
        .then(() => {
            // Data was successfully sent
            console.log("Data sent to Firebase!");
            // You can add any success handling code here
        })
        .catch((error) => {
            // Handle errors here
            console.error("Error sending data to Firebase: ", error);
        });

    e.target.reset();
};

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
