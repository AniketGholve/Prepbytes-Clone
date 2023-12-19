import Slider from 'react-slick'
import './style/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MasterCompetitiveHome = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slides'
    };
    return (
        <div className="masterCompetitiveHome">
            <div className='mch-home'>
                <div>
                    <h1 className='mch-heading'>MASTER COMPETITIVE PROGRAMMING</h1>
                    <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <b>Under The Guidance Of Top Competitive Programmers</b></p>
                    <button className="btn btn-enrol">Enrol Now</button>
                </div>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp" alt="" />
                </div>
            </div>
            <div className='mch-info'>
                <div className='mch-info-div'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
                    <p>9 months intensive bootcamp</p>
                </div>
                <div className='mch-info-div'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
                    <p>9 months intensive bootcamp</p>
                </div>
                <div className='mch-info-div'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
                    <p>9 months intensive bootcamp</p>
                </div>
                <div className='mch-info-div'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
                    <p>9 months intensive bootcamp</p>
                </div>
            </div>
            <div>
                <h5 className='mch-mentors-heading'>Get Guidance From Industry Leading Mentors</h5>
                <p className='mch-mentors-info'>Other Mentors You Will Be Interacting With</p>
                <div className='mch-mentor-gallary'>
                    <div className='mch-mentor-card'>
                        <div className='mch-mentor-img'>
                            <img className='mch-mentor-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                        </div>
                        <div>
                            <h3>Mamta</h3>
                            <p>Co-Founder, PrepBytes</p>
                            <img className='companyImg' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                        </div>
                    </div>
                    <div className='mch-mentor-card'>
                        <div className='mch-mentor-img'>
                            <img className='mch-mentor-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                        </div>
                        <div>
                            <h3>Mamta</h3>
                            <p>Co-Founder, PrepBytes</p>
                            <img className='companyImg' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                        </div>
                    </div>
                    <div className='mch-mentor-card'>
                        <div className='mch-mentor-img'>
                            <img className='mch-mentor-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                        </div>
                        <div>
                            <h3>Mamta</h3>
                            <p>Co-Founder, PrepBytes</p>
                            <img className='companyImg' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h5 className='mch-mentors-heading'>Master Competitive Programming With Us</h5>
                </div>
                <div className='mch-cp-wu'>
                    <div className="courseFeatureBgImg">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg" alt='' />
                    </div>
                    <ul className='courseFeatureDetailsUl'>
                        <li>
                            <div className='courseFeatureDetails courseDetailsEvenDiv'>
                                <div className='courseFeatureDetailsDiv'>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv courseDetailsEvenDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsOddDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsEvenDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsOddDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsEvenDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsOddDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsEvenDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='courseFeatureDetails courseDetailsOddDiv'>
                                <div className='courseFeatureDetailsDiv '>
                                    <h5>Personalised Program</h5>
                                    <p>Master your skills from where you are, with India only personalised program </p>
                                </div>
                                <div className='courseFeatureImgDiv'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mch-instituteInfo'>
                <div>
                    <h1>10K+</h1>
                    <p>Students Enrolled</p>
                </div>
                <div>
                    <h1>1000K+</h1>
                    <p>Doubts Solved</p>
                </div>
                <div>
                    <h1>2k+ hrs</h1>
                    <p>Mentor Interaction</p>
                </div>
            </div>
            <h1 className='mch-coding-context'>Crack Reputed Coding Contests</h1>
            <div className='mch-coding-context-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp" alt="" />
            </div>
            <h1 className='mch-coding-context'>Curriculum</h1>
            <div className='mch-curriculum'>
                <div>
                    <div className="courseSyllabus-div">
                        <img className="courseSyllabus-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
                    </div>
                    <div className="courseSyllabus-div">
                        <img className="courseSyllabus-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
                    </div>
                    <div className="courseSyllabus-div">
                        <img className="courseSyllabus-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
                    </div>
                    <div className='courseSyllabus-div-img'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="" />
                    </div>
                </div>
                <div className='courseDataList'>
                    <ul>
                        <li className='mch-topic-list'>C/C++/Java/Python Overview</li>
                        <li className='mch-topic-list'>Logic Building</li>
                        <li className='mch-topic-list'>Data Types</li>
                        <li className='mch-topic-list'>Loops and Conditions</li>
                        <li className='mch-topic-list'>Pattern Programming</li>
                        <li className='mch-topic-list'>Operators and Expressions</li>
                        <li className='mch-topic-list'>Input/Output</li>
                        <li className='mch-topic-list'>Functions</li>
                        <li className='mch-topic-list'>Functions and OOPs(Python)</li>
                        <li className='mch-topic-list'>Pointers(C/C++)</li>
                        <li className='mch-topic-list'>Arrays</li>
                        <li className='mch-topic-list'>Structures</li>
                        <li className='mch-topic-list'>Character Arrays and Strings</li>
                        <li className='mch-topic-list'>Recursion</li>
                        <li className='mch-topic-list'>Bit Manipulation</li>
                        <li className='mch-topic-list'>STLs(C++)</li>
                        <li className='mch-topic-list'>Collections (Java)</li>
                        <li className='mch-topic-list'>Set, List, Tuples, Dictionary(Python)</li>
                    </ul>
                </div>
            </div>
            <div className='mch-batch'>
                <h4>SELECT BATCH</h4>
                <div className='mch-enroll-details'>
                    <div className='mch-enroll-date-selected'>
                        <h3>1st MAY</h3>
                        <p>Enrolment Started</p>
                    </div>
                    <div className='mch-enroll-date-not-selected'>
                        <h5>15th MAY</h5>
                        <p>Enrolment Started</p>
                    </div>
                    <div></div>
                    <div className='mch-enroll-div'>
                        <h1 className='mch-enroll-price'>₹ 25000</h1>
                        <button className='mch-enroll-btn'>Enroll Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mch-coding-context'>This Might Be You</h1>
                <Slider  {...settings} style={{ width: "60%", margin: "auto" }}>
                    <div className='mch-dream-card'>
                        <div className='mch-dream-name'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="" />
                            <h3 className=''>Shivam Gupta</h3>
                        </div>
                        <div className='mch-dream-info'>
                            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                        <div className='mch-dream-person'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <div className=''>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mch-dream-card'>
                        <div className='mch-dream-name'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="" />
                            <h3 className=''>Shivam Gupta</h3>
                        </div>
                        <div className='mch-dream-info'>
                            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                        <div className='mch-dream-person'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <div className=''>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mch-dream-card'>
                        <div className='mch-dream-name'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="" />
                            <h3 className=''>Shivam Gupta</h3>
                        </div>
                        <div className='mch-dream-info'>
                            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                        <div className='mch-dream-person'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <div className=''>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mch-dream-card'>
                        <div className='mch-dream-name'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="" />
                            <h3 className=''>Shivam Gupta</h3>
                        </div>
                        <div className='mch-dream-info'>
                            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                        <div className='mch-dream-person'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <div className=''>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mch-dream-card'>
                        <div className='mch-dream-name'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="" />
                            <h3 className=''>Shivam Gupta</h3>
                        </div>
                        <div className='mch-dream-info'>
                            <p>My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.</p>
                        </div>
                        <div className='mch-dream-person'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg" alt="" />
                            <div className=''>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='courseEnd'>
                <h1 className='mch-coding-context'>By The End Of This Course, You Will Be Able To</h1>
                <div className='courseEndDiv'>
                    <div className='courseEndDivImg'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vecto2.webp" alt="" />
                    </div>
                    <div className='courseEndInfo'>
                        <div className='courseEndDivInfo'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" />
                            <div>
                                <h5>4 star and above in CodeChef</h5>
                            </div>
                        </div>
                        <div className='courseEndDivInfo'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" />
                            <div>
                                <h5>4 star and above in CodeChef</h5>
                            </div>
                        </div>
                        <div className='courseEndDivInfo'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" />
                            <div>
                                <h5>4 star and above in CodeChef</h5>
                            </div>
                        </div>
                        <div className='courseEndDivInfo'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" />
                            <div>
                                <h5>4 star and above in CodeChef</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterCompetitiveHome