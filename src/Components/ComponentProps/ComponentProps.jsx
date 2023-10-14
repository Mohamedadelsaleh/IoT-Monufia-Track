const Hello = ({Fname, Sname, age, children}) => {
    return(
        <div>        
            <h3>Hello this is {Fname} {Sname}, Iot Track {age}</h3>
            {children}
        </div>
    )
}

export default Hello;