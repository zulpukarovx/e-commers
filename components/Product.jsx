import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./AddToCartBtn";

const Product = ({ product }) => {
  const popularProductCat = product.categories.find(
    (product) => product.name === "popular"
  );
  return (
    <div className="group">
      <div className="h-[328px] mb-5 overflow-hidden relative">
        <div
          className="bg-primary/5 w-full h-full 
        group-hover:bg-primary/10 duration-300 
        flex justify-center items-center"
        >
          {popularProductCat && (
            <div
              className="absolute top-8 left-8 bg-primary text-white 
            px-3 text-sm uppercase font-semibold rounded-lg"
            >
              Popular
            </div>
          )}
          <Image
            src={urlFor(product.images[0]).url()}
            width={320}
            height={320}
            alt={`Image of ${product.name}`}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center 
        items-center gap-[10px] opacity-0 group-hover:opacity-75 transition-all duration-300"
        >
          <AddToCartBtn
            name={product.name}
            currency="USD"
            description={product.description}
            images={product.images}
            price={product.price}
            btnStyles="btn-icon rounded-2xl bg-primary"
            icon={<CgShoppingBag />}
          />

          <Link href={`/product/${product.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="mb-1">{product.name}</h5>
      <div className="text-lg font-semibold text-primary/80">
        ${product.price}
      </div>
    </div>
  );
};

export default Product;
