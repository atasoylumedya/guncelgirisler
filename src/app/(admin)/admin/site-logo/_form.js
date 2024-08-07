"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/Admin/Form/Button";
import TextInput from "@/components/Admin/Form/TextInput";
import TextArea from "@/components/Admin/Form/TextArea";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/Admin/Form/ImageUpload"; // New ImageUpload component

export default function SiteLogoForm({
  onSubmit,
  defaultValues,
  loading,
  buttonText,
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        label="Başlık"
        id="title"
        name="title"
        type="text"
        placeholder="Başlık"
        {...register("title")}
      />

      <ImageUpload
        accept={"*"}
        label="Resim"
        id="image"
        name="image"
        onChange={(file) => setValue("image", file)}
        previewClass="hover:bg-black p-5"
        initialImage={defaultValues?.image}
      />

      <TextInput
        label="Renk"
        id="color"
        name="color"
        type="text"
        placeholder="Çerçeve, Arkaplan Rengi"
        {...register("color")}
      />

      <div className="flex space-x-2">
        <Button
          buttonType={"button"}
          type="secondary"
          onClick={() => {
            router.push("/admin/site-logo");
          }}
        >
          İptal
        </Button>
        <Button type="primary">
          {loading ? "İşlem Devam Ediyor..." : buttonText}
        </Button>
      </div>
    </form>
  );
}
