import category from "./category"

const products = {
    name:"product",
    title:"Produkter",
    type:"document", 
    fields:[
        {
            name:"productname",
            title:"Produktnavn",
            type:"string"
        },
        {
            name:"price",
            title:"pris",
            type:"number"
        },
        {
            name:"quantity",
            title:"Anatall på lager",
            type:"number"
        },
        {
            name:"productimage",
            title:"Produktbilde",
            type:"image"
        },
        {
            name:"productcategory",
            title:"Produktkategori",
            type:"reference",
            to:[
                {
                    type:"category",
                    title:"kategori"
                }
            ]
        }
        
    ]
}
export default products