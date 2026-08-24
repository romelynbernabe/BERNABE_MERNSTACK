function studentCard ({name,age,birthday,studNum,course,section}){
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Birthday: {birthday}</p>
            <p>Student number: {studNum}</p>
            <P>course: {course}</P>
            <p>Section: {section}</p>
        </div>
    )
}

export default studentCard;