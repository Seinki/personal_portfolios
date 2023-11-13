import { Col, Container, Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { portfolio } from "../data/index";

export default function PortfolioComponent() {
  return (
    <div className="portfolio-page min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center pb-5">My Portfolios</h1>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="d-flex row-cols-4">
            {portfolio.map((data) => {
              return (
                <div className="cards-porto" key={data.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="fs-6 fw-bold"
                        >
                          {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {data.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        <a className="text-decoration-none" href={data.link}>
                          See more
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-5">
            <button className="btn rounded-5">
              <a className="text-decoration-none" href="https://github.com/Seinki/" target="_blank" rel="noreferrer">
                See more on GitHub <i className="fa-solid fa-arrow-right"></i>
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
