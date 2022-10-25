import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";

const ListAnswer = () => {
  const [answer, setAnswer] = useState([]);

  const getAllAnswer = async () => {
    await axios.get("http://localhost:9090/answer").then((item) => {
      setAnswer(item.data);
    });
  };

  const deleteAnswer = async (id) => {
    await axios.delete(`http://localhost:9090/answer/${id}`).then((item) => {});
  };
  

  useEffect(() => {
    getAllAnswer();
  });

  return (
    <>
      <Container>
        <Link to={"/tambah-answer"}>
          <Button>Tambah data</Button>
        </Link>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Answer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {answer.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.answer}</td>
                <td>
                  <Button onClick={() => deleteAnswer(item.id)}>delete</Button>

                  <Link to={`/edit/${item.id}`}>
                    <Button >update</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ListAnswer;
