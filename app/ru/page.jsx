import styles from './page.module.scss';
import Image from "next/image";
import Link from "next/link";
import mainImg from '@images/Main.svg';
import leftTiles from '@images/tile-left.png';
import rightTiles from '@images/tile-right.png';
import cadfem from '@icons/cadfem.png';
import foodfox from '@icons/foodfox.png';
import tdcloud from '@icons/td-cloud.png';
import reksoft from '@icons/reksoft.png';
import guarda from '@icons/guarda.png';
import hellan from '@icons/gelan.png';
import frostwallet from '@icons/frostWallet.png';
import ondoc from '@icons/ondoc.png';
import kelnik from '@icons/kelnik.png';
import cherryswap from '@icons/cherry.png';
import medic from '@images/Medic-big.png';
import market from '@images/Evermarket-big.png';
import study from '@images/Course-big.png';
import wallet from '@images/Wallet-big.png';
import sdk from '@images/SDK-big.png';
import vault from '@images/Vault-big.png';
import medicine from '@images/Medicine.png';
import education from '@images/Education.png';
import crm from '@images/CRM.png';
import commerce from '@images/E-Commerce.png';
import monitoring from '@images/Monitoring.png';
import quote from "@icons/copy.svg";
import Carousel from "@/src/components/Carousel/Carousel";
import Scroll from "@/src/components/Scroll/Scroll";



