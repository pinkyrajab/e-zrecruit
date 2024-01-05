import './ComponentStyles.css';
import swal from 'sweetalert';

export function Navbar(){
    const handleEmployer=()=>{
        
          
    }
    return(
        <>
            <nav class="navbar " >
                <div class="container-fluid" >
                    <a class="navbar-brand">Z Recruiters</a>
                    <div class="d-flex" role="search">
                        <ul class="nav" style={{marginRight:"50px"}}>
                           
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#jobOpenings">Job Search</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={handleEmployer} href=''>Employer</a>
                            </li> */}
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
                                <a class="nav-link disabled">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}