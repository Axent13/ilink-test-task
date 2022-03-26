import './Header.scss';
import '../../assets/images/no-avatar.png';
import ilinkLogo from '../../assets/images/ilink-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__user-avatar-and-name">
        <div class="header__user-avatar"></div>
        <p className="header__user-name">Имя Фамилия</p>
      </div>
      <div className="header__logo">
        <img src={ilinkLogo} alt="ilink Academy" />
      </div>
      <div className="header__lk">
        <button className="header__lk-button" type="button">Личный кабинет</button>
      </div>
    </header>
  );
}

export default Header;
