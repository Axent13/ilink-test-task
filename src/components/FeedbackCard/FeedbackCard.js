import './FeedbackCard.scss';
import '../../assets/images/no-avatar.png';

function FeedbackCard() {
  return (
    <div className="feedback-card">
      <div className="feedback-card__meta-info">
        <div className="feedback-card__user-avatar"></div>
        <div className="feedback-card__user-name-and-position">
          <p className="feedback-card__user-name">Имя Фамилия</p>
          <p className="feedback-card__user-position">Должность (обязательно)</p>
        </div>
        <p className="feedback-card__feedback-date">ДД.ММ.ГГГГ</p>
      </div>
      <p className="feedback-card__feedback">
        Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают 
        всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу 
        - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка
         ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату 
         выплачивают всегда вовремя.
      </p>
    </div>
  );
}

export default FeedbackCard;
