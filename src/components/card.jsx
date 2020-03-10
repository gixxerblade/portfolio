import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
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
    source: "https://github.com/gixxerblade/Gatsby-CRUD-Tutorial-",
    link: "https://codesandbox.io/s/gatsby-crud-tutorial-c6xs1",
    images: "https://i.ibb.co/QdL9MW7/editing-Works.gif",
  },
}

const styles = {
  card: {
    maxWidth: 600,
  },
  media: {
    height: 200,
  },
}
const MediaCard = props => {
  const { classes } = props
  console.log(text)
  const items = Object.entries(text).map((key, value) => {
    console.log(key[1].title)
    return (
      <StyledLI key={key}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={key[1].images}
              title={key[1].title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {key[1].title}
              </Typography>
              <Typography component="p">{key[1].description}</Typography>
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
      </StyledLI>
    )
  })
  return <StyledUL>{items}</StyledUL>
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard)

const StyledUL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  justify-content: space-around;
`
const StyledLI = styled.li`
  margin: 1rem;
`
