import './CardWrapper.css';

function CardWrapper(props) {
  return (
    <div className="outer-card">
        {props.children}
    </div>
  );
}

export default CardWrapper;