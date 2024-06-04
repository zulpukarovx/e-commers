"use client";
import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularProdCarousel from "./PopularProdCarousel";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
    _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
      name
    }
  }`;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getData();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Best sellers</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Styles In One Destination.
        </p>
        <PopularProdCarousel products={products} />
        <Link href="/our-products">
          <button className="btn btn-primary mx-auto">See all nikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
