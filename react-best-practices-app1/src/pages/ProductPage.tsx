import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const ProductPage = () => {
  const [product, setProduct] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://api.codingthailand.com/api/course");
      const data = await response.json();
      setProduct(data.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>กำลังโหลด......</div>
  if (error) return <div style={{color : 'red'}}>{error?.message}</div>

  return (
    <div>
      <h1>ProductPage</h1>
      <div>
        {
          product?.map((item: any) => {
            return <p key={item.id}>{item.id} - {item.title}</p>
          })
        }
      </div>
      <NavLink to="/">Back..</NavLink>
    </div>
  );
};

export default ProductPage;
