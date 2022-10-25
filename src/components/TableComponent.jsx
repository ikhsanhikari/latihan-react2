import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

const TableComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      <Container>
        <h3>List Product</h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>description</th>
              <th>price</th>
              <th>discountPercentage</th>
              <th>rating</th>
              <th>stock</th>
              <th>brand</th>
              <th>category</th>
              <th>thumbnail</th>
              <th>images</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.rating}</td>
                <td>{item.stock}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>
                  <img
                    sizes="100px"
                    height="100px"
                    src={item.thumbnail}
                    alt=""
                  />
                </td>
                <td>
                  {item.images.map((item) => (
                    <div >
                      <img width="50px" height="50px" src={item} />
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableComponent;
