import './CardsContainer.css';

function CardsContainer(props) {
  return (
    <div className="card-container">{props.children}</div>
  );
}

export default CardsContainer;