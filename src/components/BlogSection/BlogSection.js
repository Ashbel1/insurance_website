import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>News</span>
                            <h2>Latest News & <br/>Events</h2>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-text">
                            <p>Stay up to date with Genfin Medical Aid Fund news, health tips, and events. Learn more about healthcare in Zimbabwe and how Genfin supports your well-being.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {blogs.map((blog, bl) => (
                                <div className="grid" key={bl}>
                                    <div className="entry-media">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="entry-date">
                                        <h4>{blog.create_day}</h4>
                                        <span>{blog.create_month} <br/>{blog.create_year}</span>
                                    </div>
                                    <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;