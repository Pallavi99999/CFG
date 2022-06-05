import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  const data = {
    fellow: [
      {
        title: "Session Count",
        value: "10",
      },
      {
        title: "Students Onboarded",
        value: "20",
      },
      {
        title: "Fellow Onboarded",
        value: "20",
      },
    ],
    associate: [
      {
        title: "Session Count",
        value: "10",
      },
      {
        title: "Students Onboarded",
        value: "20",
      },
    ],
    manager: [
      {
        title: "Session Count",
        value: "10",
      },
      {
        title: "Students Onboarded",
        value: "20",
      },
    ],
  };

  const activeUserType = localStorage.getItem("user-type");

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {data[activeUserType]?.map(({ title, value }) => (
                <Col key={title} lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            {title}
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {value}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;