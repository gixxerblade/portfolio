import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const text = {
  project1: {
    title: "Angry Pickles",
    description:
      "An ecommerce application to create a storefront with Gatsby, Stripe, & Netlify Functions.",
    source: "https://github.com/gixxerblade/Angry-Pickles",
    link: "https://angrypickles.com/home",
    images: "https://i.ibb.co/pdv2kRk/angrypickle.jpg",
  },
  project2: {
    title: "Create, Read, Update, and Delete Tutorial Application",
    description:
      "Created an application to demonstrate persistent storage using Gatsby and React, utilizing Google Firestore for data storage.",
    source:
      "https://dev.to/vetswhocode/build-a-crud-firestore-app-in-react-gatsby-with-hooks-4ig9",
    link: "https://codesandbox.io/s/gatsby-crud-tutorial-c6xs1",
    images: "https://i.ibb.co/QdL9MW7/editing-Works.gif",
  },
  project3: {
    title: "Profile Card Creator",
    description:
      "I wrote a tutorial for dev.to upload and fetch photos using Cloudinary",
    source:
      "https://dev.to/vetswhocode/react-tutorial-upload-and-fetch-photos-with-cloudinary-2ec9",
    link: "http://profile-card-tut.surge.sh/",
    images: "https://i.ibb.co/fQTW1M0/vwc.jpg",
  },
  project4: {
    title: "Scoreboard",
    description:
      "As part of a coding challenge for Vet's Who Code, I made a simple scoreboard using React",
    source: "https://github.com/gixxerblade/scoreboard",
    link: "http://scoreboard-project.surge.sh/",
    images: "https://i.ibb.co/nk307DC/scoreboard.png",
  },
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  cardContent: {
    height: 170,
  },
  media: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      height: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: 0,
    },
  },
  typography: {
    fontSize: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
}))
const MediaCard = props => {
  const classes = useStyles(props)
  const items = Object.entries(text).map((key, value) => {
    return (
      <StyledCardDiv key={key}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={key[1].images}
              title={key[1].title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {key[1].title}
              </Typography>
              <Typography fontSize={classes.typography} component="p">
                {key[1].description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={key[1].source} size="small" color="primary">
              Source
            </Button>
            <Button href={key[1].link} size="small" color="primary">
              Live
            </Button>
          </CardActions>
        </Card>
      </StyledCardDiv>
    )
  })
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {items}
    </Grid>
  )
}

/* MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}
 */
export default MediaCard

const StyledCardDiv = styled.div`
  margin: 1rem;
  list-style-type: none;
`
