import './style/style.css'
const ElevationAcademyHome = () => {
    return (
        <div>
            <div className="elevationAcademyHome">
                <div className='elevationAcademyHomeInfo'>
                    <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                    <p>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
                    <ul>
                        <li>
                            <img src="/public/right-arrow.svg" alt="" />
                            Complete Live Class from experts</li>
                        <li>
                            <img src="/public/right-arrow.svg" alt="" />
                            Be the best Full stack developer
                        </li>
                        <li>
                            <img src="/public/right-arrow.svg" alt="" />
                            Job Guarantee
                        </li>
                    </ul>
                    <div className='elevationAcademyHomeBtn'>
                        <button className='elevationAcademyHomeBtn-1'>Apply Now</button>
                        <button className='elevationAcademyHomeBtn-2'>Get a call back</button>
                    </div>
                </div>
                <div className='elevationAcademyHomeImg'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp" alt="" />
                </div>
            </div>
            <div className='new_batch'>
                <div>
                    <p className='new_batch_leftHeading'>For 2023, 2022 & 2021 graduates</p>
                    <p className='new_batch_date'>Batch Starting: 1st May 2023</p>
                </div>
                <div className='new_batch_events'>
                    <div className='eventInfo'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="" />
                        <p className='eventInfoHeading'>Free Webinar</p>
                        <p className='eventInfoDate'>17th April</p>
                    </div>
                    <div className='eventInfo eventInfoOdd'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="" />
                        <p className='eventInfoHeading'>Free Webinar</p>
                        <p className='eventInfoDate'>17th April</p>
                    </div>
                    <div className='eventInfo'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="" />
                        <p className='eventInfoHeading'>Free Webinar</p>
                        <p className='eventInfoDate'>17th April</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='dream-job-heading'>How will you reach to your dream Job?</h1>
                <div className='dream-process'>
                    <div className='dream-process-div'>
                        <div className='dream-process-div1'>
                            <span className='dream-process-span1'>1</span>
                            <span className='dream-process-span2'>Application & Shortlisting</span>
                        </div>
                        <div className='dream-process-div1'>
                            <span className='dream-process-span1'>2</span>
                            <span className='dream-process-span2'>Application & Shortlisting</span>
                        </div>
                        <div className='dream-process-div1'>
                            <span className='dream-process-span1'>2</span>
                            <span className='dream-process-span2'>Application & Shortlisting</span>
                        </div>
                        <div className='dream-process-div1'>
                            <span className='dream-process-span1'>4</span>
                            <span className='dream-process-span2'>7 Months Program</span>
                        </div>
                        <div className='dream-process-div1'>
                            <span className='dream-process-span1'>5</span>
                            <span className='dream-process-span2'>Guaranteed Placement</span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ElevationAcademyHome