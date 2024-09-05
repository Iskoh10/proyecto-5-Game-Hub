import './SignUp.css';

export const signUpButton = document.querySelector('.signUp');
signUpButton.addEventListener('click', console.log('hola'));

export const sendSignUp = () => {
  const userInput = document.querySelector('#username');
  console.log(userInput);
};
