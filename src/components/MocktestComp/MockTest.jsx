import Mockcard from "./Mockcard"
import "./style/mock.css"

const MockTest = () => {
    return (
        <div>
            <div className='mockInfo'>
                <div>
                    <h2>Mock Test</h2>
                    <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
                </div>
            </div>
            <div className="mockBody">
                <p className="mockHeading">Feature Mock Tests</p>
                <p className="pastMock">PAST MOCK TEST</p>
            </div>
            <div className="mockDataView">
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
                <Mockcard />
            </div>
            <div className="practiceTest">
                <p className="mockHeading">Practice Tests</p>
                <p className="pastMock">Topic Wise</p>
            </div>
            <div className="practiceTestCard">
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
                <Mockcard practice={"topic"} />
            </div>
            <div className="practiceTest">
                <p className="pastMock">Company Wise</p>
            </div>
            <div className="practiceTestCard">
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
                <Mockcard practice={"company"} />
            </div>
        </div>
    )
}

export default MockTest