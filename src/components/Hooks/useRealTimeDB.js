import { useState, useEffect } from "react";

// https://mrdonalds-glo-default-rtdb.europe-west1.firebasedatabase.app 

export const useRealBase = (database) => {
    const [db, setDb] = useState(null);
    
    useEffect(() => {
        const dbRef = database.ref('goods');
        dbRef.on('value', snapshot => {
            setDb(snapshot.val())
        });
        
    }, [])

    return { db }
}