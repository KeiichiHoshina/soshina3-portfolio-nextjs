import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/KeiichiHoshina">
                    GitHub
                </a>
                <hr/>
                <Link href="/work">Work</Link>
                {/* <Link href="/contact">Contact</Link> */}
                <p>&copy; {new Date().getFullYear()} Soshina3</p>
            </div>
        </footer>
    )
}

export default Footer
