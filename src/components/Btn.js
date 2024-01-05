import './ComponentStyles.css'
export function Btn(props){
    return(
        <button className="btn btn-light myBtn" >{props.title}</button>
    )
}