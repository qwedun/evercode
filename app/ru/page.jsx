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


const Page = () => {
    return (
        <main>
            <section>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Evercode Lab</h1>
                        <p>Объединяем бизнес и технологии</p>
                    </div>
                    <Image width={650} src={mainImg} alt='' priority/>
                </div>
            </section>
            <section className={styles.blue}>
                <Image className={styles.left} width={250} height={250} src={leftTiles} alt=''/>
                <Image className={styles.right} width={250} height={250} src={rightTiles} alt=''/>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle}>
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
                            <Image src={cherryswap} alt='Cherry Swap'/>
                            <p>CherrySwap</p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.blue}>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle}>Наши продукты</h2>
                    <div className={styles['flex-wrapper']}>
                        <Link href='https://эверкодлаб.рф/' target='blank' className={styles.product}>
                            <h3 className={styles['link-title']}>Эверволлет</h3>
                            <p>White label решение для работы с цифровыми активами.</p>
                            <p>Программа внесена в реестр отечественного ПО: <br/>
                               Запись в реестре от 29.12.2022 №16143 <br/>
                               Произведена на основании поручения Министерства цифрового развития, связи и массовых коммуникаций Российской Федерации от 29.12.2022 по протоколу заседания экспертного совета от 23.12.2022 №2134пр
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
                            <Image sizes='100vw' height={122} src={vault} alt='Evervault'/>
                            <h3 className={styles['link-title']}>Evervault</h3>
                            <p>Evervault помогает бизнесам безопасно хранить и использовать секретные данные.</p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.blue}>
                <div className={`${styles.wrapper} ${styles.section}`}>
                    <h2 className={styles.subtitle}>Наша экспертиза</h2>
                    <div className={styles['flex-wrapper']}>
                        <Link href='/ru/cases/ondoc' className={styles.case}>
                            <Image sizes='100vw' width={190} src={medicine} href='/ru/cases/ondoc' alt='Медицина'/>
                            <h3 className={styles['link-title']}>Медицина</h3>
                            <p>Создаем IT-решения в области медицины, которые повышают эффективность взаимодействия с клиентами.</p>
                        </Link>
                        <Link href='/ru/cases/ball' className={styles.case}>
                            <Image sizes='100vw' width={190} src={education} href='/ru/cases/ondoc' alt='Образование'/>
                            <h3 className={styles['link-title']}>Образование</h3>
                            <p>Разрабатываем приложения для образования с целью повышения качества учебного процесса.</p>
                        </Link>
                        <Link href='/ru/cases/cadfem-version-2' className={styles.case}>
                            <Image sizes='100vw' width={190} src={crm} href='/ru/cases/cadfem-version-2' alt='CRM системы'/>
                            <h3 className={styles['link-title']}>CRM системы</h3>
                            <p>Разрабатываем и интегрируем системы автоматизации бизнес-процессов, обеспечивая взаимодействие с внешними и внутренними сервисами компании.</p>
                        </Link>
                        <Link href='/ru/cases/foodfox' className={styles.case}>
                            <Image sizes='100vw' width={190} src={commerce} href='/ru/cases/ondoc' alt='Электронная комерция'/>
                            <h3 className={styles['link-title']}>Электронная комерция</h3>
                            <p>Проектируем и разрабатываем приложения для электронной коммерции.</p>
                        </Link>
                        <Link href='/ru/cases/ondoc' className={styles.case}>
                            <Image sizes='100vw' width={190} src={monitoring} href='/ru/cases/ondoc' alt='Системы мониторинга'/>
                            <div>
                                <h3 className={styles['link-title']}>Системы мониторинга</h3>
                                <p>Разрабатываем системы сбора, обработки и визуализации данных с устройств мониторинга.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;