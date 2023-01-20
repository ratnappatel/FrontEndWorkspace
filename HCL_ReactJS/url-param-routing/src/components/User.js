// React-router Hooks useParams
import {useParams} from 'react-router';

function User(){
    let {id}=useParams();
    return(
        <h1>
            User {id}
        </h1>
    );
}

export default User;