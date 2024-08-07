"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/Admin/Form/Button";
import TextInput from "@/components/Admin/Form/TextInput";
import TextArea from "@/components/Admin/Form/TextArea";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/Admin/Form/Select";

export default function AnnouncementForm({
  onSubmit,
  defaultValues,
  loading,
  buttonText,
}) {
  const router = useRouter();

  const {
    register,
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  // Reset form values when defaultValues change
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextArea
        label="İçerik"
        id="content"
        name="content"
        type="text"
        placeholder="İçerik"
        {...register("content", {
          required: "İçerik alanı boş bırakılamaz",
        })}
      />

      {errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}
      <div className="flex space-x-2">
        <Button
          buttonType={"button"}
          type="secondary"
          onClick={() => {
            router.push("/admin/announcement");
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
