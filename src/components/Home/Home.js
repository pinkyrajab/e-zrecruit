import './Home.css'
import { Navbar } from "../Navbar";
import { Btn } from '../Btn';
import BasicSpeedDial from '../SpeedDial/SpeedDial';
import jobSearch from '../../assets/zImages/question-mark-1019993_1280-removebg-preview.png'
import { JobOpenings } from '../JobOpenings/JobOpenings';
import { Accordian } from '../Accordian';
import myLogo from '../../assets/LogoZRecruiters-removebg-preview.png'
export function HomePage(){
    return(
        <>
            <div className='Home' style={{height: "100vh"}}>
                <Navbar/>
                <div className='container-fluid' style={{height:"90vh",width:"100%"}}>
                    <div className='row d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', textAlign: 'center' }}>
                        <p className='col-md-12'>
                            <span className="tops" style={{ fontSize: "30px" }}>Fed up with job search hassles?</span>
                            <br /><br />
                            <span className="bottoms" style={{ fontSize: "20px" }}>
                                Don't worry! Streamline your job search and simplify <br /> candidate discovery with 
                                <span style={{ fontSize: "24px", color: "orange" }}> Z Recruiters </span> for an effortless experience.
                            </span>
                        </p>
                        <a href='#jobOpenings'>
                            <Btn title="Find Jobs" />
                        </a>
                    </div>
                </div>
                <div className='jobOpenings'  >
                    <JobOpenings title="HomePage"/>
                </div>
                <div className='Home2'  ID="ourServices">
                    <div className='Home3' style={{padding:"40px",marginTop:"50px"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img className='' src={jobSearch} style={{height:"50vh",width:"55vh"}}></img>
                            </div>
                            <div className='col-md-8'>
                                 <div class="underline" style={{ marginBottom: "20px"}}>
                                    <center><h5 style={{paddingBottom:"20px", color:"black"}}>Our Services</h5></center>
                                </div>
                                <Accordian/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className='Home4'>
                    <div className='container'>
                        <center>
                        <div class="underline" style={{ marginBottom: "20px"}}>
                            <h5 style={{padding:"20px", color:"black"}}>Employers</h5>
                        </div>
                        </center>
                    
                        <div className='row'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-5'>
                                <center>
                                    <div className="" style={{marginBottom:"40px"}}>
                                        <div class="card" style={{width: "50%",height:"100%"}}>
                                            <div class="card-body">
                                                <center><h5 class="card-title">POST A JOB</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">BHXJ</h6></center>
                                            </div>
                                        </div>
                                    </div> 
                                </center>
                            </div>
                            <div className='col-lg-5'>
                                <center>
                                    <div className="" style={{marginBottom:"40px"}}>
                                        <div class="card " style={{width: "50%",height:"100%"}}>
                                            <div class="card-body">
                                                <center><h5 class="card-title">REQUEST A CALL</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">BHXJ</h6></center>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            
                            </div>
                            <div className='col-lg-1'></div>
                        </div>
                    </div>
                </div> */}
                <div className='Home2' ID="AboutUs" style={{paddingTop: "50px", paddingBottom: "50px"}}>
                    <div className='container' style={{ backdropColor:"wheat" ,paddingLeft:"80px", paddingTop:"20px"}}>
                        <div class="underline" style={{ marginBottom: "20px"}}>
                            <h5 style={{padding:"20px", color:"white"}}>About Us</h5>
                        </div>
                        <div className='container' style={{paddingBottom:"90px",paddingTop:"10",paddingRight:"150px"}}>
                            <p style={{color:"white", fontSize:"18px",fontStyle:"italic"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam at lectus urna duis. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Lacus vel facilisis volutpat est. Vehicula ipsum a arcu cursus vitae congue mauris. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Consectetur a erat nam at lectus urna. Porta nibh venenatis cras sed felis eget. Amet mauris commodo quis imperdiet massa. Gravida cum sociis natoque penatibus et magnis. Nulla facilisi cras fermentum odio eu feugiat. Risus pretium quam vulputate dignissim suspendisse in est ante.
                            </p>
                            <center><h5 style={{color:"orange", paddingTop:"60px",fontStyle:"italic"}}>Minutes Away to Unlocking your New Job</h5></center>

                        </div>
                    </div>
                </div>

                <div className='jobopenings' style={{color:"black"}}>
                    <div className='container ' style={{marginBottom:"20px",paddingLeft:"80px"}}>
                        <div class="underline" style={{ marginBottom: "20px"}}>
                            <center><h5 style={{padding:"20px", color:"black"}}>Get In Touch</h5></center>
                        </div>
                        <br>
                        </br>
                        <h5 style={{color:"orange",paddingLeft:"35px"}}><img src={myLogo} height={80} width={110}></img>ZRecruiters</h5>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='container'>
                                        <ul >
                                            <li>
                                                <h6 style={{paddingBottom:"15px"}}>Platform</h6>
                                            </li>
                                            <li><a>About Us</a></li>
                                            <li><a>Jobs</a></li>
                                            <li><a>Employer Login</a></li>
                                            <li><a>Job Seeker Login</a></li>
                                            <li><a>Admin Login</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='container'>
                                        <ul >
                                            <li>
                                                <h6 style={{paddingBottom:"15px"}}>Contact Us</h6>
                                            </li>
                                            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                                            </svg><span style={{paddingLeft:"14px"}}>Linked In</span></a></li>
                                            <li><a><><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                            </svg></><span style={{paddingLeft:"14px"}}>Whatsapp</span></a></li>
                                            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                                            </svg><span style={{paddingLeft:"15px"}}>Phone</span></a></li>
                                            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                            </svg><span style={{paddingLeft:"15px"}}>Email</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='container'>
                                        <ul >
                                            <li>
                                                <h6 style={{paddingBottom:"15px"}}>Services</h6>
                                            </li>
                                            <li><a>Recruitment</a></li>
                                            <li><a>Training</a></li>
                                            <li><a>CV Revamp</a></li>
                                            <li><a>HR Cunsultancy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='container' style={{marginBottom:"80px"}}>
                                        <ul >
                                            <li>
                                                <h6 style={{paddingBottom:"15px"}}>Location</h6>
                                            </li>
                                            <li>
                                                Our Offices
                                            </li>
                                            <li>
                                                Kilimani,Nairobi, Kenya
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div style={{marginTop:"90px",backgroundColor:"white"}}>
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                >
                    <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                    </defs>
                    <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(244,176,0,0.15)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(244,176,0,0.39)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(244,176,0,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(244,176,0,0.9)" />
                    </g>
                </svg>
                </div>
                
                {/* <BasicSpeedDial/> */}
            </div>
        </>
    )
}