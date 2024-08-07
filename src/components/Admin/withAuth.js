import { useEffect, useState } from "react";
import { verifyToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Loading from "@/components/Admin/UI/Loading"; // Yükleme bileşenini dahil edin

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Yükleme durumu
    const router = useRouter();

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (isClient) {
        const token = localStorage.getItem("GUNCELGIRISLER_accessToken");
        if (!token || !verifyToken(token)) {
          router.push("/admin/login");
        } else {
          setIsLoading(false);
        }
      }
    }, [isClient, router]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen w-screen">
          <Loading
            text="Yönlendiriliyorsunuz..."
            color="primary"
            textColor={"secondary"}
            size="medium"
            borderSize={4}
          />
        </div>
      ); // Yükleme durumu gösterimi
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

// import { useEffect } from "react";
// import { verifyToken } from "@/lib/auth";
// import { useRouter } from "next/navigation";

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem("accessToken");
//       if (!token || !verifyToken(token)) {
//         router.push("/admin/login");
//       }
//     }, [router]);

//     const token = localStorage.getItem("accessToken");
//     if (!token || !verifyToken(token)) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
