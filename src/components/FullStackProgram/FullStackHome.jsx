import { Link } from 'react-router-dom'
import './style/style.css'
import Slider from 'react-slick'
const FullStackHome = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slides-info'
    };
    return (
        <div>
            <div className='fch-home-main'>
                <div className="fch-home">
                    <div className='fch-home-left'>
                        <p>Partner with</p>
                        <div className='fch-home-left-img'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg" alt="" />
                        </div>
                        <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                        <h3>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</h3>
                        <Link to={"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf"} target='_blank'>
                            <button>Download Syllabus</button>
                        </Link>
                    </div>
                    <div className='fch-home-right'>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Next Batch Start: 1st may,2023</p>
                            <p className='fch-home-right-text'>Limited seats available</p>
                        </div>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Next Batch Start: 1st may,2023</p>
                            <p className='fch-home-right-text'>Limited seats available</p>
                        </div>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Next Batch Start: 1st may,2023</p>
                            <p className='fch-home-right-text'>Limited seats available</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fch-batch'>
                <h3>Select Batch</h3>
                <div>
                    <input type="radio" checked />
                    <div>
                        <h4>1st May</h4>
                        <p>Enrolment Started</p>
                    </div>
                </div>
                <div>
                    <input type="radio" />
                    <h4>15th May</h4>
                    <p>Enrolment Started</p>
                </div>
                <div>
                    <h2 className='price-enroll-now'>₹30000</h2>
                    <button className='btn-enroll-now'>Enroll Now</button>
                </div>
            </div>
            <div className='fch-lang-tool'>
                <div className='fch-lang-tool-info'>
                    <p className='fch-lang-tool-heading'>Languages & Tools you will learn</p>
                    <p className='fch-lang-tool-text'>Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>
                </div>
                <div className='fch-lang-tool-img'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png" alt="" />
                </div>
            </div>
            <div className='fch-journy-main'>
                <div>
                    <h1 className='fch-journy-header'>How will your journey look like?</h1>
                    <p className='fch-journy-para'>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
                </div>
                <div className='fch-journy-details'>
                    <div className='fch-journy-details-div1'>
                        <div className='fch-journy-details-list'>
                            <h1 className='fch-journy-details-list-num'>1</h1>
                            <h4>Batch Commencement</h4>
                        </div>
                        <div className='fch-journy-details-list'>
                            <h1 className='fch-journy-details-list-num'>2</h1>
                            <h4>Batch Commencement</h4>
                        </div>
                        <div className='fch-journy-details-list'>
                            <h1 className='fch-journy-details-list-num'>3</h1>
                            <h4>Batch Commencement</h4>
                        </div>
                        <div className='fch-journy-details-list'>
                            <h1 className='fch-journy-details-list-num'>4</h1>
                            <h4>Batch Commencement</h4>
                        </div>
                        <div className='fch-journy-details-list'>
                            <h1 className='fch-journy-details-list-num'>5</h1>
                            <h4>Batch Commencement</h4>
                        </div>
                    </div>
                    <div className='fch-journy-details-div2'>

                    </div>
                </div>
            </div>
            <div className='stack-program'>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp" alt="" />
                </div>
                <div className='stack-program-info'>
                    <h1>What you will be after finishing the program?</h1>
                    <div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg" alt="" />
                            <div>
                                <p>Certified Full stack Developer</p>
                            </div>
                        </div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg" alt="" />
                            <div>
                                <p>Experience of Real world work</p>
                            </div>
                        </div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg" alt="" />
                            <div>
                                <p>Ready to crack any web developer interview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='student-review'>
                <p className='student-review-heading1'>Testimonials</p>
                <p className='student-review-heading2'>Our Students Speaks</p>
                <Slider {...settings}>
                    <div className='student-review-div'>
                        <div className='student-review-div-info'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <p className='student-name-heading'>Shivam Gupta</p>
                        </div>
                        <div>
                            <p className='student-reviews-para'>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                    </div>
                    <div className='student-review-div'>
                        <div className='student-review-div-info'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <p className='student-name-heading'>Shivam Gupta</p>
                        </div>
                        <div>
                            <p className='student-reviews-para'>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                    </div>
                    <div className='student-review-div'>
                        <div className='student-review-div-info'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <p className='student-name-heading'>Shivam Gupta</p>
                        </div>
                        <div>
                            <p className='student-reviews-para'>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                    </div>
                    <div className='student-review-div'>
                        <div className='student-review-div-info'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <p className='student-name-heading'>Shivam Gupta</p>
                        </div>
                        <div>
                            <p className='student-reviews-para'>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                    </div>
                    <div className='student-review-div'>
                        <div className='student-review-div-info'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <p className='student-name-heading'>Shivam Gupta</p>
                        </div>
                        <div>
                            <p className='student-reviews-para'>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='fch-last-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/digital-marketing/Feature.webp" alt="" />
            </div>
        </div>
    )
}

export default FullStackHome