import './CardInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCircleCheck, faDollar, faEnvelope, faPhoneFlip, faStar } from '@fortawesome/free-solid-svg-icons'

function CardInfo(props) {
    return (
        <div className="info-container">
            <h3>{props.freelancer.title} {props.freelancer.last_name}</h3>
            <p>{props.freelancer.role}</p>
            <div className='hire'>
                <div>Rate: <span className='price'>${props.freelancer.fee}/hr</span></div>
                <button className='hire-button'>Hire Me</button>
            </div>
            <div className='rating'>
                <div>5.0</div>
                <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div>({props.freelancer.reviews} reviews)</div>
            </div>
            <div className='icons'>
                <div className='verified'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>
                        Verified
                    </span>
                </div>
                <span className="circle available">
                    <FontAwesomeIcon icon={faDollar} />
                </span>
                <span className="circle available">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="circle not-available">
                    <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <span className="circle not-available">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                </span>
            </div>
        </div>
    );
}

export default CardInfo;