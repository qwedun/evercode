'use client'
import styles from './footer.module.scss'
import Link from "next/link";
import Image from "next/image";
import footerLogo from '@icons/logo-footer.svg'
import mediumImg from '@icons/social-medium.svg';
import githubImg from '@icons/social-git.svg';
import twitterImg from '@icons/social-tweet.svg';
import facebookImg from '@icons/social-fb.svg';
import linkedinImg from '@icons/social-in.svg';
import { useState } from "react";

const Footer = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.flex} ${styles.policy}`}>
                    <Link className={styles.logo} href='/ru'>
                        <Image width={230} src={footerLogo} alt='На главную страницу'/>
                    </Link>
                    <Link href='/ru/privacy'>Политика конфеденциальности</Link>
                    <Link href='/ru/terms-of-use'>Правила использования сайта</Link>
                    <p>© 2013 - 2024 Evercode Lab</p>
                </div>
                <div onClick={() => setIsActive(!isActive)} className={styles.enable}>
                    Навигация
                    <div>+</div>
                </div>
                <nav className={`${styles.flex} ${isActive ? styles.show : styles.hide}`}>
                    <h3 className={styles.title}>Навигация</h3>
                    <Link href='/ru/products'>Продукты</Link>
                    <Link href='/ru/cases'>Кейсы</Link>
                    <Link href='/ru/career'>Карьера</Link>
                    <Link href='/ru/blog'>Блог</Link>
                    <Link href='/ru/contacts'>Контакты</Link>
                </nav>
                <address className={`${styles.flex} ${styles.address}`}>
                    <h3 className={styles.title}>Контакты</h3>
                    <div className={styles.contacts}>
                        <a href="mailto:sales@evercodelab.com">sales@evercodelab.com</a>
                        <a href="mailto:job@evercodelab.com">job@evercodelab.com</a>
                    </div>
                    <p>
                        191186, Россия <br/>
                        Санкт-Петербург <br/>
                        ул Степана Разина, д. 8а, <br/>
                        литера А, помещ. 13-Н <br/>
                    </p>
                </address>
                <section className={styles.links}>
                    <h3 className={styles.title}>Связь</h3>
                    <a href="https://medium.com/evercodelab" target="blank">
                        <Image width={32} height={32} src={mediumImg} alt='Evercode Lab на Медиуме'/>
                    </a>
                    <a href="https://github.com/evercodelab" target="blank">
                        <Image width={32} height={32} src={githubImg} alt='Evercode Lab на Гитхабе'/>
                    </a>
                    <a href="https://twitter.com/evercodelab" target="blank">
                        <Image width={32} height={32} src={twitterImg} alt='Evercode Lab в Твиттере'/>
                    </a>
                    <a href="https://facebook.com/evercodelab" target="blank">
                        <Image width={32} height={32} src={facebookImg} alt='Evercode Lab в Фэйсбуке'/>
                    </a>
                    <a href="https://facebook.com/evercodelab" target="blank">
                        <Image width={32} height={32} src={linkedinImg} alt='Evercode Lab в Линкедин'/>
                    </a>
                </section>
            </div>
        </footer>
    );
};

export default Footer;