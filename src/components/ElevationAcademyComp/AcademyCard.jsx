/* eslint-disable react/prop-types */
const AcademyCard = ({ heading, info, img }) => {
    return (
        <div className='wp-academy-card'>
            <div>
                <img src={img} alt="" />
                <h4>{heading}</h4>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default AcademyCard