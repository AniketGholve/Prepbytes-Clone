import Slider from 'react-slick'
import AcademyCard from './AcademyCard'
import DreamJob from './DreamJob'
import NewEvent from './NewEvent'
import { academyCardData, dreamJobData, newEventData, placedCompanyImg, studnetReview, syllabusData } from './data/data'
import './style/style.css'
import Syllabus from './Syllabus'
const ElevationAcademyHome = () => {
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
                    {
                        newEventData.map((item, key) => <NewEvent key={key} id={item.id} heading={item.heading} img={item.img} date={item.date} />)
                    }
                </div>
            </div>
            <div>
                <h1 className='dream-job-heading'>How will you reach to your dream Job?</h1>
                <div >
                    {
                        dreamJobData.map((item, key) => <DreamJob key={key} id={item.id} heading={item.heading} info={item.info} img={item.img} color={item.color} />)
                    }
                </div>
            </div>
            <h1 className='wp-academy'>Why PrepBytes Elevation Academy?</h1>
            <div className='wp-academy-blog'>
                {
                    academyCardData.map((item, key) => <AcademyCard key={key} heading={item.heading} info={item.info} img={item.img} />)
                }
            </div>
            <div className='ps-comp'>
                <h1 className='ps-heading'>Program Syllabus</h1>
                <p className='ps-heading'>Learn from the best and be prepared to crack full stack developer jobs</p>
                {
                    syllabusData.map((item, key) => <Syllabus key={key} id={item.id} dates={item.dates} heading={item.heading} subHeading={item.subHeading} topic={item.topic} color={item.color} />)
                }
            </div>
            <div className='upcomingBatch'>
                <div>
                    <p className='upcomingBatchHeading'>Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN</p>
                    <button className='upcomingBatchBtn'>Apply Now</button>
                </div>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp" alt="" />
                </div>
            </div>

            <div className='student-review'>
                <p className='student-review-heading1'>Testimonials</p>
                <p className='student-review-heading2'>Our Students Speaks</p>
                <Slider {...settings}>
                    {
                        studnetReview.map((item, key) => < >
                            <div className='student-review-div'>
                                <div className='student-review-div-info'>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p className='student-name-heading'>{item.name}</p>
                                        <p className=''>{item.company}  </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='student-reviews-para'>{item.info}</p>
                                </div>
                            </div>
                        </>)
                    }
                </Slider>
            </div>
            <div className='placedStudent'>
                <h1 className='placedStudentHeading'>Where our Students are placed</h1>
                <p className='placedStudentPara'>You guarantee hard work, We guarantee placements</p>
                <div className='placedCompany'>
                    {
                        placedCompanyImg.map((item, key) =>
                            <div className='placedCompanyDiv' key={key}>
                                <img src={item} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ElevationAcademyHome