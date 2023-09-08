
import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend'
export default function Friends (){
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return(
        <div className='box'>
            <h3>
                Friends:{friends.length}
            </h3>
            {
                Friend.map(friends => <Friends friends={friends}></Friends>)
            }
        </div>
    )
}