import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is CORS?</Accordion.Header>
            <Accordion.Body>
              What is CORS used for? Cross-Origin Resource Sharing (CORS) is an
              HTTP-header based mechanism that allows a server to indicate any
              origins (domain, scheme, or port) other than its own from which a
              browser should permit loading resources.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
            <Accordion.Body>
              <p>
              Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
              </p>
              <p>
              Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How does the private route work?</Accordion.Header>
            <Accordion.Body>
            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
            <Accordion.Body>
            As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. <br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
