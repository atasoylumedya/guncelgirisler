"use client";

import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Table from "@/components/Admin/Table";
import Card from "@/components/Admin/UI/Card";
import Button from "@/components/Admin/Form/Button";
import {
  DELETE_ANNOUNCEMENT_MUTATION,
  GET_ALL_ANNOUNCEMENTS_QUERY,
} from "@/graphql/queries/announcement";

import ClipBoardInput from "@/components/Admin/Form/ClipBoardInput";
import { toast } from "react-toastify";

const columns = [
  {
    accessorKey: "content",
    header: "İçeirk",
  },
  {
    id: "actions",
    header: "İşlemler",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];

const ActionsCell = ({ row }) => {
  const router = useRouter();

  const [deleteAnnouncement] = useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
    refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
  });

  const handleEdit = () => {
    router.push(`/admin/announcement/edit/${row.original.id}`);
  };

  const handleDelete = async () => {
    if (confirm("Bu duyuruyu silmek istediğinize emin misiniz?")) {
      try {
        await deleteAnnouncement({ variables: { id: row.original.id } });
        toast("Duyuru başarıyla silindi!", "success");
      } catch (error) {
        toast(`Silme işlemi başarısız: ${error.message}`, "error");
      }
    }
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleEdit} type="primary" size="sm">
        Düzenle
      </Button>
      <Button onClick={handleDelete} type="danger" size="sm">
        Sil
      </Button>
    </div>
  );
};

export default function AnnouncementsPage() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ALL_ANNOUNCEMENTS_QUERY);

  const handleNewAnnouncement = () => {
    router.push("/admin/announcement/create");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Card
        title="Duyurular"
        buttonSet={() => (
          <Button onClick={handleNewAnnouncement} type="success" size="md">
            Yeni Duyuru Ekle
          </Button>
        )}
      >
        <Table
          columns={columns}
          data={data.allAnnouncements}
          striped
          bordered
        />
      </Card>
    </>
  );
}
