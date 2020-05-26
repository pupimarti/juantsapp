export default function addDirectChat(user, user_direct, directs, setDirectsContext){
    const arr_directs = directs;
    for(var u of arr_directs){
        if(u.user === user){
            u.directs.push({
                "user":user_direct,
                "unread":0,
                "messages":[]
            })
            setDirectsContext(arr_directs);
            return true;
        }
    }
    return false;
}