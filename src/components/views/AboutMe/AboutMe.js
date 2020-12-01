import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

function AboutMe() {
  return (
    <div className="back">
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={10} >
              <p>dupa</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;