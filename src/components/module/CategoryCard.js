import styles from "@/app/components/module/CategoryCard.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({name , title}) => {
  return (
    <div className={styles.card}>
      <Link href={`buy-residential?category=${name}`}>
        <Image src={`/images/${name}.png`} alt="title" width={240} height={140} priority={true}/>
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default CategoryCard
