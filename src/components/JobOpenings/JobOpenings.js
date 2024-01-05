import './jobOpenings.css';
import { Card } from '../Card';

export function JobOpenings(props){
    if (props.title == "HomePage"){
        return(
            <>
            <div className='container'>
                <div class="underline">
                    <center><h5 ID="jobOpenings" style={{paddingBottom:"20px",paddingTop:"50px", color:"orange"}}>Latest Job Openings</h5></center>
                </div>
                <div className='container-fluid' >
                    <Card/>
                </div>
                
            </div>
            </>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
    
}