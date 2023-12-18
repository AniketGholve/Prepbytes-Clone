/* eslint-disable react/prop-types */
import "./style/mock.css"

const Mockcard = ({ practice }) => {
  return (
    <div className={practice === "topic" ? "practiceCard" : practice === "company" ? "companyCard" : "mockCard"}>
      {!practice && <div className="mockOptions">
        <img src="/public/info.png" alt="" />
        <img src="/public/share.svg" alt="" />
      </div>}
      <div className='mockCardDiv'>
        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg" alt="" />
      </div>
      {practice !== "company" && <div className="mockCardInfo">
        <p>Aptitude Placement 2022 - Mock test 3</p>
      </div>}
      {!practice && <div className="cardDetails">
        <div className="cardDates">
          <p>Sep24</p>
          <p className="detailsName">Date</p>
        </div>
        <div className="cardParticipant">
          <p>1101</p>
          <p className="detailsName">Participant</p>
        </div>
        <div className="cardDuration">
          <p>60 min</p>
          <p className="detailsName">Duration</p>
        </div>
      </div>}
      <div className="btn-div" >
        <button className="btn btn-test">Test Now</button>
      </div>
    </div>
  )
}

export default Mockcard