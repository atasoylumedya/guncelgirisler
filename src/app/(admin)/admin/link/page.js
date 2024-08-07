"use client";

import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Table from "@/components/Admin/Table";
import Card from "@/components/Admin/UI/Card";
import Button from "@/components/Admin/Form/Button";
import { GET_LINKS_QUERY, DELETE_LINK_MUTATION } from "@/graphql/queries/link";

import ClipBoardInput from "@/components/Admin/Form/ClipBoardInput";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa6";

const columns = [
  {
    accessorKey: "title",
    header: "Link Başlığı",
  },
  {
    accessorKey: "banner.image",
    header: "Banner",
    cell: ({ getValue, row }) => {
      console.log(row.original);
      return (
        <div
          className={`border p-2 inline-block rounded-xl`}
          style={{ borderColor: row.original.banner.color }}
        >
          <img
            src={getValue().replace("public/", "/")}
            alt={getValue().replace("public/", "/")}
            className=" h-16 w-auto bg-black px-4 py-2 rounded-lg object-cover "
          />
        </div>
      );
    },
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: (info) => <ClipBoardInput value={info.getValue()} />,
  },

  {
    accessorKey: "order",
    header: "Sıra",
  },

  {
    id: "actions",
    header: "İşlemler",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];

const ActionsCell = ({ row }) => {
  const router = useRouter();

  const [deleteLink] = useMutation(DELETE_LINK_MUTATION, {
    refetchQueries: [{ query: GET_LINKS_QUERY }],
  });

  const handleEdit = () => {
    router.push(`/admin/link/edit/${row.original.id}`);
  };

  const handleDelete = async () => {
    if (confirm("Bu etkinliği silmek istediğinize emin misiniz?")) {
      try {
        await deleteLink({ variables: { id: row.original.id } });
        toast("Link başarıyla silindi!", "success");
      } catch (error) {
        toast(`Silme işlemi başarısız: ${error.message}`, "error");
      }
    }
  };

  return (
    <div className="flex space-x-2">
      {row.original.highlights && (
        <div className="font-bold rounded bg-yellow-500  text-white py-1 px-2 text-sm flex items-center justify-center">
          <FaStar />
        </div>
      )}
      <Button onClick={handleEdit} type="primary" size="sm">
        Düzenle
      </Button>
      <Button onClick={handleDelete} type="danger" size="sm">
        Sil
      </Button>
    </div>
  );
};

export default function LinkPage() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_LINKS_QUERY);

  const handleNewLink = () => {
    router.push("/admin/link/create");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card
      title="Linkler"
      buttonSet={() => (
        <Button onClick={handleNewLink} type="success" size="md">
          Yeni Link Ekle
        </Button>
      )}
    >
      <Table columns={columns} data={data.getLinks} striped bordered />
    </Card>
  );
}
