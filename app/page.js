import Link from 'next/link'
import Image from 'next/image'
import heroPic from "../public/images/index-hero.jpg"
import profilePic from "../public/images/profile.jpg"

export const metadata = {
    title: "My Portfolio Site",
    description: "Here is an overview of his career to date.",
}

const Index = () => {
    return (
        <>
            <div className="hero">
                <Image src={heroPic} alt="hero" />
                <div className="textContainer">
                    <h1>My Portfolio Site</h1>
                    <h3>Here is an overview of his career to date.</h3>
                </div>
            </div>
            <div className="container">
                <div className="profile">
                    <div>
                        <h2>Self Introduction</h2>
                        <p>
                            Born in Tokyo in the late 1970s.<br />
                            Around 2004, he took a web design course at a web school, and since then has been involved in website production as an HTML coder.
                            Recently, he is learning coding using components such as React.<br />
                            This page was created with React/Next.js.
                        </p>
                    </div>
                    <div>
                        <Image src={profilePic} alt="hero" />
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <div className="skillsContainer">
                        <div><img src="/images/html_css.png" alt="HTML5/CSS3（HTML5&CSS3）"/><span>HTML&amp;CSS（HTML5&amp;CSS3） / 18 years</span></div>
                        <div><img src="/images/programming.png"alt="JavaScript（UI movement and animation）"/><span>JavaScript（UI movement and animation） / 9 years</span></div>
                    </div>
                </div>
                <div className="ctaButton">
                    <Link href="/work">Main productions</Link>
                </div>
            </div>
        </>
    )
}

export default Index
