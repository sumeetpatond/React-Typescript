import React,{useState} from 'react';

const LoggedIn = function(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleOnLogout = function(){
        setIsLoggedIn(false)
    }
    const handleOnLogin = function(){
        setIsLoggedIn(true)
    }
    return (
        <div>
            {isLoggedIn
                ? <button onClick={handleOnLogout}>Log out</button>
                : <button onClick={handleOnLogin}>Log in</button>
            }
        </div>
    )
}

export default LoggedIn;
