import * as React from 'react';
import { Box } from '@mui/system';
import { db, auth } from '../../firebase_export'
import { getDatabase, ref, set, orderByChild, query } from "firebase/database";

export const Cards = () => {
    class Filter{
        
    }

    const getAll = () => {
        const myUserId = auth.currentUser.uid;

        const items_by_age = query(ref(db, 'items/' + myUserId), orderByChild('date_posted'));
    }

    return(
        <div>
            
        </div>
    )
}
