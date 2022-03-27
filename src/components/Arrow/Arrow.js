import './Arrow.scss';
import '../../assets/images/arrow.png';
import '../../assets/images/arrow-hovered.png';
import '../../assets/images/arrow-disabled.png';


function Arrow(props) {
  if (props.isLeft) {
    return <button className="arrow arrow_left"></button>;
  }

  return <button className="arrow"></button>;
    
}

export default Arrow;
