/* eslint-disable react/prop-types */

const NewEvent = ({ id, heading, img, date }) => {
    return (
        <div className={id == 2 ? "eventInfo eventInfoOdd" : 'eventInfo'}>
            <img src={img} alt="" />
            <p className='eventInfoHeading'>{heading}</p>
            <p className='eventInfoDate'>{date}</p>
        </div>
    )
}

export default NewEvent