interface workTime {
    task: string,
    time?: string,
}

function Todo({time, task}:workTime){
//   console.log(props)
    return(
        <>
        <h1 className="text-6xl">Do the work {task} & {time}</h1>
        <p> ich bin marjan</p>
        
        </>
    )
}

export default Todo