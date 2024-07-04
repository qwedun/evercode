import styles from './not-found.module.scss'
export const metadata = {
    robots: 'none',
    title: 'Страница не найдена'
}

const NotFound = () => {
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.code}>
                    404
                </div>
                <h1 className={styles.text}>
                    Кажется, такой страницы не существует...
                </h1>
            </div>
        </main>
    );
};

export default NotFound;