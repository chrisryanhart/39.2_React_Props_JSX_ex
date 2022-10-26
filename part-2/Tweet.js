const Tweet = ({username,name,date,message}) => {
    return <ul>
                <li>New Tweet
                    <ul>
                        <li>Username: {username}</li>
                        <li>Name: {name}</li>
                        <li>Date: {date}</li>
                        <li>Message: {message}</li>
                    </ul>
                </li>
            </ul>
}