import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Col, Container, Row } from "react-bootstrap";
import { portfolio } from "../data/js/index";
// ..
AOS.init();

export default function PortfolioComponent() {
  return (
    <div className="portfolio-page min-vh-100 pt-5">
      <Container>
        <Row>
          <Col>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fw-bold text-center pb-5"
            >
              Creative Showcase
            </h1>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="d-lg-flex">
            {portfolio.map((data) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration={data.aosDuration}
                  className="cards-porto"
                  key={data.id}
                >
                  <Card
                    sx={{ width: 220, height: 360 }}
                    className="cards_item bg-transparent shadow border border-1 border-white rounded-3 text-white"
                  >
                    <CardActionArea className="cards_action_area">
                      <CardMedia
                        component="img"
                        height="150"
                        image={data.img}
                        alt="green iguana"
                        className="shadow"
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
                        <Typography variant="body2" color="text.white">
                          {data.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          className="btn_card_porto"
                        >
                          <a className="" href={data.link}>
                            See more
                          </a>
                        </Button>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center pt-5"
          >
            <button className="btn_porto">
              <a
                className="text-decoration-none"
                href="https://github.com/Seinki?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                See more on GitHub <i className="fa-solid fa-arrow-right"></i>
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
