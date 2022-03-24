import './Footer.css';
import vkIcon from '../../assets/vk-icon.png';
import redditIcon from '../../assets/reddit-icon.png';
import telegramIcon from '../../assets/telegram-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
      <ul className="footer__social-icons">
        <li>
          <a href="change/me" rel="noopener noreferer">
            <img className="footer__icon" src={vkIcon} alt="Vk link" />
          </a>
        </li>
        <li>
          <a href="change/me" rel="noopener noreferer">
            <img className="footer__icon" src={redditIcon} alt="Reddit link" />
          </a>
        </li>
        <li>
          <a href="change/me" rel="noopener noreferer">
            <img className="footer__icon" src={telegramIcon} alt="Telegram link" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
