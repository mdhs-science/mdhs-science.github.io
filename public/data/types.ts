export type Image = {
  src: string;
  description: string;
};

export type Gallery = {
  id: string;
  images: Image[];
};

export const basePath = `/data`;
export const galleryPath = `${basePath}/gallery`;
