import { Gallery, galleryPath } from "../../types";

const basePath = `${galleryPath}/2019-2020`;
const baseName = `${basePath}/2019-2020`;

const gallery: Gallery = {
  id: "2019-2020",
  images: [
    {
      src: `${basePath}/tmp.png`,
      description: "Temp",
    },
  ],
};

export default gallery;
