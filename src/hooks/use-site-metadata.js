import {graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata =() => {
    // console.log("ran!")
    const data = useStaticQuery(graphql`
    query {
        site {
          data: siteMetadata {
            title
            desc
          }
        }
      }
    `)
    return data.site.data;
}

export default useSiteMetadata;
