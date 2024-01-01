/* eslint-disable react/prop-types */

const NewEvent = ({ id, heading, img, date }) => {
    return (
        <div className={id == 2 ? "eventInfo eventInfoOdd" : 'eventInfo'}>
            <img src={img} alt="" />
            <div>
                <p className='eventInfoHeading'>{heading}</p>
                <p className='eventInfoDate'>{date}</p>
            </div>
        </div>
    )
}

export default NewEvent