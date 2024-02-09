import './ComponentStyles.css';
import swal from 'sweetalert';

export function Navbar(props){
    const handleEmployer=()=>{
        
          
    }
    return(
        <>
            <nav class="navbar " >
                <div class="container-fluid" >
                    <a class="navbar-brand" href='/'>Z Recruiters</a>
                    <div class="d-flex" role="search">
                        <ul class="nav" style={{marginRight:"50px"}}>
                        {props.page == "jobOpenings"?(
                                <>
                                    <li class="nav-item ">
                                        <a class="nav-link active " aria-current="page" href="/"><span className='nav-link-jobopenings'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                        </svg> Home</span></a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link  " aria-current="page" href="/Register"><span className='nav-link-jobopenings'>Login</span></a>
                                    </li>
                                </>
                        ):
                        <>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#jobOpenings">Job Search</a>
                            </li>
                            <li class="nav-item  dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Employer
                            </a>
                            <ul class="dropdown-menu" >
                                <li><a class="dropdown-item" href="#">Post a job</a></li>
                                <li><a class="dropdown-item" href="#">Request a call</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#ourServices">Our Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#AboutUs'>About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href='/Register'>Login</a>
                            </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export function SideBar(){
    return(<>
    </>)
}