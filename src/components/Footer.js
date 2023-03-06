import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="mailto:vildan-guenay@hotmail.com" className="footerLink">
          mailto: vildan-guenay@hotmail.com
        </a>
      </div>
      <div className="socialIcons">
        <a href="https://www.instagram.com/vildanguenay/" alt="">
          <i>
            <BsInstagram />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/vildan-guenay" alt="">
          <i>
            <BsLinkedin />
          </i>
        </a>
        <a href="https://github.com/vildanguenay" alt="">
          <i>
            <BsGithub />
          </i>
        </a>
      </div>
      <p>
        <BiCopyright /> 2022 Vildan Günay
      </p>
    </footer>
  );
};
