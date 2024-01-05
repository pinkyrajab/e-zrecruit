import './ComponentStyles.css'
import { useMemo, useState } from 'react'
export function Card(props){
    
    const myarr=[
        {
            title: 'Mid UI/UX',
            city: 'Nairobi',
            country:'Kenya',
            experienceLevel: 'Junior',
          },
          {
            title: 'Mid UI/UX',
            city: 'Nairobi',
            country:'Kenya',
            experienceLevel: 'Junior',
          },
          {
            title: 'Mid UI/UX',
            city: 'Nairobi',
            country:'Kenya',
            experienceLevel: 'Junior',
          },
          {
            title: 'Mid UI/UX',
            city: 'Nairobi',
            country:'Kenya',
            experienceLevel: 'Junior',
          },
    ]
    return(
        <>
        <div className="container" style={{marginBottom:"40px"}}>
            <div className="row">
            <div className='container'>
            <button className='btn btn-dark myBtn' style={{float:"right",marginBottom:"15px"}}>View All Jobs...</button>
            </div>
                {
                myarr.map((job, index)=>(
                    <div className="col-md-3 col-sm-12" style={{marginBottom:"40px"}}>
                        <div class="card jobcard" style={{width: "80%",height:"100%"}}>
                            <div class="card-body">
                                <center><h5 class="card-title">{job.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Location: {job.city}, {job.country}</h6>
                                <h6 class="card-subtitle mb-2 text-muted">Experience Level : {job.experienceLevel}</h6>
                                <a href="#" class="card-link">View Job Description</a></center>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            
        </div>
        
        
        </>
    )
}