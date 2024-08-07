"use client";

import { useQuery, useMutation } from "@apollo/client";
import { useRouter, useParams } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import {
  GET_SITE_LOGO_QUERY,
  UPDATE_SITE_LOGO_MUTATION,
  GET_SITE_LOGOS_QUERY,
} from "@/graphql/queries/siteLogo";
import SiteLogoForm from "../../_form";
import { toast } from "react-toastify";

export default function EditSiteLogoPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SITE_LOGO_QUERY, {
    variables: { id },
  });
  const router = useRouter();

  const [updateSiteLogo, { loading: updateLoading }] = useMutation(
    UPDATE_SITE_LOGO_MUTATION,
    {
      onCompleted: () => {
        toast("Resim başarıyla güncellendi!", "success");
        router.push("/admin/site-logo");
      },
      onError: (error) => {
        toast(`Hata: ${error.message}`, "error");
      },
      refetchQueries: [{ query: GET_SITE_LOGOS_QUERY }],
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFormSubmit = (formData) => {
    const { __typename, id, createdAt, updatedAt, ...cleanedInput } = formData;

    if (!(cleanedInput.image && typeof cleanedInput.image === "object")) {
      delete cleanedInput.image;
    }

    updateSiteLogo({ variables: { id, input: cleanedInput } });
  };

  return (
    <Card title={"Site Logo Düzenle"}>
      <SiteLogoForm
        onSubmit={handleFormSubmit}
        defaultValues={data.getSiteLogo}
        loading={updateLoading}
        buttonText="Güncelle"
      />
    </Card>
  );
}
