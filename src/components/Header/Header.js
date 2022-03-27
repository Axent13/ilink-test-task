import './Header.scss';
import '../../assets/images/user-avatar.png';
import ilinkLogo from '../../assets/images/ilink-logo.png';
import Button2 from '../Button2/Button2';

function Header(props) {
  return (
    <header className="header">
      <div className="header__user-avatar-and-name">
        <div class="header__user-avatar"></div>
        <p className="header__user-name">{props.userName}</p>
      </div>
      <div className="header__logo">
        <img src={ilinkLogo} alt="ilink Academy" />
      </div>
      <div className="header__lk">
        <Button2
          text="Панель управления"
        />
      </div>
    </header>
  );
}

export default Header;
