"use client";

import { useState, useEffect } from "react";
import { FiX, FiFile } from "react-icons/fi";
import Button from "@/components/Admin/Form/Button";

export default function ImageUpload({
  accept = "image/*",
  previewClass = "",
  label,
  id,
  name,
  onChange,
  initialImage,
}) {
  const [preview, setPreview] = useState(null);
  const [isImage, setIsImage] = useState(true);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (initialImage && typeof initialImage === "string") {
      const fileType = initialImage?.split(".")?.pop();
      setIsImage(["jpg", "jpeg", "png", "gif"].includes(fileType));
      setPreview(initialImage);
      setFileName(initialImage.split("/").pop());
    }
  }, [initialImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      setIsImage(fileType === "image");
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
      onChange(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFileName("");
    onChange(null);
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {preview && (
        <div className="mt-4 relative">
          {isImage ? (
            <img
              src={preview.replace("public/", "/")}
              alt="Preview"
              className={`w-full h-auto border border-gray-300 rounded-md ${previewClass}`}
            />
          ) : (
            <div className="flex items-center border border-gray-300 rounded-md p-4">
              <FiFile className="text-gray-700 mr-2" size={24} />
              <span>{fileName}</span>
            </div>
          )}
          <Button
            type="danger"
            onClick={handleRemoveImage}
            className="absolute top-0 right-0 mt-2 mr-2"
            size="sm"
          >
            <FiX />
          </Button>
        </div>
      )}
    </div>
  );
}
