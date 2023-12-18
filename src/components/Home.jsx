import { useRef } from "react"

const Home = () => {
    let ref = useRef()
    function handleClick() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <div className='homeComp1'>
                <div className="HomeHeader__main__left">
                    <h1 className="HomeHeader__main__left--heading">Start your journey of success</h1>
                    <h1 className="HomeHeader__main__left--subheading">Personalised Coding Programs to make coding easier for you</h1>
                    <p className="HomeHeader__main__left-list-item--text">Want to know how PrepBytes can help you?</p>
                    <button className="HomeHeader__main__left-buttons--button-enroll" onClick={handleClick}>Know More</button>
                </div>
                <div className="HomeHeader__main__right">
                    <img className="HomeHeader__main__right--img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" alt="header" />
                </div>
            </div>
            <div className="home-achivement">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp" alt="" />
            </div>
            <section className="codingJourny">
                <div className="codingJournyLeft">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt="" />
                </div>
                <div className="codingJournyRight">
                    <p className="codingJournyheading">How PrepBytes Mentorship driven Personalised Learning works?</p>
                    <div>
                        <p className="weeklyPlanCardHeading" >
                            Personalised Lectures &amp; Weekly Plan
                        </p>
                        <div className="weeklyPlan">
                            <div className="infoDiv infoColorOrange">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg" alt="" />
                                <p>Get learning videos & weekly plan based on your coding skills</p>
                            </div>
                            <div className="arrowRight">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                        </div>
                        <div className="codingAssignmentHeading">
                            <p>PERSONALISED CODING ASSIGNMENTS</p>
                        </div>
                        <div className="weeklyPlan">
                            <div className="arrowLeft">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                            <div className="infoDiv infoColorYellow">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg" alt="" />
                                <p>Practice coding questions that adapts based on your progress</p>
                            </div>
                        </div>
                        <p className="doughtSolvingHeading" >
                            DOUBT SOLVING BY CODING EXPERTS
                        </p>
                        <div className="weeklyPlan">
                            <div className="infoDiv infoColorGreen">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg" alt="" />
                                <p>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            </div>
                            <div className="arrowRight">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                        </div>
                        <div className="codeLiveHeading">
                            <p>CODE LIVE WITH TOP CODERS</p>
                        </div>
                        <div className="weeklyPlan">
                            <div className="arrowLeft">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                            <div className="infoDiv infoColorPink">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg" alt="" />
                                <p>Topic wise Live Coding sessions with top rated coders</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <p className="courseHeading" ref={ref}>I WANT TO</p>
                </div>
                <div className="courses">
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_prepare_for_campus.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp" alt="" />
                        <h2 className="color-blue">Prepare for Campus Placements</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_master_competetive.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp" alt="" />
                        <h2 className="color-pink">Master Competitive Programming</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_learn_full_mern.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp" alt="" />
                        <h2 className="color-green">Build Development Projects</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="expHomeDiv">
                    <div className="expBoxHome">
                        <p>Are you an Experienced Professional willing to Switch?</p>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg" alt="" />
                            </div>
                            <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                        </div>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg" alt="" />
                            </div>
                            <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
                        </div>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg" alt="" />
                            </div>
                            <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                        </div>
                        <div>
                            <p className="courseDetails"> <span> PrepBytes Elevation Academy</span> -  4 months Full Stack Program with Job Guarantee</p>
                        </div>
                        <button className="HomeHeader__main__left-buttons--button-enroll">Know More</button>
                    </div>
                    <div className="expBoxHomeImg">
                        <div className="expBoxHomeImg-div1">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg" alt="" />
                        </div>
                        <div className="expBoxHomeImg-div2">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg" alt="" />
                            <div>
                                <img className="interviewImg" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="founderSection">
                <div className="founderHome">
                    <div className="founderCardBg">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/know_details_back.svg" alt="" />
                    </div>
                    <div className="founderCard">
                        <div>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="" />
                        </div>
                        <heading className="founderInfo">
                            <h1>Mamta Kumari</h1>
                            <h3>Co-Founder PrepBytes</h3>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
                        </heading>
                    </div>
                    <div className="freeSeminar">
                        <p>Attend Free sessions with industry experts and get valuable guidance</p>
                        <info>How to master competitive coding?</info>
                        <button className="HomeHeader__main__left-buttons--button-enroll">Know More</button>
                        <hr />
                        <info>How to crack coding interviews?</info>
                        <button className="HomeHeader__main__left-buttons--button-enroll">Know More</button>
                    </div>
                </div>
            </section>
            <section className="instituteInfo">
                <div className="cardInfo">
                    <div className="cardInfoDiv1">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv2">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv3">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv4">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                </div>
                <div className="instituteInfoImg">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp" alt="" />
                </div>
            </section>
            <section className="placedStudent">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png" alt="" />
            </section>
        </>
    )
}

export default Home