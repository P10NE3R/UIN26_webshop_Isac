import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../helpers/client";

  export default function Nav(){
    const [categories, setCategories] = useState(null)

    useEffect(() => {
      async function fetchAllCategories(){
        const allCategories = await client.fetch("*[_type == 'category']{categoryname}")
        setCategories(allCategories)
      }
      
      fetchAllCategories()
    }, [])

console.log(categories)

    return(
       <nav>
          {categories?.map((c, index) => <Link key={index} to={c.slug.current}>{c.categoryname}</Link>)}
      </nav>
    )
  }