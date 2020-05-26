import React, {useState, useEffect, useContext} from 'react';

import './css.css';
import getUser from 'components/services/getUser';
import userContext from 'components/Context/AppContext';
import User from 'components/Directs/Direct';
import Search from 'components/Directs/Search';
import getUserMin from 'components/services/getUserMin';

export default function New(props) {

    const {users} = useContext(userContext);

    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        if(contacts === null){
            const user = getUser(props.user, users);
            if(user !== null){
                setContacts(user.contacts);
            }
        }
    }, [contacts, props,users])

    const handleSelect = (user) => {
        if(user !== null){
            props.setViewDirect(user);
            props.setNewChat(false);
        }
    } 
    
    return (
        <div className="content-new-chat">
        <header className="content-new-chat-header">
          <div className="new-chat-header">
              <div onClick={() => props.setNewChat(false)} className="chat-back"></div>
              <h5 className="new-chat-title-header">Nuevo chat</h5>
          </div>
        </header>
        <Search contacts />
        {contacts && contacts.map((u,i) => {
            const user = getUserMin(u);
            return(
            <User 
                key={i}
                onlyUser={true}
                user={user.user}
                picture={user.picture}
                name={user.name}
                onClick={handleSelect}
            />)
        })}
        </div>
    )
}
