"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import {
  ADD_SITE_LOGO_MUTATION,
  GET_SITE_LOGOS_QUERY,
} from "@/graphql/queries/siteLogo";
import SiteLogoForm from "../_form";
import { toast } from "react-toastify";

export default function CreateSiteLogoPage() {
  const router = useRouter();

  const [addSiteLogo, { loading }] = useMutation(ADD_SITE_LOGO_MUTATION, {
    onCompleted: () => {
      toast("Resim başarıyla oluşturuldu!", "success");
      router.push("/admin/site-logo");
    },
    onError: (error) => {
      toast(`Hata: ${error.message}`, "error");
    },
    refetchQueries: [{ query: GET_SITE_LOGOS_QUERY }],
  });

  const handleFormSubmit = (formData) => {
    console.log(formData);
    addSiteLogo({ variables: { input: formData } });
  };

  return (
    <Card title={"Site Logo Oluştur"}>
      <SiteLogoForm
        onSubmit={handleFormSubmit}
        loading={loading}
        buttonText="Oluştur"
      />
    </Card>
  );
}
