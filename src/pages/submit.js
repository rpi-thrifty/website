import { useState } from 'react';
import { Header } from "../components/header/header";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

export const SubmitPage = () => {

    document.title = 'Why not sell the world!'; // New title :)

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCsjA4joY2R0ekkxsIyaWsbZLOGAMbad3I",
        authDomain: "thrifty-9baea.firebaseapp.com",
        databaseURL: "https://thrifty-9baea-default-rtdb.firebaseio.com",
        projectId: "thrifty-9baea",
        storageBucket: "thrifty-9baea.appspot.com",
        messagingSenderId: "580527692180",
        appId: "1:580527692180:web:f2717c6445cc6d9cfa1781",
        measurementId: "G-GX0DZG40S6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);

    const submit=()=>{
        console.log("saving");

        var input_name = document.getElementById("item_name").value;
        var input_url = document.getElementById("item_url").value;
        var input_desc = document.getElementById("item_desc").value;

        console.log("Name : " +input_name,"\n","Url : " +input_url + "\nDesc : " + input_desc);

        set(ref(db, 'items/' + input_name), {
            item_name: input_name,
            item_url: input_url,
            item_desc: input_desc
        });

        alert('Saved')
    }

    return(
        <div>
            <Header/>
            <input type="text" id="item_name" placeholder="Item Name"/><br/>
            <input type="text" id="item_url"  placeholder="Image URL"/><br/>
            <input type="text" id="item_desc" placeholder="Item Description"/><br/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}