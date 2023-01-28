import { createPrismic } from "@prismicio/vue";

// import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
  endpoint: "https://fam-webview.cdn.prismic.io/api/v2",
});

export default prismic;