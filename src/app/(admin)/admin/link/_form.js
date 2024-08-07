"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/Admin/Form/Button";
import TextInput from "@/components/Admin/Form/TextInput";
import TextArea from "@/components/Admin/Form/TextArea";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/Admin/Form/ImageUpload"; // New ImageUpload component
import { GET_SITE_LOGOS_QUERY } from "@/graphql/queries/siteLogo";
import { useQuery } from "@apollo/client";
import Select from "@/components/Admin/Form/Select";
import Checkbox from "@/components/Admin/Form/Checkbox";

export default function LinkForm({
  onSubmit,
  defaultValues,
  loading,
  buttonText,
}) {
  const router = useRouter();

  const { data, loading: logosLoading } = useQuery(GET_SITE_LOGOS_QUERY);

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
        label="Link Başlığı"
        id="title"
        name="title"
        type="text"
        placeholder="Link Başlığı"
        {...register("title")}
      />
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
      <TextInput
        label="Link"
        id="link"
        name="link"
        type="text"
        placeholder="Link"
        {...register("link")}
      />
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
      {/* <ImageUpload
        accept={"*"}
        label="Banner"
        id="banner"
        name="banner"
        onChange={(file) => setValue("banner", file)}
        initialImage={defaultValues?.banner}
      /> */}
      <Select
        label="Banner"
        id="banner"
        name="banner"
        value={watch("banner")}
        onChange={(e) => setValue("banner", e.target.value)}
        options={
          logosLoading
            ? [{ value: "", label: "Loading..." }]
            : data?.getSiteLogos?.map((logo) => ({
                value: logo.id,
                label: logo.title,
              })) || []
        }
        ref={register("banner").ref}
      />
      {/* <TextInput
        label="Banner"
        id="banner"
        name="banner"
        type="text"
        placeholder="Banner"
        {...register("banner")}
      /> */}
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
      <TextInput
        label="Banner Sağ Metni"
        id="bannerLeftText"
        name="bannerLeftText"
        type="text"
        placeholder="Banner Sağ Metni"
        {...register("bannerLeftText")}
      />
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
      <TextInput
        label="Banner Sol Metni"
        id="bannerRightText"
        name="bannerRightText"
        type="text"
        placeholder="Banner Sol Metni"
        {...register("bannerRightText")}
      />
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}
      <TextInput
        label="Sıra"
        id="order"
        name="order"
        type="text"
        placeholder="Sıralama"
        {...register("order")}
      />
      {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}

      <Checkbox
        label="Öneçıkar"
        id="highlights"
        name="highlights"
        checked={watch("highlights")}
        onChange={(e) => setValue("highlights", e.target.checked)}
      />

      <div className="flex space-x-2">
        <Button
          buttonType={"button"}
          type="secondary"
          onClick={() => {
            router.push("/admin/link");
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
