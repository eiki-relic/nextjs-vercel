import styles from "../../styles/Home.module.css";
import Link from "next/link";

const ProductsList = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>PC</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>ヘッドフォン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};
export default ProductsList;
