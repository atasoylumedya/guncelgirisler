"use client";

import { useQuery, useMutation } from "@apollo/client";
import { useRouter, useParams } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import {
  GET_SETTING_QUERY,
  UPDATE_SETTING_MUTATION,
} from "@/graphql/queries/setting";
import SettingForm from "./_form";
import { toast } from "react-toastify";

export default function EditSettingPage() {
  const { loading, error, data } = useQuery(GET_SETTING_QUERY);
  const router = useRouter();

  const [updateSetting, { loading: updateLoading }] = useMutation(
    UPDATE_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast("Ayarlar başarıyla güncellendi!", "success");
        router.push("/admin/setting");
      },
      onError: (error) => {
        toast(`Hata: ${error.message}`, "error");
      },
      refetchQueries: [{ query: GET_SETTING_QUERY }],
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFormSubmit = (formData) => {
    const { __typename, id, createdAt, updatedAt, ...cleanedInput } = formData;

    if (
      !(cleanedInput.bannerLeft && typeof cleanedInput.bannerLeft === "object")
    ) {
      delete cleanedInput.bannerLeft;
    }

    if (
      !(
        cleanedInput.bannerRight && typeof cleanedInput.bannerRight === "object"
      )
    ) {
      delete cleanedInput.bannerRight;
    }
    if (!(cleanedInput.logo && typeof cleanedInput.logo === "object")) {
      delete cleanedInput.logo;
    }

    updateSetting({ variables: { id, input: cleanedInput } });
  };

  return (
    <Card title={"Ayarlar"}>
      <SettingForm
        onSubmit={handleFormSubmit}
        defaultValues={data.getSetting}
        loading={updateLoading}
        buttonText="Güncelle"
      />
    </Card>
  );
}
