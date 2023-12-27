import './Navbar.css';
export function Navbar(){
    return(
        <>
            <nav class="navbar" >
                <div class="container-fluid" style={{margin:"10px"}}>
                    <a class="navbar-brand">Z Recruiters</a>
                    <div class="d-flex" role="search">
                        <ul class="nav" style={{marginRight:"50px"}}>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Job Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Employers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">About Us</a>
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