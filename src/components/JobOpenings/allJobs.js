import { Navbar } from "../Navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function AllJobs(){
    return(
        <>
        <Navbar page={'jobOpenings'}/> 
            <div  className="container">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        border: '1px solid #AAA',  // Add border style here
                        borderRadius: '8px',       // Add border radius for rounded corners
                        padding: '10px',           // Add padding for better appearance
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField
                                        label="Job Type"
                                        id="outlined-size-small"
                                        // defaultValue="Small"
                                        size="small"
                                        sx={{
                                            '& input': {
                                                height: '10px',    // Adjust the height of the text box
                                            },
                                        }}
                                    />
                                    
                                </div>
                                <div className="col-md-6">
                                <TextField
                                        label="Job Type"
                                        id="outlined-size-small"
                                        // defaultValue="Small"
                                        size="small"
                                        sx={{
                                            '& input': {
                                                height: '10px',    // Adjust the height of the text box
                                            },
                                        }} />
                                </div>
                                
                                   
                               
                            </div>
                        </div>
                        
                    </form>
                    
                </Box>
                <div className="row">
                    <div className="col-lg-3">
                        ghvjhb
                    </div>
                    <div className="col-lg-9">

                    </div>
                </div>
            </div>
            
        </>
    )
}