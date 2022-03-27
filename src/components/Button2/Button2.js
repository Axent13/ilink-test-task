import './Button2.scss';

function Button2(props) {
  return (
    <button className="button2" type="button">
      <div className="button2__text">{props.text}</div>
    </button>
  );
}

export default Button2;
