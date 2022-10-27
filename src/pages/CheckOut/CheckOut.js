import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURl, email } = user;
  console.log(user);
  return (
    <div className=" text-start p-5">
      <Container>
        <h2>CheckOut Items</h2>
        <p>Name : {displayName}</p>
        <p>Email: {email}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Couser Name</th>
              <th>Price</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Javascript for Beginners</td>
              <td>1000/-</td>
              <td>12/12/2022</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CheckOut;
