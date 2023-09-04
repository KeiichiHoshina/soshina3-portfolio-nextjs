import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import PrevNext from '../../components/prevNext'
import { getAllWorks, getSingleWork } from "../../utils/mdQueries"

export async function generateMetadata(props) {
    const { singleDocument } = await getSingleWork(props)
    return {
        title: singleDocument.data.title,
        description: singleDocument.data.excerpt,
    }
}

const SingleWork = async(props) => {
    const { singleDocument } = await getSingleWork(props)

    const { works } = await getAllWorks()
    const prev = works.filter(work => work.frontmatter.id === singleDocument.data.id - 1)
    const next = works.filter(work => work.frontmatter.id === singleDocument.data.id + 1)
    return (
        <>
            <div className="img-container">
                <Image src={singleDocument.data.image} alt="work-image" height={500} width={1000} quality={90} priority={true} />
            </div>
            <div className="wrapper">
                <div className="container">
                    <h1>{singleDocument.data.title}</h1>
                    <p>{singleDocument.data.date}</p>
                    <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
                </div>
                <PrevNext prev={prev} next={next} />
            </div>
        </>
    )
}

export default SingleWork

export async function generateStaticParams() {
    const { works } = await getAllWorks()
    const paths = works.map((work) => `/${work.slug}`)
    return paths
}