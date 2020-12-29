import { Gallery, galleryPath } from "../../types";

const basePath = `${galleryPath}/2018-2019`;
const baseName = `${basePath}/2018-2019`;

const gallery: Gallery = {
  id: "2018-2019",
  images: [
    {
      src: `${basePath}/tmp.png`,
      description: "Temp",
    },
  ],
};

export default gallery;
