import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";
import { Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories-> {name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const product = await getData(params.slug);
  console.log(product);
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div
            className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px]
          flex justify-center items-center"
          >
            <Image
              src={urlFor(product.images[0]).url()}
              width={480}
              height={300}
              priority
              alt={`Image of ${product.name}`}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between items-start gap-10">
            <div className="flex flex-col gap-10">
              <Link className="flex items-center gap-2" href="/">
                <ChevronLeft />
                Back to home
              </Link>
              <div className="flex flex-col gap-6 items-start">
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
                <p>{product.description}</p>
                <AddToCartBtn text="Add to cart" btnStyles="btn btn-primary" />
              </div>
            </div>
            <div>
              <div className="font-thin flex flex-col gap-3">
                <div className="flex gap-2">
                  <PackageCheck size={20} />
                  <p>Free shipping on orders over $150</p>
                </div>
                <div className="flex gap-2">
                  <RefreshCw size={20} />
                  <p>Free return within 30 days</p>
                </div>
                <div className="flex gap-2">
                  <Clock size={20} />
                  <p>Fast delivery within Kyrgyzstan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
