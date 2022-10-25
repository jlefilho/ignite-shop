import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                {/* <Image /> */}
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate similique saepe nobis illum dicta eum vero blanditiis autem id rem, quaerat, quasi corrupti quisquam iure pariatur commodi, voluptatum suscipit?</p>

                <button>
                    Comprar
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
