import users from 'DB/users.json';

export default function getUserMin(user){
    for(var u of users)
        if(u.user === user)
            return u;
    return null;
}