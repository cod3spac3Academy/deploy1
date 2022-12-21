import './CardImg.css';

function CardImg(props) {
    return (
        <div className="img-container">
            <div className="img-wrapper">
                <img src={props.freelancer.img.path} alt={props.freelancer.img.text} />
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default CardImg;