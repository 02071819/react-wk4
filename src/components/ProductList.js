import ProductItem from "./ProductItem";
import products from "../json/products.json";
import { Row, Col } from "antd";

export default function ProductList({products}) {
  return (
    <Row gutter={[32, 32]}>
    {products.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 12 }} 
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}
// export default function ProductList() {
//   return (
//     <div className="main row products">
//       {products.map(product => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }