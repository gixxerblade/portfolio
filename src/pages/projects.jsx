import React from "react"
import Layout from "../components/layout"
import MediaCard from "../components/card"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Projects = () => {
  return (
    <Layout>
      <Grid container direction="column" justify="center" alignItems="center">
        <h1>Projects</h1>
        <StyledDiv className="card-container">
          <MediaCard />
        </StyledDiv>
      </Grid>
    </Layout>
  )
}
export default Projects

const StyledDiv = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`
