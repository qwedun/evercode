'use client'
import Image from "next/image";
import Link from "next/link";
import headerOut from '@icons/icon-out-head.svg';
import headerLogo from '@icons/logo-header.svg';
import burgerActive from '@icons/burgerActive.svg';
import burgerInactive from '@icons/burgerInactive.svg';
import styles from './header.module.scss';
import {useEffect, useState} from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        if (!isActive)
            document.body.style.overflowY = 'scroll';
        else
            document.body.style.overflowY = 'hidden';
    }, [isActive]);

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link href='/ru'>
                    <Image className={styles.logo} width='230' src={headerLogo} alt='На главную страницу'/>
                </Link>

                <Image onClick={() => setIsActive(!isActive)}
                       className={styles.burger}
                       src={isActive ? burgerActive : burgerInactive}
                       alt='Открыть меню навигации'
                />

                <ul className={`${styles.row} ${isActive ? styles.open : styles.close}`}>
                    <li className={styles.drop}>
                        <Link onClick={() => setIsActive(false)} className={styles.link} href='/ru/products'>
                            Продукты
                            <span className={styles.arrow}></span>
                        </Link>
                        <div className={styles.content}>
                            <Link href='/ru/products/white-label'>Everchain White Label Wallet</Link>
                            <Link href='/ru/products/evervault'>Evervault</Link>
                            <Link href='/ru/products/evercourse'>Evercourse</Link>
                            <Link href='/ru/products/evercode-online-medic'>Evercode Online Medic</Link>
                            <Link href='/ru/products/evermarket'>Marketplace Evermarket</Link>
                            <Link href='/ru/products/everchain-sdk'>Everchain SDK</Link>
                        </div>
                    </li>

                    <li className={styles.drop}>
                        <Link onClick={() => setIsActive(false)} className={styles.link} href='/ru/cases'>
                            Кейсы
                            <span className={styles.arrow}></span>
                        </Link>
                        <div className={styles.content}>
                            <Link href='/ru/cases/cadfem-version-2'>CRM решения</Link>
                            <Link href='/ru/cases/escar'>Системы мониторинга</Link>
                            <Link href='/ru/cases/foodfox'>Электронная комерция</Link>
                            <Link href='/ru/cases/ondoc'>Медицина</Link>
                            <Link href='/ru/cases/ball'>Образование</Link>
                        </div>
                    </li>
                    <li className={styles.drop}>
                        <Link onClick={() => setIsActive(false)} className={styles.link} href='/ru/career'>
                            Карьера
                        </Link>
                    </li>
                    <li className={styles.drop}>
                        <Link onClick={() => setIsActive(false)} className={styles.link} href='/ru/blog'>
                            Блог
                            <Image className={styles.img} width='10' height='10' src={headerOut} alt=''/>
                        </Link>
                    </li>
                    <li className={styles.drop}>
                        <Link onClick={() => setIsActive(false)} className={styles.link} href='/ru/contacts'>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;