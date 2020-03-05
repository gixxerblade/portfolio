import React from "react"
import Layout from "../components/layout"
import MediaCard from "../components/card"
import styled from "styled-components"
const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <StyledDiv className="card-container">
        {/*       <Grid container direction="column" justify="center" alignItems="center">
         */}{" "}
        <MediaCard />
      </StyledDiv>
      {/*       </Grid>
       */}{" "}
    </Layout>
  )
}
export default Projects

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`
