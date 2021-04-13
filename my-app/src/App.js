const Logo = (props) => (
    <div className={props.name}></div>
);

const Phone = (props)=>(
    <a href="tel:888" className={props.name + "-phone"}></a>
);

const PhoneLink = (props)=>(
    <div className={props.name + "-phonelink"}>
        <a href="tel:7(962)556-1234">+7(962)556-1234</a>
    </div>
);

const FeaturesSliderItem = (props)=>(
    <div className="features-slider_item">
        <div className="features-img" style={{backgroundImage: props.url}}></div>
        <div className="features-feature">{props.text}</div>
    </div>
);

const FeaturesSliderArrow = (props)=>(
    <button className={"features-slider-arrow " + props.nameClass}>
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
        </svg>
    </button>
);

const App =()=> (
    <div>
        <header>
            <div className="wrapper">
                <div className="header">
                    <a href="#">
                        <Logo name="header-logo"/>
                    </a>
                    <Phone name="header" />
                    <PhoneLink name="header" />
                </div>
            </div>
        </header>
         <main>
            <div className="wrapper">
                <div className="main">
                    <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                    <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.
                    </div>
                    <button className="btn main-btn"><span>Подробнее</span></button>
                </div>
            </div>
        </main>
        
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
                    </div>
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <FeaturesSliderItem url="url(/images/1.svg)" text="Первое целевое преимущество"/>
                            <FeaturesSliderItem url="url(/images/2.svg)" text="Второе целевое преимущество"/>
                            <FeaturesSliderItem url="url(/images/3.svg)" text="Третье целевое преимущество"/>
                            <FeaturesSliderItem url="url(/images/4.svg)" text="Четвертое целевое преимущество"/>
                        </div>
                        <FeaturesSliderArrow nameClass="features-slider-prev"/>
                        <FeaturesSliderArrow nameClass="features-slider-next"/>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="contact">
            <div className="wrapper">
                <div className="contact-wrapper">
                    <h2 className="contact-title">Остались вопросы?</h2>
                    <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                    <form action="../mailer.smart.php" className="contact-form">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="tel" placeholder="Телефон" />
                        <input type="email" placeholder="E-mail" />
                        <button className="btn contact-btn"><span>Позвоните мне</span></button>
                    </form>
                    <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="footer">
                <Logo name="footer-logo"/>
                <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
                <Phone name="footer" />
                <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a></div>
                <PhoneLink name="footer" />
            </div>
        </footer>
    </div>
);

export default App;

// ReactDOM.render(<RenderJSX/>, document.getElementById('root'));