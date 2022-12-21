import styled from 'styled-components';

const SubmitButton = styled.button.attrs(props =>({
  type: props.type || 'button',
}))`
  width: 100%;
  background: #3b5998;
  font: inherit;
  padding: .7em 1.5em;
  border: 1px solid 8b9dc3;
  color: white;
  cursor: pointer;
  border-radius: .3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all .2s ease-out;

  @media (min-width: 768px) {
    width: auto;
  }


  &:hover,
  &:active {
    background: #5972a9;
    border-color: #8b9dc3;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    transition: all .2s ease-out;
  }
`;

export default SubmitButton;