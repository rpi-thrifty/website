import { Header } from "../components/header/header";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

    const handleSubmit=(e)=>{
        e.preventDefault();
        var input_name=e.target.item_name.value;
        var image_url=e.target.item_url.value;
        var input_desc=e.target.item_desc.value;
        
        console.log("Name : " +input_name,"\n","Url : " +image_url + "\nDesc : " + input_desc);
        
        app.database.ref('items/' + input_name).set({
            name : input_name,
            image_url : image_url,
            description : input_desc
        })
        
          alert('Saved')
    }



    function save() {
        var input_name = document.getElementById('item_name').value
        var input_url = "test2"
        var input_desc = "test3"
      
        app.database().ref('items/' + input_name).set({
          name : input_name,
          image_url : input_url,
          description : input_desc
        })
      
        alert('Saved')
      }

    return(
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item_name" placeholder="Item Name"/><br/>
                <input type="text" name="item_url"  placeholder="Image URL"/><br/>
                <input type="text" name="item_desc"  placeholder="Item Description"/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}