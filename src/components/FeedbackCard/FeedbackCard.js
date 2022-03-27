import './FeedbackCard.scss';
import '../../assets/images/no-avatar.png';

function FeedbackCard(props) {
  return (
    <div className="feedback-card">
      <div className="feedback-card__meta-info">
        <div className="feedback-card__user-avatar"></div>
        <div className="feedback-card__user-name-and-position">
          <p className="feedback-card__user-name">{props.userName}</p>
        </div>
        <p className="feedback-card__feedback-date">{props.feedbackDate}</p>
      </div>
      <p className="feedback-card__feedback">{props.feedbackText}</p>
    </div>
  );
}

export default FeedbackCard;
