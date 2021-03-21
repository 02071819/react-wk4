import { Layout } from 'antd';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Nav_bar from "../components/Navbar";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="NORDIC NEST Shopping Cart"/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;

// function Home() {
//   return (
//     <div className="bg-color">
//         <div className="container grid-container">
//             <Header />
//             <Nav_bar></Nav_bar>
//             <ProductList />
//             <Footer />
//         </div>
//     </div>
//   );
// }

// export default Home;