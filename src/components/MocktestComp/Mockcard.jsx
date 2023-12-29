/* eslint-disable react/prop-types */
import "./style/mock.css"

const Mockcard = ({ practice, name, date, participants, duration, img }) => {
  const buyTest=()=>{
    
  }
  return (
    <div className={practice === "topic" ? "practiceCard" : practice === "company" ? "companyCard" : "mockCard"}>
      {!practice && <div className="mockOptions">
        <img src="/info.png" alt="" />
        <img src="/share.svg" alt="" />
      </div>}
      <div className='mockCardDiv'>
        <img src={img ?? "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"} alt="" />
      </div>
      {practice !== "company" && <div className="mockCardInfo">
        <p>{name}</p>
      </div>}
      {!practice && <div className="cardDetails">
        <div className="cardDates">
          <p>{date}</p>
          <p className="detailsName">Date</p>
        </div>
        <div className="cardParticipant">
          <p>{participants}</p>
          <p className="detailsName">Participant</p>
        </div>
        <div className="cardDuration">
          <p>{duration}</p>
          <p className="detailsName">Duration</p>
        </div>
      </div>}
      <div className="btn-div" >
        <button className="btn btn-test" onClick={()=>buyTest(name)}>Test Now</button>
      </div>
    </div>
  )
}

export default Mockcard