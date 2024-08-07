"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import { ADD_LINK_MUTATION, GET_LINKS_QUERY } from "@/graphql/queries/link";
import LinkForm from "../_form";
import { toast } from "react-toastify";

export default function CreateLinkPage() {
  const router = useRouter();

  const [addLink, { loading }] = useMutation(ADD_LINK_MUTATION, {
    onCompleted: () => {
      toast("Link başarıyla oluşturuldu!", "success");
      router.push("/admin/link");
    },
    onError: (error) => {
      toast(`Hata: ${error.message}`, "error");
    },
    refetchQueries: [{ query: GET_LINKS_QUERY }],
  });

  const handleFormSubmit = (formData) => {
    console.log(formData);
    addLink({ variables: { input: formData } });
  };

  return (
    <Card title={"Link Oluştur"}>
      <LinkForm
        onSubmit={handleFormSubmit}
        loading={loading}
        buttonText="Oluştur"
      />
    </Card>
  );
}
