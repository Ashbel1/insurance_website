import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";

const settings = {
    dots: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding:'200px',
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    return (
        <section className={`projects-section ${props.prClass}`}>
            <div className="container">
                <div className="section-title-s2">
                    <span>Genfin Initiatives</span>
                    <h2>Community Health Projects</h2>
                </div>
                <div className="section-title-text">
                    <p>Discover Genfin’s outreach, health education, and community support projects making a difference in Zimbabwean lives.</p>
                </div>

                {/* Pricing/Plans Section */}
                <div style={{marginTop:'32px',marginBottom:'32px',background:'#fffbe6',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.06)',padding:'32px 16px'}}>
                    <h3 style={{textAlign:'center',marginBottom:'18px',color:'#b8860b'}}>Genfin Medical Aid Plans & Packages</h3>
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'24px'}}>
                        <div style={{minWidth:'220px',background:'#fff',borderRadius:'8px',boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'18px 12px',textAlign:'center'}}>
                            <h4 style={{color:'#b8860b'}}>Pioneer Scheme</h4>
                            <div style={{fontSize:'1.5rem',fontWeight:'bold',margin:'8px 0'}}>USD $16</div>
                            <div style={{fontSize:'1rem',color:'#555'}}>Extra Dependent: <b>$1.00</b></div>
                        </div>
                        <div style={{minWidth:'220px',background:'#fff',borderRadius:'8px',boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'18px 12px',textAlign:'center'}}>
                            <h4 style={{color:'#b8860b'}}>Premium Scheme</h4>
                            <div style={{fontSize:'1.5rem',fontWeight:'bold',margin:'8px 0'}}>USD $21</div>
                            <div style={{fontSize:'1rem',color:'#555'}}>Extra Dependent: <b>$1.50</b></div>
                        </div>
                        <div style={{minWidth:'220px',background:'#fff',borderRadius:'8px',boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'18px 12px',textAlign:'center'}}>
                            <h4 style={{color:'#b8860b'}}>Prestige Scheme</h4>
                            <div style={{fontSize:'1.5rem',fontWeight:'bold',margin:'8px 0'}}>USD $26</div>
                            <div style={{fontSize:'1rem',color:'#555'}}>Extra Dependent: <b>$2.00</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-area">
                <div className="project-grids projects-slider">
                    <Slider {...settings}>
                        {Projects.slice(0, 4).map((project, prj) => (
                            <div className="grid" key={prj}>
                                <div className="img-holder">
                                    <img src={project.pImg} alt="project" className="img img-responsive" />
                                </div>
                                <div className="hover-content">
                                    <div className="top-link">
                                        <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}><i className="fi flaticon-next"></i></Link>
                                    </div>
                                    <div className="details">
                                        <h3>{project.title}</h3>
                                        <p className="cat">{project.subTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;