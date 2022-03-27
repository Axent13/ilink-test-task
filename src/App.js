import './App.scss';
import './assets/images/user-photo.png';
import femaleIcon from './assets/images/female-icon.png';
import petIcon from './assets/images/pet-icon.png';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button1 from './components/Button1/Button1';
import Button2 from './components/Button2/Button2';
import Button2Icon from './components/Button2Icon/Button2Icon';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import FlashMessageError from './components/FlashMessageError/FlashMessageError';
import FlashMessageSuccess from './components/FlashMessageSuccess/FlashMessageSuccess';
import Arrow from './components/Arrow/Arrow';

function App() {
  return (
    <div className="app">
      <Header
        userName="Яна Валиева"
      />
      <main className="app__main">
        <p className="app__welcome-text">
          Добро пожаловать в&nbsp;академию!
        </p>
        <section className="app__user-photo-and-info">
          <div className="app__user-photo"></div>
          <article className="app__user-info">
            <div className="app__user-name-and-date">
              <p className="app__user-name">Яна Валиева</p>
              <p className="app__user-date">08.10.1999</p>
            </div>
            <div className="app__user-city-gender-and-age">
              <p className="app__user-city"><strong>Город:</strong> Томск</p>
              <p className="app__user-gender">
                <strong>Пол:</strong> женщина
                <img src={femaleIcon} alt="female" />
              </p>
              <p className="app__user-age"><strong>Возраст:</strong> 22</p>
            </div>
            <p className="app__user-about">
              <strong>О себе:</strong> Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты!
              <br/>
              <br/>
              <em>BTW: И да, у меня есть милая кошка :)</em>
            </p>
            <p className="app__user-pet">
              <img src={petIcon} alt="female" />
              <strong>Домашнее животное:</strong> есть
            </p>
          </article>
        </section>
        <section className="app__feedbacks-section-and-arrows">
          <div className="app__feedbacks-section">
            <div className="app__feedbacks-header-and-button">
              <h2 className="app__feedbacks-header">Отзывы</h2>
              <Button2Icon
                text="Добавить отзыв"
              />
            </div>
            <div className="app__feedbacks-content">
              <div className="app__feedbacks">
                <article className="app__feedback">
                  <FeedbackCard
                    userName="Буба Бубенцов"
                    feedbackDate="08.01.2022"
                    feedbackText="Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника 
                    и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому 
                    принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная 
                    страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. 
                    Зарплату выплачивают всегда вовремя."
                  />
                </article>
                <article className="app__feedback">
                  <FeedbackCard
                    userName="Илья Анташкевич"
                    feedbackDate="08.01.2022"
                    feedbackText="Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в 
                    компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, 
                    все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно 
                    хорошо знать иностранные языки."
                  />
                </article>
                {/* <article className="app__feedback">
                  <FeedbackCard
                    userName="Юрина Маргарита"
                    feedbackDate="26.12.2021"
                    feedbackText="Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить 
                    отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные 
                    сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный 
                    доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы 
                    довольны, что доверили создание сайта компании ilink."
                  />
                </article>
                <article className="app__feedback">
                  <FeedbackCard
                    userName="Дмитрий Иванов"
                    feedbackDate="16.12.2021"
                    feedbackText="Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном 
                    уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. 
                    Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть 
                    программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная 
                    атмосфера. Все дружелюбные, амбициозные."
                  />
                </article> */}
              </div>
            </div>
            <div className="app__feedbacks-slider-dots">
              <div className="app__feedbacks-slider-dot app__feedbacks-slider-dot_active"></div>
              <div className="app__feedbacks-slider-dot"></div>
              <div className="app__feedbacks-slider-dot"></div>
            </div>
          </div>
          <div className="app__feedbacks-arrows">
                <Arrow
                  isLeft="true"
                />
                <Arrow />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
