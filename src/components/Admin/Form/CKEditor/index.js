"use client";
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { TbSourceCode, TbHtml } from "react-icons/tb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorComponent = ({ label, name, control, defaultValue }) => {
  const editorRef = useRef();
  const [showSource, setShowSource] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1 justify-between">
        {label && (
          <label
            htmlFor={name}
            className="block text-gray-700 font-semibold mr-2"
          >
            {label}
          </label>
        )}
        <button
          type="button"
          onClick={() => setShowSource((prev) => !prev)}
          className="text-gray-700 hover:text-black border border-gray-600 rounded p-2 flex flex-row justify-center items-center text-xs gap-x-1"
        >
          {!showSource ? (
            <>
              <TbSourceCode size={18} /> Kaynak
            </>
          ) : (
            <>
              <TbHtml size={18} /> Önizleme
            </>
          )}
        </button>
      </div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) =>
          showSource ? (
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          ) : (
            <CKEditor
              editor={ClassicEditor}
              data={value}
              onReady={(editor) => {
                editorRef.current = editor;
              }}
              onChange={(event, editor) => {
                onChange(editor.getData());
              }}
            />
          )
        }
      />
    </div>
  );
};

export default CKEditorComponent;

// "use client";

// import React, { useRef, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Controller } from "react-hook-form";
// import { TbSourceCode, TbHtml } from "react-icons/tb";

// const CKEditorComponent = ({ label, name, control, defaultValue }) => {
//   const editorRef = useRef();
//   const [showSource, setShowSource] = useState(false);

//   return (
//     <div className="mb-4">
//       <div className="flex items-center mb-1 justify-between">
//         {label && (
//           <label
//             htmlFor={name}
//             className="block text-gray-700 font-semibold mr-2"
//           >
//             {label}
//           </label>
//         )}
//         <button
//           type="button"
//           onClick={() => setShowSource((prev) => !prev)}
//           className="text-gray-700 hover:text-black border border-gray-600 rounded p-2 flex flex-row justify-center items-center text-xs gap-x-1"
//         >
//           {!showSource ? (
//             <>
//               <TbSourceCode size={18} /> Kaynak
//             </>
//           ) : (
//             <>
//               <TbHtml size={18} /> Önizleme
//             </>
//           )}
//         </button>
//       </div>
//       <Controller
//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//         render={({ field: { onChange, value } }) =>
//           showSource ? (
//             <textarea
//               value={value}
//               onChange={(e) => onChange(e.target.value)}
//               className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           ) : (
//             <CKEditor
//               editor={ClassicEditor}
//               data={value}
//               onReady={(editor) => {
//                 editorRef.current = editor;
//               }}
//               onChange={(event, editor) => {
//                 onChange(editor.getData());
//               }}
//             />
//           )
//         }
//       />
//     </div>
//   );
// };

// export default CKEditorComponent;
