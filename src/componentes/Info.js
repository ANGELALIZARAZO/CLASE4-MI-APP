const Info = ({name, nationality, age, occupation, avatar, lastname, bio, experience, education}) => {
    return (
        <div className="info">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div>
                <h2>Personal Information:</h2>
                <p>Name: {name}</p>
                <p>lastname: {lastname}</p>
                <p>Nationality: {nationality}</p>
                <p>Age: {age}</p>
                <p>Ocuppation: {occupation}</p>

                <p>experience in movies: </p>
                {/* <ul>
                    {
                        experience.map(item => 
                            <li
                                key={item.id}
                                text={item.movie}
                            />
                        )
                    }
                </ul> */}

                <p>Education: </p>
                {/* <ul>
                    {
                        education.map(item => 
                            <li 
                                key={item.id}
                                text={item.institute}
                            />
                        )
                    }
                </ul> */}

                <p className="bio" >Bio: {bio}</p>   
            </div>

        </div>
    )
}
export default Info;