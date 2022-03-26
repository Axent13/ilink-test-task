import './FlashMessageError.scss';
import '../../assets/flash-message-error.png';
import '../../assets/flash-message-cross-icon-white.png';
import '../../assets/flash-message-cross-icon-black.png';
import '../../assets/flash-message-error-mobile.png';

function FlashMessageError() {
  return (
    <div className="flash-message-error">
      <div className="flash-message-error__message">
        <p className="flash-message-error__message-header">Что-то не так...</p>
        <p className="flash-message-error__message-text">
          Не получилось отправить отзыв.<br/>
          Попробуйте еще раз!
        </p>
      </div>
      <div className="flash-message-error__close-button-container">
        <button className="flash-message-error__close-button"></button>
      </div>
    </div>
  );
}

export default FlashMessageError;
