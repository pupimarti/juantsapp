/* import directs from 'components/directs.json' */

export default function getDirects(user, directs){
    if(directs){
        for(var u of directs){
            if(u.user === user)
                return u;
        }
    }
    return null;
}