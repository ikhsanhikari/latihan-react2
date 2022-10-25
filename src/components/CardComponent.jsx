import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

const CardComponent = (props) => {
  return (
    <>
      <Container>
        <Card
          className="my-2"
          color="dark"
          outline
          style={{
            width: "100%",
          }}
        >
          <CardHeader>{props.title}</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CardComponent;
