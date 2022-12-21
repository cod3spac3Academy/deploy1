// import './About.css';
import CardWrapper from "../components/Card/CardWrapper";
import CardImg from "../components/Card/CardImg";
import CardInfo from '../components/Card/CardInfo';
import CardsContainer from '../components/Card/CardsContainer';
import { freelancers } from '../db/freelancers';

function About() {

  return (

    <main>
      <CardsContainer>
        {freelancers.map((freelancer, index) => {
          return (
            <CardWrapper key={index}>
              <CardImg freelancer={freelancers[index]}></CardImg>
              <CardInfo freelancer={freelancers[index]}></CardInfo>
            </CardWrapper>
          )
        })}
      </CardsContainer>
    </main>

  );
}

export default About;