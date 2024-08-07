"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Card from "@/components/Admin/UI/Card";

import AnnouncementForm from "../_form";
import {
  ADD_ANNOUNCEMENT_MUTATION,
  GET_ALL_ANNOUNCEMENTS_QUERY,
} from "@/graphql/queries/announcement";
import { toast } from "react-toastify";

export default function CreateAnnouncementPage() {
  const router = useRouter();

  const [addAnnouncement, { loading, error }] = useMutation(
    ADD_ANNOUNCEMENT_MUTATION,
    {
      onCompleted: () => {
        toast("Duyuru başarıyla oluşturuldu!", "success");
        router.push("/admin/announcement");
      },
      onError: (error) => {
        toast(`Hata: ${error.message}`, "error");
      },
      refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
    }
  );

  const handleFormSubmit = (data) => {
    addAnnouncement({ variables: { input: data } });
  };

  return (
    <Card title="Duyuru Oluştur">
      <AnnouncementForm
        onSubmit={handleFormSubmit}
        defaultValues={{
          content: "",
        }}
        loading={loading}
        buttonText="Oluştur"
      />
    </Card>
  );
}
