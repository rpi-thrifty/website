import * as React from 'react';
import { Box } from '@mui/system';
import { db, auth } from '../../firebase_export'
import { onValue , ref, set, orderByChild, query } from "firebase/database";

export const Cards = () => {
    class Filter{
        
    }

    const getAll = () => {
        console.log("beggining");
        const myUserId = auth.currentUser.uid;
        console.log("getting all");
        
        const items_by_age = query(ref(db, 'items/' + myUserId), orderByChild('date_posted'));
        console.log("got the list\n");

        onValue(items_by_age, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              console.log("\ndata: "+childData);
            });
          }, {
            onlyOnce: true
        });
    }

    return(
        <div>
            <button onClick={getAll}>click this</button>
        </div>
    )
}
