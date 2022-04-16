import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
// ssg
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/products.json`);
  const data = await req.json();
  const paths = data.map((product) => {
    return {
      params: {
        id: product,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const Products = ({ product }) => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <img src={product.image} width="300" height="400" alt="image" />
        <p>{product.name}</p>
        <br />
        <Link href="/products">戻る</Link>
      </main>
    </div>
  );
};

export default Products;
