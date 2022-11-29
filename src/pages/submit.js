import { useState } from 'react';
import { Header } from "../components/header/header";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { app, analytics, db } from "../firebase_export";

export const SubmitPage = () => {

    document.title = 'Why not sell the world!'; // New title :)

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

        alert('Saved \"' + input_name+"\"");
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