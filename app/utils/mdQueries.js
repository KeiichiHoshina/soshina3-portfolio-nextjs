import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const worksPerPage = 5

export async function getAllWorks() {
    const files = fs.readdirSync(path.join("data"))
    const works = files.map((fileName) => {
        const slug = fileName.replace(".md", "")
        const fileData = fs.readFileSync(
            path.join("data", fileName),
            "utf-8"
        )
        const { data } = matter(fileData)
        return {
            frontmatter: data,
            slug: slug,
        }
    })

    const orderedWorks = works.sort((a, b) => {
        return b.frontmatter.id - a.frontmatter.id
    })

    const numberPages = Math.ceil(orderedWorks.length / worksPerPage)

    return{
        works: orderedWorks,
        numberPages: numberPages
    }
}

export async function getSingleWork(context) {
    const { slug } = context.params
    const data = await import(`../../data/${slug}.md`)
    const singleDocument = matter(data.default)

    return {
        singleDocument: singleDocument
    }
}
