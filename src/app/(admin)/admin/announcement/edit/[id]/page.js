"use client";

import { useQuery, useMutation } from "@apollo/client";
import { useRouter, useParams } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import AnnouncementForm from "../../_form";
import {
  GET_ANNOUNCEMENT_QUERY,
  UPDATE_ANNOUNCEMENT_MUTATION,
  GET_ALL_ANNOUNCEMENTS_QUERY,
} from "@/graphql/queries/announcement";
import { toast } from "react-toastify";

export default function EditAnnouncementPage() {
  const { id } = useParams();
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_ANNOUNCEMENT_QUERY, {
    variables: { id },
  });

  const [updateAnnouncement, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_ANNOUNCEMENT_MUTATION, {
      onCompleted: () => {
        toast("Duyuru başarıyla güncellendi!", "success");
        router.push("/admin/announcement");
      },
      onError: (error) => {
        toast(`Hata: ${error.message}`, "error");
      },
      refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
    });

  const handleFormSubmit = (formData) => {
    const { __typename, id, createdAt, updatedAt, ...cleanedInput } = formData;
    updateAnnouncement({ variables: { id, input: cleanedInput } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card title="Duyuru Düzenle">
      <AnnouncementForm
        onSubmit={handleFormSubmit}
        defaultValues={data.announcement}
        loading={updateLoading}
        buttonText="Güncelle"
      />
    </Card>
  );
}
