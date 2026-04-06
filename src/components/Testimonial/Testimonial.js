import React from 'react';



const Testimonial = (prop) => {

    return (
        <section className={`testimonials-section section-padding ${prop.tClass} mt-10`}>
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonials-area">
                            <p>“Genfin Medical Aid Fund made it possible for my family to get quality healthcare when we needed it most. Their support and fast claims process gave us peace of mind.”</p>
                            <span className="quoter">— Genfin Member</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;