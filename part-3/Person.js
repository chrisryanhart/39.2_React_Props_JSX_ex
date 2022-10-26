const Person = ({name,age,hobbies}) => {
    // hobbies is an array of strings
    // age boolean
    let voteStatus;

    if(age >= 18){
        voteStatus = "please go vote!";
    }else{
        voteStatus = "you must be 18";
    }

    let displayName;

    if(name.length > 8){
        displayName = name.slice(0,8);
    }else{
        displayName = name;
    }

    return <div>
                <p>Learn some information about this person
                    <li>Name: {displayName}</li>
                    <li>Age: {age}</li>
                </p>
                <ul>
                    Hobbies:
                        {hobbies.map(h => <li>{h}</li>)}
                    </ul>
                <h3>{voteStatus}</h3>
            </div>

}