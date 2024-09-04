import { createForm } from '../../components/Form/Form';
import './Landing.css';

export const createLanding = () => {
  const divBg = document.createElement('div');
  divBg.className = 'background';

  const circle1 = document.createElement('div');
  circle1.className = 'circle';

  const circle2 = document.createElement('div');
  circle2.className = 'circle';

  divBg.appendChild(circle1);
  divBg.appendChild(circle2);
  document.body.appendChild(divBg);

  createForm('Create your Account');
};
