import fs from "fs";
import path from "path";
import slugify from "slugify";

export const processFileUpload = async (
  file,
  uploadDir = "./public/uploads"
) => {
  const { name, ext } = path.parse(file.name);
  const slugifiedFileName = slugify(name, {
    replacement: "_",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const finalFileName = `${slugifiedFileName}${ext}`;
  const filePath = path.join(uploadDir, finalFileName);
  const fileArrayBuffer = await file.arrayBuffer();
  await fs.promises.writeFile(filePath, Buffer.from(fileArrayBuffer));
  return filePath;
};
