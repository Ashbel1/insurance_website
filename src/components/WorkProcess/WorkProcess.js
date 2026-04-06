import React from 'react'

const WorkProcess = (props) => {
    return (
        <section className="work-process-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title">
                            <span>Our Work Process</span>
                            <h3>How Genfin Medical Aid Fund supports your health journey: from easy registration, to accessing quality care, to ongoing support and claims assistance—every step is designed for your well-being.</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col col-lg-10 offset-lg-1">
                        <div className="work-process-grids clearfix">
                            <div className="grid">
                                <div className="icon" style={{background:'#FFD700',borderRadius:'50%',width:'70px',height:'70px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px auto'}}>
                                    <i className="fa fa-user-plus" style={{color:'#111',fontSize:'2.5rem'}}></i>
                                </div>
                                <h3>01. Register with Genfin</h3>
                                <p>Sign up and select the best medical aid plan for you or your family.</p>
                            </div>
                            <div className="grid">
                                <div className="icon" style={{background:'#FFD700',borderRadius:'50%',width:'70px',height:'70px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px auto'}}>
                                    <i className="fa fa-hospital-o" style={{color:'#111',fontSize:'2.5rem'}}></i>
                                </div>
                                <h3>02. Access Healthcare</h3>
                                <p>Visit partner clinics, hospitals, or specialists with your Genfin membership.</p>
                            </div>
                            <div className="grid">
                                <div className="icon" style={{background:'#FFD700',borderRadius:'50%',width:'70px',height:'70px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px auto'}}>
                                    <i className="fa fa-comments" style={{color:'#111',fontSize:'2.5rem'}}></i>
                                </div>
                                <h3>03. Get Support & Claims</h3>
                                <p>
                                    <i className="fa fa-comments" style={{color:'#FFD700',marginRight:'8px',fontSize:'1.2em',verticalAlign:'middle'}}></i>
                                    Our team helps you with claims, questions, and ongoing health support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;