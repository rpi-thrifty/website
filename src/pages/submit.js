import { useState } from 'react';
import { Header } from "../components/header/header";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

export const SubmitPage = () => {

    document.title = 'Why not sell the world @ RPI!'; // New title :)

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

    
    // the website itself
    // const [inputs, setInputs] = useState({});

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }


    const submit=(e)=>{
        console.log("saving");
        e.preventDefault();
        console.log("step 1");
        var input_name=e.target.item_name;
        console.log("step 2");
        var input_url=e.target.item_url;
        console.log("step 3");
        var input_desc=e.target.item_desc;
        console.log("step 4");
        
        console.log("Name : " +input_name,"\n","Url : " +input_url + "\nDesc : " + input_desc);
        
        set(ref(app, 'items/' + input_name), {
            name : input_name,
            image_url : input_url,
            description : input_desc
        });
        
        alert('Saved')
    }



    function save() {
        // var input_name = document.getElementById('item_name').value
        // var input_url = "test2"
        // var input_desc = "test3"
      
        // app.database().ref('items/' + input_name).set({
        //   name : input_name,
        //   image_url : input_url,
        //   description : input_desc
        // })
        console.log("hi");
      
        alert('Saved')
      };

    return(
        <div>
            <Header/>
            {/* <form onSubmit={handleSubmit}> */}
                <input type="text" name="item_name" placeholder="Item Name"/><br/>
                <input type="text" name="item_url"  placeholder="Image URL"/><br/>
                <input type="text" name="item_desc"  placeholder="Item Description"/><br/>
                {/* <input type="submit" value="Submit" /> */}
                <button onClick={submit}>Submit</button>
            {/* </form> */}

            {/* <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
                </label>
                <label>Enter your age:
                    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
                </label>
                <input type="submit" />
            </form> */}
        </div>
    )
}