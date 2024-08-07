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
      <ImageUpload
        accept={"*"}
        label="Logo"
        id="logo"
        name="logo"
        onChange={(file) => setValue("logo", file)}
        previewClass="!max-h-[200px] !w-auto"
        initialImage={defaultValues?.logo}
      />

      <ImageUpload
        accept={"*"}
        label="Sol Banner"
        id="bannerLeft"
        name="bannerLeft"
        onChange={(file) => setValue("bannerLeft", file)}
        previewClass="!max-h-[200px] !w-auto"
        initialImage={defaultValues?.bannerLeft}
      />
      <ImageUpload
        accept={"*"}
        label="Sağ Banner"
        id="bannerRight"
        name="bannerRight"
        onChange={(file) => setValue("bannerRight", file)}
        previewClass="!max-h-[200px] !w-auto"
        initialImage={defaultValues?.bannerRight}
      />

      <TextInput
        label="Telegram"
        id="telegram"
        name="telegram"
        type="text"
        placeholder="Telegram"
        {...register("telegram")}
      />

      <TextInput
        label="Twitter"
        id="twitter"
        name="twitter"
        type="text"
        placeholder="Twitter"
        {...register("twitter")}
      />

      <TextInput
        label="Instagram"
        id="instagram"
        name="instagram"
        type="text"
        placeholder="Instagram"
        {...register("instagram")}
      />
      <TextInput
        label="Skype"
        id="skype"
        name="skype"
        type="text"
        placeholder="Skype"
        {...register("skype")}
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
