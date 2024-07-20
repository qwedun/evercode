import { Inter, Montserrat } from "next/font/google";
import styles from "./global.css";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

 const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: "Evercode Lab. Разработка программного обеспечения",
    description: "Уникальные IT-решения для бизнеса, включая веб и мобильные приложения, CRM системы, системы мониторинга и блокчейн проекты",

};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`${inter.variable} ${montserrat.variable}`}>
                <Header/>
                {children}
                <Footer/>
             </body>
        </html>
    );
}
