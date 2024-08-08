import Image from "next/image";

export default function SidebarAd({ source }) {
  return (
    <div className="hidden lg:block py-4 relative ">
      <div className="text-center text-white ">
        {source && (
          <img
            src={source.replace("public/", "/")}
            className=" mx-auto w-full"
          />
        )}
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function SidebarAd({ source }) {
//   return (
//     <div className="hidden lg:block lg:w-1/6  py-4 relative ">
//       <div className="text-center text-white ">
//         {source && (
//           <img
//             src={source.replace("public/", "/")}
//             className=" mx-auto w-full"
//           />
//         )}
//       </div>
//     </div>
//   );
// }
