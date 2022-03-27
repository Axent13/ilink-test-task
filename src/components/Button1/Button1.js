import './Button1.scss';

function Button1(props) {
  return (
    <button className="button1" type="button">
      {props.text}
    </button>
  );
}

export default Button1;
