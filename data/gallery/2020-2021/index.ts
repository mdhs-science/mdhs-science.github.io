import { Gallery, galleryPath } from "../../types";

const basePath = `${galleryPath}/2020-2021`;
const baseName = `${basePath}/2020-2021`;

const gallery: Gallery = {
  id: "2020-2021",
  images: [
    {
      src: `${basePath}/tmp.png`,
      description: "Temp",
    },
  ],
};

export default gallery;
