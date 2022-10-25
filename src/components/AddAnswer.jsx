import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const AddAnswer = () => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  var req = {
    answer,
  };

  const handlePostAnswer = async () => {
    await axios.post("http://localhost:9090/answer", req).then((res) => {
      setAnswer("");
      navigate("/list-answer");
    });
  };

  return (
    <>
      <Container>
        <Form method="POST">
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
        <Button onClick={handlePostAnswer}>Submit</Button>
      </Container>
    </>
  );
};

export default AddAnswer;
