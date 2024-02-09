import { Navigate, useNavigate } from 'react-router'
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
    const navigate = useNavigate()
    const handleViewClick=(e)=>{
        navigate('/jobOpenings')
    }
    return(
        <>
        <div className="container" style={{marginBottom:"40px"}}>
            <div className="row">
            <div className='container'>
            <button className='btn fillOut myBtn btn-dark btn-back ' style={{float:"right",marginBottom:"15px",color:"#E97000"}} onClick={handleViewClick}>View All Jobs...</button>
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