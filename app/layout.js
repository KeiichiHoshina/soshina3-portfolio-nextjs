import "./styles/all.css"
import "./styles/work.css"
import "./styles/common.css"
import "./styles/contact.css"
import "./styles/index.css"
import "./styles/singleWork.css"
import Meta from "./components/meta"
import Header from "./components/header"
import Footer from "./components/footer"

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <Meta />
            <body>
                <Header />
                    <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
