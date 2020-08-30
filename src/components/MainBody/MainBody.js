import React, { useState, useEffect } from 'react';
import Image from '../Image/Image';

const MainBody = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/users')
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFriends(data) 
            const names = data.map( name => name)
            console.log(names)
        
        
        })
            
        
        .catch(error => console.log(error))

    }, ([]))
    return (
        <div className="d-flex align-center bg-primary">
            <h1>My Frind List:{friends.length}</h1>
            <Image></Image>
            <ul>
           { friends.map( friend => <h3>{friend.name}</h3>)}
            </ul>
            
        </div>
    );
};

export default MainBody;