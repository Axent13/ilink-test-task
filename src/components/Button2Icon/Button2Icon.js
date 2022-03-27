import './Button2Icon.scss';
import '../../assets/images/cross-icon.png';

function Button2Icon(props) {
  return (
    <button className="button2Icon" type="button">
      <div className="button2Icon__content-wrapper">
        <div className="button2Icon__icon"></div>
        <div className="button2Icon__text">{props.text}</div>
      </div>
    </button>
  );
}

export default Button2Icon;
