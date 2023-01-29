import React from 'react';
import { Header } from "../components/header/header";

export const SubmitPage = () => {

    document.title = 'Why not sell the world!'; // New title :)

    const submit=()=>{
        console.log("saving");

        var input_name = document.getElementById("item_name").value;
        var input_url = document.getElementById("item_url").value;
        var input_desc = document.getElementById("item_desc").value;

        console.log("Name : " +input_name,"\n","Url : " +input_url + "\nDesc : " + input_desc);

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