import React from "react"
//import PropTypes from "prop-types"
//import { withStyles } from "@material-ui/core/styles"
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
      "A minimal ecommerce application to create a storefront with Gatsby, Stripe, & Netlify Functions. The site is statically generated based on Stripe inventory and dynamically updates with live inventory & availability data. The checkout is powered by Stripe integration with serverless functions to interact with the Stripe API. The shopping cart persists in local storage and responsive images provided with gatsby-image.",
    source: "https://github.com/gixxerblade/Angry-Pickles",
    link: "https://angrypickles.netlify.com/",
    images: "https://i.ibb.co/pdv2kRk/angrypickle.jpg",
  },
  project2: {
    title: "Create, Read, Update, and Delete Tutorial Application",
    description:
      'Created an application to demonstrate a "how-to" using Gatsby and React, utilizing Google Firestore NoSQL database for data storage.',
    source:
      "https://dev.to/vetswhocode/build-a-crud-firestore-app-in-react-gatsby-with-hooks-4ig9",
    link: "https://codesandbox.io/s/gatsby-crud-tutorial-c6xs1",
    images: "https://i.ibb.co/QdL9MW7/editing-Works.gif",
  },
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 700,
  },
  media: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      height: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
  typography: {
    fontSize: 10,
  }
}))
const MediaCard = props => {
  const classes = useStyles(props)
  console.log(text)
  const items = Object.entries(text).map((key, value) => {
    console.log(key[1].title)
    return (
      <StyledCardDiv key={key}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={key[1].images}
              title={key[1].title}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {key[1].title}
              </Typography>
              <Typography fontSize={10} component="p">{key[1].description}</Typography>
            </StyledCardContent>
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
const StyledCardContent = styled(CardContent)`
  height: 15rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 12rem;
  }
`
