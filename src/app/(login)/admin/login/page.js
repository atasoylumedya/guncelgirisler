"use client";

import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Button from "@/components/Admin/Form/Button";
import TextInput from "@/components/Admin/Form/TextInput";
import Loading from "@/components/Admin/UI/Loading";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { LOGIN_MUTATION } from "@/graphql/queries/login";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      login(data.login.token);
    },
  });

  const onSubmit = (formData) => {
    loginMutation({
      variables: { username: formData.username, password: formData.password },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-0 text-center">Yönetim Paneli</h2>
        {/* <p className="text-center text-sm font-semibold mb-6">
          Yönetim paneline giriş yap
        </p> */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Yönetici Adı"
            id="username"
            name="username"
            type="text"
            placeholder="Yönetici Adı"
            {...register("username", {
              required: "Yönetici adı boş bırakılamaz",
            })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <TextInput
            label="Şifreniz"
            id="password"
            name="password"
            type="password"
            placeholder="Şifreniz"
            {...register("password", {
              required: "Şifreniz alanı boş bırakılamaz",
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <Button type="primary" className="w-full">
            {loading ? (
              <Loading color="white" size="small" borderSize={2} />
            ) : (
              "Giriş Yap"
            )}
          </Button>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </div>
  );
}
