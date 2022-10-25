import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const EditAnswer = () => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  var req = {
    answer,
  };

  useEffect(()=>{
    getAnswer(id);
  },[])

  const getAnswer = async (id) => {
    await axios.get(`http://localhost:9090/answer/${id}`).then((res) => {
      setAnswer(res.data.answer);
    });
  };

  const handlePutAnswer = async () => {
    await axios.put(`http://localhost:9090/answer/${id}`, req).then((res) => {
      setAnswer("");
      navigate("/list-answer");
    });
  };

  return (
    <>
      <Container>
        <Form method="PUT">
          <FormGroup>
            <Label for="answer">Answer</Label>
            <Input
              id="answer"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="answer"
              type="text"
              value={answer}
            />
          </FormGroup>
        </Form>
        <Button onClick={handlePutAnswer}>Submit</Button>
      </Container>
    </>
  );
};

export default EditAnswer;
