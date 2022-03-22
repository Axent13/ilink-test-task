import './Header.css';
import '../../assets/no-avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="header__user-avatar-and-name">
        <div class="header__user-avatar"></div>
        <p className="header__user-name">Имя Фамилия</p>
      </div>
    </header>
  );
}

export default Header;
