import Link from 'next/link'
import Image from 'next/image'
import Pagination from "../../../components/pagination"
import { getAllWorks, worksPerPage } from "../../../utils/mdQueries"

export const metadata = {
    title: "Work",
    description: "主な制作実績を紹介します。",
}

const PaginationPage = async(props) => {
    const { works, numberPages } = await getAllWorks()
    const currentPage = props.params.pagination
    const limitedWorks = works.slice((currentPage -1) * worksPerPage, currentPage * worksPerPage)
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Work</h1>
                    <p>主な制作実績を紹介します。</p>
                    <p><a href="http://soshina3.sub.jp/portfolio/portfolio/">詳細は旧ページからご覧ください。</a></p>
                    {limitedWorks.map((work, index) =>
                        <Link key={index} className="workCard" href={`/work/${work.slug}`}>
                            <div className="cardContainer">
                                <h2>{work.frontmatter.title}</h2>
                                <p className="cardContainer-txt">{work.frontmatter.excerpt}</p>
                                <p>{work.frontmatter.date}</p>
                                <div className="cardContainer-btn">Read More</div>
                            </div>
                            <div className="workImg">
                                <Image src={work.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
                            </div>
                        </Link>
                    )}
                </div>
                <Pagination numberPages={numberPages} />
            </div>
        </>
    )
}

export default PaginationPage

export async function generateStaticParams() {
    const { numberPages } = await getAllWorks()

    let paths = []
    Array.from({ length: numberPages }).map((_, index) => paths.push(`/work/page/${index + 2}`))

    return paths
}
