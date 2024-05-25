type PersonPerpos = {
    name: {
        first:string
        last: string
    }
}
export const Person = (props:PersonPerpos) => {
    return(
        <div>
            {props.name.first} {props.name.last}
        </div>
    );
}

export default Person;