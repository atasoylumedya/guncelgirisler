"use client";

import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Table from "@/components/Admin/Table";
import Card from "@/components/Admin/UI/Card";
import Button from "@/components/Admin/Form/Button";
import {
  GET_SITE_LOGOS_QUERY,
  DELETE_SITE_LOGO_MUTATION,
} from "@/graphql/queries/siteLogo";

import ClipBoardInput from "@/components/Admin/Form/ClipBoardInput";
import { toast } from "react-toastify";

const columns = [
  {
    accessorKey: "image",
    header: "Logo",
    cell: ({ getValue, row }) => {
      return (
        <div
          className={`border p-2 inline-block rounded-xl`}
          style={{ borderColor: row.original.color }}
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
    id: "actions",
    header: "İşlemler",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];

const ActionsCell = ({ row }) => {
  const router = useRouter();

  const [deleteSiteLogo] = useMutation(DELETE_SITE_LOGO_MUTATION, {
    refetchQueries: [{ query: GET_SITE_LOGOS_QUERY }],
  });

  const handleEdit = () => {
    router.push(`/admin/site-logo/edit/${row.original.id}`);
  };

  const handleDelete = async () => {
    if (confirm("Bu resmi silmek istediğinize emin misiniz?")) {
      try {
        await deleteSiteLogo({ variables: { id: row.original.id } });
        toast("Resim başarıyla silindi!", "success");
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

export default function SiteLogoPage() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_SITE_LOGOS_QUERY);

  const handleNewSiteLogo = () => {
    router.push("/admin/site-logo/create");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card
      title="Site Logoları"
      buttonSet={() => (
        <Button onClick={handleNewSiteLogo} type="success" size="md">
          Yeni Logo Ekle
        </Button>
      )}
    >
      <Table columns={columns} data={data.getSiteLogos} striped bordered />
    </Card>
  );
}
