import './style/style.css'
const FullStackHome = () => {
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
                        <button>Download Syllabus</button>
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
        </div>
    )
}

export default FullStackHome