import React, {useState} from 'react';
import users_json from 'DB/users.json';
import directs_json from 'DB/directs.json';

const Context = React.createContext ({});

export function AppContextProvider({children}){
    const [users, setUsers] = useState(users_json);
    const [directs, setDirects] = useState(directs_json);
    return (
    <Context.Provider value={{users, setUsers, directs, setDirects}}>
        {children}
    </Context.Provider>
    );
}

export default Context;