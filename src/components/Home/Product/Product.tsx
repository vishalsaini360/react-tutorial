import { HomeProductWrapper,HomeProductHeading,CardRow,CardColumn,CardWrapper,CardImg,CardHeading,
    CardPrice,CardButton } from './Product.style'

export default function HomeProduct() {
  const itemArr=[
    {
      name:"T-Shirt",
      image:"jeans3.jpg", //image is stored in public folder
      price: 500,
    },
    {
      name:" Solid Polo",
      image:"tshirt1.webp",
      price: 700,
    },
    {
      name:" NB NICKY BOY",
      image:"tshirt2.webp",
      price: 1100,
    },
    {
      name:"Damensch",
      image:"tshirt3.webp",
      price: 1000,
    }
  ]
  return (
    <HomeProductWrapper>
        <HomeProductHeading>Featured Product</HomeProductHeading>
        <CardRow>
          {
            itemArr.map((item,index)=>{
              return (
                <CardColumn key={index}>
                    <CardWrapper>
                        <CardImg src={item.image}/>
                        <CardHeading>{item.name}</CardHeading>
                        <CardPrice>$ {item.price}</CardPrice>
                        <CardButton>Add To Cart</CardButton>
                    </CardWrapper>
                </CardColumn>
              )
            })
          }
        </CardRow>
    </HomeProductWrapper>
  )
}