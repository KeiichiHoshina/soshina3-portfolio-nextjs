import Link from 'next/link'

const PrevNext =(props) => {
    return (
        <div className="pnWrapper">
            {0 < props.prev.length &&
                <Link href={`/work/${props.prev[0].slug}`}>
                    <h3>&lt;  {props.prev[0].frontmatter.title}</h3>
                </Link>
            }
            {0 < props.next.length &&
                <Link href={`/work/${props.next[0].slug}`}>
                    <h3>{props.next[0].frontmatter.title} &gt;</h3>
                </Link>
            }
        </div>
    )
}

export default PrevNext
