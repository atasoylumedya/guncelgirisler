"use client";

import { useQuery, useMutation } from "@apollo/client";
import { useRouter, useParams } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import {
  GET_LINK_QUERY,
  UPDATE_LINK_MUTATION,
  GET_LINKS_QUERY,
} from "@/graphql/queries/link";
import LinkForm from "../../_form";
import { toast } from "react-toastify";

export default function EditLinkPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LINK_QUERY, {
    variables: { id },
  });
  const router = useRouter();

  const [updateLink, { loading: updateLoading }] = useMutation(
    UPDATE_LINK_MUTATION,
    {
      onCompleted: () => {
        toast("Link başarıyla güncellendi!", "success");
        router.push("/admin/link");
      },
      onError: (error) => {
        toast(`Hata: ${error.message}`, "error");
      },
      refetchQueries: [{ query: GET_LINKS_QUERY }],
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFormSubmit = (formData) => {
    const { __typename, id, createdAt, updatedAt, ...cleanedInput } = formData;

    // if (!(cleanedInput.banner && typeof cleanedInput.banner === "object")) {
    //   delete cleanedInput.banner;
    // }

    updateLink({ variables: { id, input: cleanedInput } });
  };

  return (
    <Card title={"Link Düzenle"}>
      <LinkForm
        onSubmit={handleFormSubmit}
        defaultValues={{
          ...data.getLink,
          banner: data?.getLink?.banner.id,
        }}
        loading={updateLoading}
        buttonText="Güncelle"
      />
    </Card>
  );
}
