import './FlashMessageSuccess.scss';
import '../../assets/flash-message-success.png';
import '../../assets/flash-message-cross-icon-white.png';
import '../../assets/flash-message-cross-icon-black.png';
import '../../assets/flash-message-success-mobile.png';

function FlashMessageSuccess() {
  return (
    <div className="flash-message-success">
      <div className="flash-message-success__message">
        <p className="flash-message-success__message-header">Успешно!</p>
        <p className="flash-message-success__message-text">
          Спасибо за отзыв о нашей компании :)
        </p>
      </div>
      <div className="flash-message-success__close-button-container">
        <button className="flash-message-success__close-button"></button>
      </div>
    </div>
  );
}

export default FlashMessageSuccess;