const Page = () => {
    return (
        <main>
            <section>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>
                            Evercode Lab <br/>
                            Объединяем бизнес и технологии
                        </h1>
                        <Scroll to='#scroll' classname={styles.scroll}/>
                    </div>
                    <Image className={styles.head} src={mainImg} alt='' priority/>
                </div>
            </section>
            <section className={styles.blue}>
                <Image className={styles.left} width={250} height={250} src={leftTiles} alt=''/>
                <Image className={styles.right} width={250} height={250} src={rightTiles} alt=''/>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle} id='scroll'>
                        Разрабатываем микросервисы, мобильные и веб-приложения для бизнеса и стартапов
                    </h2>
                    <div className={styles.flex}>
                        <Link className={styles.link} href='https://www.cadfem-cis.ru/' target='blank'>
                            <Image src={cadfem} alt='Cadfem'/>
                            <p>Cadfem</p>
                        </Link>
                        <Link className={styles.link} href='/ru/cases/foodfox/'>
                            <Image src={foodfox} alt='Foodfox'/>
                            <p>Foodfox <br/> (сейчас Яндекс.Еда)</p>
                        </Link>
                        <Link className={styles.link} href='https://tdcloud.ru/' target='blank'>
                            <Image src={tdcloud} alt='TDCloud'/>
                            <p>TDCloud</p>
                        </Link>
                        <Link className={styles.link} href='https://reksoft.ru/' target='blank'>
                            <Image src={reksoft} alt='Reksoft'/>
                            <p>Reksoft</p>
                        </Link>
                        <Link className={styles.link} href='https://guarda.com/' target='blank'>
                            <Image src={guarda} alt='Guarda Wallet'/>
                            <p>Guarda Wallet</p>
                        </Link>
                        <Link className={styles.link} href='/ru/cases/escar/'>
                            <Image src={hellan} alt='Hellan'/>
                            <p>Hellan</p>
                        </Link>
                        <Link className={styles.link} href='https://frostwallet.cc/' target='blank'>
                            <Image src={frostwallet} alt='Frost Wallet'/>
                            <p>FrostWallet</p>
                        </Link>
                        <Link className={styles.link} href='https://ondoc.me/' target='blank'>
                            <Image src={ondoc} alt='Ondoc'/>
                            <p>Ondoc</p>
                        </Link>
                        <Link className={styles.link} href='https://kelnik.ru/' target='blank'>
                            <Image src={kelnik} alt='Kelnik'/>
                            <p>Kelnik</p>
                        </Link>
                        <Link className={styles.link} href='https://cherryswap.io/' target='blank'>
                            <Image src={cherryswap} alt='Cherryswap'/>
                            <p>CherrySwap</p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.blue}>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle}>Наши продукты</h2>
                    <div className={styles['flex-wrapper']}>
                        <Carousel mobileOnly>
                            <Link href='https://эверкодлаб.рф/' target='blank' className={styles.product} id='carousel-element-width'>
                                <h3 className={styles['link-title']}>Эверволлет</h3>
                                <p>White label решение для работы с цифровыми активами.</p>
                                <p>Программа внесена в реестр отечественного ПО: <br/>
                                    Запись в реестре от 29.12.2022 №16143 <br/>
                                    Произведена на основании поручения Министерства цифрового развития, связи и массовых
                                    коммуникаций Российской Федерации от 29.12.2022 по протоколу заседания экспертного
                                    совета от 23.12.2022 №2134пр
                                </p>
                            </Link>
                            <Link href='ru/products/evercode-online-medic' className={styles.product}>
                                <Image sizes='100vw' width={200} src={medic} alt='Evercode Online Medic'/>
                                <h3 className={styles['link-title']}>Evercode <br/> Online Medic</h3>
                                <p>Сервис для онлайн-консультаций с врачами</p>
                            </Link>
                            <Link href='ru/products/evermarket' className={styles.product}>
                                <Image sizes='100vw' width='200' src={market} alt='Evermarket'/>
                                <h3 className={styles['link-title']}>Marketplace <br/> Evermarket</h3>
                                <p>Сервис электронной комерции</p>
                            </Link>
                            <Link href='ru/products/evercourse' className={styles.product}>
                                <Image sizes='100vw' width='200' src={study} alt='Evercourse'/>
                                <h3 className={styles['link-title']}>Evercourse</h3>
                                <p>Платформа для онлайн-обучения</p>
                            </Link>
                            <Link href='https://wallet.evercodelab.com/' className={styles.product} target='blank'>
                                <Image sizes='100vw' width='200' src={wallet} alt='Everchain White Label Wallet'/>
                                <h3 className={styles['link-title']}>Everchain White <br/> Label Wallet</h3>
                                <p>Некастодиальные криптокошельки для токенов</p>
                            </Link>
                            <Link href='/ru/products/everchain-sdk' className={styles.product}>
                                <Image sizes='100vw' width='200' src={sdk} alt='Everchain SDK'/>
                                <h3 className={styles['link-title']}>Everchain SDK</h3>
                                <p>Интеграция монет для некастодиальных кошельков</p>
                            </Link>
                            <Link href='/ru/products/evervault' className={styles.product}>
                                <Image className={styles.big} sizes='100vw' height={122} src={vault} alt='Evervault'/>
                                <h3 className={styles['link-title']}>Evervault</h3>
                                <p>Evervault помогает бизнесам безопасно хранить и использовать секретные данные.</p>
                            </Link>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className={styles.blue}>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle}>Наша экспертиза</h2>
                    <div className={styles['flex-wrapper']}>
                        <Carousel mobileOnly>
                            <Link href='/ru/cases/ondoc' className={styles.case} id='carousel-element-width'>
                                <Image sizes='100vw' width={190} src={medicine} href='/ru/cases/ondoc' alt='Медицина'/>
                                <h3 className={styles['link-title']}>Медицина</h3>
                                <p>Создаем IT-решения в области медицины, которые повышают эффективность взаимодействия с
                                    клиентами.</p>
                            </Link>
                            <Link href='/ru/cases/ball' className={styles.case}>
                                <Image sizes='100vw' width={190} src={education} href='/ru/cases/ondoc' alt='Образование'/>
                                <h3 className={styles['link-title']}>Образование</h3>
                                <p>Разрабатываем приложения для образования с целью повышения качества учебного
                                    процесса.</p>
                            </Link>
                            <Link href='/ru/cases/cadfem-version-2' className={styles.case}>
                                <Image sizes='100vw' width={190} src={crm} href='/ru/cases/cadfem-version-2'
                                       alt='CRM системы'/>
                                <h3 className={styles['link-title']}>CRM системы</h3>
                                <p>Разрабатываем и интегрируем системы автоматизации бизнес-процессов, обеспечивая
                                    взаимодействие с внешними и внутренними сервисами компании.</p>
                            </Link>
                            <Link href='/ru/cases/foodfox' className={styles.case}>
                                <Image sizes='100vw' width={190} src={commerce} href='/ru/cases/ondoc'
                                       alt='Электронная комерция'/>
                                <h3 className={styles['link-title']}>Электронная комерция</h3>
                                <p>Проектируем и разрабатываем приложения для электронной коммерции.</p>
                            </Link>
                            <Link href='/ru/cases/ondoc' className={styles.case}>
                                <Image sizes='100vw' width={190} src={monitoring} href='/ru/cases/ondoc'
                                       alt='Системы мониторинга'/>
                                <div>
                                    <h3 className={styles['link-title']}>Системы мониторинга</h3>
                                    <p>Разрабатываем системы сбора, обработки и визуализации данных с устройств
                                        мониторинга.</p>
                                </div>
                            </Link>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className={styles.white}>
                <div className={`${styles['flex-content']}`}>
                    <h2 className={styles.titles}>Отзывы</h2>
                    <div>
                        <Image src={quote} alt=''/>
                    </div>
                </div>
                <Carousel>
                    <div id='carousel-element-width' className={`${styles.mains} ${styles['flex-content']}`}>
                        <div className={styles.lefts}>
                            <div className={styles.contents}>
                                <h3>Food Fox</h3>
                                <p>Сервис доставки еды (маркетплейс)</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Релиз</h3>
                                <p>6 недель</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Платформа</h3>
                                <p>Веб, мобильная</p>
                            </div>
                        </div>
                        <div className={styles.rights}>
                            <p>
                                Мы обратились к Роману и Evercode Lab на самой ранней
                                стадии разработки Foodfox. Команда Evercode Lab помогла
                                нам в разработке первой версии API для мобильных
                                приложений, интерфейса администратора и части
                                пользовательского интерфейса. Вся команда и включая Романа
                                всегда делились своим опытом и видением, давали обратную
                                связь, пытались добавить дополнительную ценность к
                                продукту. <br/>
                                Все организационные вопросы решались легко. Если возникли
                                какие-либо проблемы, Evercode Lab сделала все возможное,
                                чтобы решить их быстро и безболезненно.
                            </p>
                            <p className={styles.name}>Максим Фирсов</p>
                            <p className={styles.founder}>Генеральный директор Foodfox (сейчас Яндекс.Еда).</p>
                        </div>
                    </div>
                    <div className={`${styles.mains} ${styles['flex-content']}`}>
                        <div className={styles.lefts}>
                            <div className={styles.contents}>
                                <h3>Guarda Wallet</h3>
                                <p>Мобильный криптоволютный кошелёк</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Релиз четырёх приложений</h3>
                                <p>4 месяца</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Платформа</h3>
                                <p>Мобильная</p>
                            </div>
                        </div>
                        <div className={styles.rights}>
                            <p>
                                Мы хотели бы выразить нашу искреннюю признательность за
                                обслуживание Everchain Lab, как одному из наших самых
                                надежных постоянных поставщиков. С тех пор, как мы
                                подписали наш контракт, вы предоставляете продукцию
                                высочайшего качества с еще лучшим обслуживанием клиентов.
                                Поставки функционала часто происходят раньше, чем
                                ожидалось, и вы быстро решаете любые возникающие проблемы.<br/>
                                Мы рассчитываем продлить наш контракт с вами на долгие
                                годы и надеемся, что вы и впредь будете оказывать такие
                                превосходные услуги. Мы не могли бы вести наш бизнес без
                                вас! Спасибо за благоприятный первый год и пару месяцев
                                совместной работы, и мы с нетерпением ждем еще другие
                                совместные проекты.
                            </p>
                            <p className={styles.name}>Павел Соколов</p>
                            <p className={styles.founder}>Член управляющего совета Guarda.</p>
                        </div>
                    </div>
                    <div className={`${styles.mains} ${styles['flex-content']}`}>
                        <div className={styles.lefts}>
                            <div className={styles.contents}>
                                <h3>Cadfem</h3>
                                <p>Индивидуальное CRM решение</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Релиз</h3>
                                <p>7 месяцев</p>
                            </div>
                            <div className={styles.contents}>
                            <h3>Платформа</h3>
                                <p>Веб</p>
                            </div>
                        </div>
                        <div className={styles.rights}>
                            <p>
                                Основной целью проекта была полная интеграция CRM в
                                процесс управления продажами во всех филиалах, что
                                позволило бы структурировать коммерческую информацию и
                                улучшить прогнозы продаж. Это было сделано по графику и
                                реально повысило эффективность командной работы
                                менеджеров. То есть мои ожидания оправдались полностью.
                                Самым эффективным был Agile-подход. Регулярная обратная
                                связь, возможность корректировки технических требований,
                                еженедельная доставка новых функций - все это делало
                                процесс разработки более гибким. Я хотел бы отметить
                                работу менеджера проекта Юлии Комозы - строгий контроль за
                                планированием и разработкой с ее стороны также оказал
                                положительное влияние на нашу совместную работу.
                            </p>
                            <p className={styles.name}>Артём Аведьян</p>
                            <p className={styles.founder}>Коммерческий директор Cadfem CIS.</p>
                        </div>
                    </div>
                    <div className={`${styles.mains} ${styles['flex-content']}`}>
                        <div className={styles.lefts}>
                            <div className={styles.contents}>
                                <h3>Ondoc.Me</h3>
                                <p>Сервис персонального здоровья</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Сотрудничество</h3>
                                <p>1.5 года</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Платформа</h3>
                                <p>Веб</p>
                            </div>
                        </div>
                        <div className={styles.rights}>
                            <p>
                                Вряд ли вы найдете команду программистов, которые сделают
                                все, чтобы вы избежали ошибок и подумали о вашем проекте
                                как о бизнес-продукте. Но мне повезло встретить их - это
                                Рома и его команда Evercode Lab. <br/>
                                С самого начала совместной работы Рома фактически стал для
                                меня наставником и побудил меня подумать о вещах, которые
                                я не знал из-за недостатка опыта, помог мне выбрать
                                оптимальную стратегию разработки продукта. И это был
                                невероятный бонус, которого я не мог ожидать от внешней
                                команды. <br/>
                                Правильные вопросы также помогли определить фазы, и это
                                значительно упростило процесс разработки, сделав его
                                прозрачным и понятным.
                            </p>
                            <p className={styles.name}>Александр Константинов</p>
                            <p className={styles.founder}>Генеральный директор Ondoc.me</p>
                        </div>
                    </div>
                    <div className={`${styles.mains} ${styles['flex-content']}`}>
                        <div className={styles.lefts}>
                            <div className={styles.contents}>
                                <h3>Ball.org</h3>
                                <p>Система оценки знаний</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Сотрудничество</h3>
                                <p>2 года</p>
                            </div>
                            <div className={styles.contents}>
                                <h3>Платформа</h3>
                                <p>Веб</p>
                            </div>
                        </div>
                        <div className={styles.rights}>
                            <p>
                                Искренность исполнителей в общении с клиентом (то есть со
                                мной) очевидна, когда они действительно хотят мне помочь.
                                Когда люди живут своей работой, они знают это и знают, как
                                сделать это хорошо и организовать всё правильно. А
                                остальное - маркетинг, который для нас (клиентов) не
                                влияет на добавленную стоимость программного продукта.
                                Поэтому, прежде всего, я благодарен ребятам из Evercode
                                Lab за искренность в работе на 95% и за маркетинг на 5%, а
                                не наоборот, как многие другие. <br/>
                                Исходя из того, что Everсode Lab создал для меня очень
                                сложную систему тестирования, как часть независимой
                                системы оценки качества для общего образования, которой в
                                настоящее время пользуются около 4000 школьников на
                                постоянной основе, сотрудникам этой компании определенно
                                можно доверить сложные и ответственные задачи. <br/>
                                Поверьте, то, что ребята сделали для меня, гораздо
                                сложнее, чем может казаться на первый взгляд. Спасибо им
                                за это.
                            </p>
                            <p className={styles.name}>Арвидас Жилинскас</p>
                            <p className={styles.founder}>Владелец Образовательного центра ARNA.</p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </main>
    );
};

export default Page;