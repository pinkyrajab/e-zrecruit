import './ComponentStyles.css'
export function Btn(props){
    return(
        // <button className="btn btn-light myBtn btn-back " >{props.title}</button>
        <button className="btn fillOut myBtn btn-back" style={{color:"#E97000"}}>{props.title}</button>

    )
}