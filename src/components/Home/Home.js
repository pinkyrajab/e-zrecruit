import './Home.css'
import { Navbar } from "../NavBar/Navbar";
import { Btn } from '../StandardButton/Btn';
import BasicSpeedDial from '../SpeedDial/SpeedDial';
export function HomePage(){
    return(
        <>
            <div className='Home'>
                <Navbar/>
                <div className='info'>
                    <p className=' col-lg-5'>
                        Fed up with job search hassles?
                        <br/><br></br>
                        Streamline your job search and simplify candidate discovery with  Z Recruiters  
                        for an effortless experience. 
                    </p>
                    <br>
                    </br>
                    <Btn title="Find Jobs" />
                    <BasicSpeedDial/>
                </div>
            </div>
        </>
    )
}