import fs from "fs";
import path from "path";
import slugify from "slugify";

const uploadDir = "./uploads";

export const fileResolvers = {
  Mutation: {
    readTextFile: async (_, { file }) => {
      const textContent = await file.text();
      return textContent;
    },
    saveFile: async (_, { file }) => {
      try {
        const { name, ext } = path.parse(file.name);
        const slugifiedFileName = slugify(name, {
          replacement: "_", // boşlukları _ ile değiştir
          remove: /[*+~.()'"!:@]/g, // özel karakterleri kaldır
          lower: true, // küçük harfe dönüştür
        });

        const finalFileName = `${slugifiedFileName}${ext}`;
        const filePath = path.join(uploadDir, finalFileName);
        const fileArrayBuffer = await file.arrayBuffer();
        await fs.promises.writeFile(filePath, Buffer.from(fileArrayBuffer));

        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
