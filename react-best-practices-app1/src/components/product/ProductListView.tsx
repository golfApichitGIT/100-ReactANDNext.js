/* eslint-disable @typescript-eslint/no-explicit-any */
// presentation component
//# 17 เเยก Component ให้เป็น Single Responsibility Principle (SRP)

type ProductListViewProp = {
  product: any[];
};
const ProductListView = ({ product }: ProductListViewProp) => {
  return (
    <div
      style={{
        color: "red",
        backgroundColor: "black",
        width: 500,
        padding: 10,
        textAlign: "center",
      }}
    >
      {product?.map((item: any) => {
        return (
          <p key={item.id}>
            {item.id} - {item.title}
          </p>
        );
      })}
    </div>
  );
};

export default ProductListView;
