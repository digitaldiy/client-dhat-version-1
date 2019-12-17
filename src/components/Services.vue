<template>
      <ProjectsGrid :projects="$page.projects.edges" />
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectsGrid from "@/components/ProjectsGrid"

export default {
  components: {
    ProjectsGrid
  }
}
</script>