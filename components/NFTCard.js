import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import image from "../images/image-equilibrium.jpg";
import iconE from "../images/icon-ethereum.svg";
import iconC from "../images/icon-clock.svg";
import iconV from "../images/icon-view.svg";
import dp from "../images/image-avatar.png";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 260,
        padding: 2.5,
        borderRadius: 3,
        backgroundColor: " hsl(216, 50%, 16%)",
        fontFamily: "Outfit",
      }}
    >
      <CardActionArea>
        <div className="media">
          <CardMedia
            component="img"
            height="270"
            image={image}
            alt="equilibrium"
            sx={{ borderRadius: 2 }}
            className="equilibrium"
          />
          <img src={iconV} alt="overlay" className="overlay" />
        </div>

        <CardContent sx={{ marginLeft: -2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "hsl(0, 0%, 100%)", fontFamily: "Outfit" }}
            className="heading"
          >
            Equilibrium #3429
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "hsl(215, 51%, 70%)", fontFamily: "Outfit" }}
          >
            Our Equilibrium collection promotes balance and calm.
          </Typography>
          <CardActions>
            <Button size="small">
              <img src={iconE} alt="imgE" className="imageE" />
              <p style={{ color: "hsl(178, 100%, 50%)", fontFamily: "Outfit" }}>
                0.041 ETH
              </p>
            </Button>
            <Button size="small">
              <img src={iconC} alt="imgE" className="imageC" />
              <p style={{ color: "hsl(215, 51%, 70%)", fontFamily: "Outfit" }}>
                3 days left
              </p>
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
      <hr className="horizontal-line"></hr>
      <div className="creator">
        <Avatar
          alt="Remy Sharp"
          src={dp}
          sx={{
            border: "1px solid white",
            display: "inline-block",
            marginRight: 2,
            marginTop: 1,
          }}
        />
        <Typography className="type" sx={{ fontFamily: "Outfit" }}>
          Creation of <span className="name">Jules Wyvern</span>
        </Typography>
      </div>
    </Card>
  );
}
