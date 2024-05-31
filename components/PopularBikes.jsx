import { client } from "@/app/lib/sanity";

const getData = async () => {
  const query = `
    *[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
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
      }
    `;
  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  console.log(bikes);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Best sellers</h2>
        <p>The World's Premium Styles In One Destination </p>
      </div>
    </section>
  );
};

export default PopularBikes;
