
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CategoryPage(){

    const parameters = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        async function fetchCategory(slug) {
            const tempCategory = await client.fetch("*[_type == 'category' && slug.current == $slug{...}]", {slug})
            setCategory(tempCategory)
        }
        
        fetchCategory(parameters.slug)

    }, [parameters]

    )
    console.log(parameters)
    console.log(category)
    return <h1>category?.categoryname</h1>
}