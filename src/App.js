import React, { useState } from "react";

// function App() {
//   const [batches, setBatches] = useState([]);
//   const [status, setStatus] = useState("Idle");
//   const [errors, setErrors] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const [batchSize, setBatchSize] = useState(10);
//   const [downloadReady, setDownloadReady] = useState(false);

//   const handleFiles = (e) => {
//     const files = Array.from(e.target.files);
//     const batches = [];

//     for (let i = 0; i < files.length; i += batchSize) {
//       batches.push(files.slice(i, i + batchSize));
//     }
//     setBatches(batches);
//     setProgress(0);
//     setStatus("Ready to upload");
//     setErrors([]);
//     setDownloadReady(false);
//   };

//   const uploadBatch = async (batch, index, retry = 0) => {
//     const formData = new FormData();
//     batch.forEach((file) => formData.append("files", file));

//     try {
//       const response = await fetch("http://localhost:8080/uploadfile", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       });

//       if (!response.ok) throw new Error("Upload failed");
//       setProgress((prev) => prev + 1);
//     } catch (err) {
//       if (retry < 2) {
//         console.warn(`Retrying batch ${index + 1} (attempt ${retry + 1})...`);
//         await uploadBatch(batch, index, retry + 1);
//       } else {
//         setErrors((prev) => [...prev, `Batch ${index + 1} failed after retries`]);
//       }
//     }
//   };

//   const startUpload = async () => {
//     setStatus("Uploading...");
//     setProgress(0);
//     setErrors([]);
//     setDownloadReady(false);

//     const uploads = batches.map((batch, index) => uploadBatch(batch, index));
//     await Promise.all(uploads);

//     setStatus("✅ Upload complete");
//     setDownloadReady(true);
//   };

//   const downloadExcel = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/download");
//       if (!response.ok) throw new Error("Download failed");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "final_sheet.xlsx";
//       a.click();
//     } catch (err) {
//       setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
//     }
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-xl mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">📁 Batch PDF Uploader</h2>

//       <input
//         type="file"
//         multiple
//         accept=".pdf"
//         onChange={handleFiles}
//         className="mb-4 w-full border p-2 rounded"
//       />

//       <div className="mb-4">
//         <label className="mr-2 font-medium">Batch Size:</label>
//         <input
//           type="number"
//           min={1}
//           max={50}
//           value={batchSize}
//           onChange={(e) => setBatchSize(Number(e.target.value))}
//           className="border px-2 py-1 w-20 rounded"
//         />
//       </div>

//       <button
//         onClick={startUpload}
//         disabled={batches.length === 0 || status === "Uploading..."}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
//       >
//         Upload All Batches
//       </button>

//       {downloadReady && (
//         <button
//           onClick={downloadExcel}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full mt-4"
//         >
//           📥 Download Final Excel
//         </button>
//       )}

//       <div className="mt-6">
//         <p className="text-gray-700"><strong>Status:</strong> {status}</p>
//         <p className="text-gray-700"><strong>Uploaded:</strong> {progress}/{batches.length} batches</p>

//         {errors.length > 0 && (
//           <div className="mt-4 text-red-600">
//             <strong>Errors:</strong>
//             <ul className="list-disc list-inside">
//               {errors.map((err, i) => <li key={i}>{err}</li>)}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [batches, setBatches] = useState([]);
//   const [status, setStatus] = useState("Idle");
//   const [errors, setErrors] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const [batchSize, setBatchSize] = useState(10);
//   const [downloadReady, setDownloadReady] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFiles = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//     const batches = [];
//     for (let i = 0; i < files.length; i += batchSize) {
//       batches.push(files.slice(i, i + batchSize));
//     }
//     setBatches(batches);
//     setProgress(0);
//     setStatus("Ready to upload");
//     setErrors([]);
//     setDownloadReady(false);
//   };

//   const uploadBatch = async (batch, index, retry = 0) => {
//     const formData = new FormData();
//     batch.forEach((file) => formData.append("files", file));

//     try {
//       const response = await fetch("http://localhost:8080/uploadfile", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       });

//       if (!response.ok) throw new Error("Upload failed");
//       setProgress((prev) => prev + 1);
//     } catch (err) {
//       if (retry < 2) {
//         console.warn(`Retrying batch ${index + 1} (attempt ${retry + 1})...`);
//         await uploadBatch(batch, index, retry + 1);
//       } else {
//         setErrors((prev) => [...prev, `Batch ${index + 1} failed after retries`]);
//       }
//     }
//   };

//   const startUpload = async () => {
//     setStatus("Uploading...");
//     setProgress(0);
//     setErrors([]);
//     setDownloadReady(false);

//     const uploads = batches.map((batch, index) => uploadBatch(batch, index));
//     await Promise.all(uploads);

//     setStatus("✅ Upload complete");
//     setDownloadReady(true);
//   };

//   const downloadExcel = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/download");
//       if (!response.ok) throw new Error("Download failed");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "final_sheet.xlsx";
//       a.click();
//     } catch (err) {
//       setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">📁 Batch PDF Uploader</h2>

//         <input
//           type="file"
//           multiple
//           accept=".pdf"
//           onChange={handleFiles}
//           className="mb-4 w-full border border-blue-300 p-2 rounded shadow-sm"
//         />

//         {selectedFiles.length > 0 && (
//           <div className="mb-4 text-sm text-gray-600">
//             <strong>Selected Files:</strong>
//             <ul className="list-disc ml-5 mt-1">
//               {selectedFiles.map((file, i) => (
//                 <li key={i}>{file.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="mb-4">
//           <label className="mr-2 font-medium">Batch Size:</label>
//           <input
//             type="number"
//             min={1}
//             max={50}
//             value={batchSize}
//             onChange={(e) => setBatchSize(Number(e.target.value))}
//             className="border px-2 py-1 w-20 rounded"
//           />
//         </div>

//         <button
//           onClick={startUpload}
//           disabled={batches.length === 0 || status === "Uploading..."}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full shadow-md"
//         >
//           Upload All Batches
//         </button>

//         {downloadReady && (
//           <button
//             onClick={downloadExcel}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full mt-4 shadow-md"
//           >
//             📥 Download Final Excel
//           </button>
//         )}

//         <div className="mt-6">
//           <p className="text-gray-700"><strong>Status:</strong> {status}</p>
//           <p className="text-gray-700"><strong>Uploaded:</strong> {progress}/{batches.length} batches</p>

//           {/* Progress Bar */}
//           {batches.length > 0 && (
//             <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
//               <div
//                 className="bg-blue-500 h-4 rounded-full transition-all duration-500"
//                 style={{ width: `${(progress / batches.length) * 100}%` }}
//               ></div>
//             </div>
//           )}

//           {errors.length > 0 && (
//             <div className="mt-4 text-red-600">
//               <strong>Errors:</strong>
//               <ul className="list-disc list-inside">
//                 {errors.map((err, i) => <li key={i}>{err}</li>)}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [batches, setBatches] = useState([]);
//   const [status, setStatus] = useState("Idle");
//   const [errors, setErrors] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const [batchSize, setBatchSize] = useState(10);
//   const [downloadReady, setDownloadReady] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [estimatedTime, setEstimatedTime] = useState(0);
//   const [uploadStartTime, setUploadStartTime] = useState(null);

//   const handleFiles = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//     const batches = [];
//     for (let i = 0; i < files.length; i += batchSize) {
//       batches.push(files.slice(i, i + batchSize));
//     }
//     setBatches(batches);
//     setProgress(0);
//     setStatus("Ready to upload");
//     setErrors([]);
//     setDownloadReady(false);
//     setEstimatedTime(0);
//     setUploadStartTime(null);
//   };

//   const uploadBatch = async (batch, index, retry = 0) => {
//     const formData = new FormData();
//     batch.forEach((file) => formData.append("files", file));

//     try {
//       const response = await fetch("http://localhost:8080/uploadfile", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       });

//       if (!response.ok) throw new Error("Upload failed");

//       const now = Date.now();
//       const elapsed = (now - uploadStartTime) / 1000;
//       const avgTime = elapsed / (index + 1);
//       const remaining = Math.round(avgTime * (batches.length - (index + 1)));
//       setEstimatedTime(remaining);

//       setProgress((prev) => prev + 1);
//     } catch (err) {
//       if (retry < 2) {
//         console.warn(`Retrying batch ${index + 1} (attempt ${retry + 1})...`);
//         await uploadBatch(batch, index, retry + 1);
//       } else {
//         setErrors((prev) => [...prev, `Batch ${index + 1} failed after retries`]);
//       }
//     }
//   };

//   const startUpload = async () => {
//     setStatus("Uploading...");
//     setProgress(0);
//     setErrors([]);
//     setDownloadReady(false);
//     setUploadStartTime(Date.now());

//     const uploads = batches.map((batch, index) => uploadBatch(batch, index));
//     await Promise.all(uploads);

//     setStatus("✅ Upload complete");
//     setDownloadReady(true);
//   };

//   const downloadExcel = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/download");
//       if (!response.ok) throw new Error("Download failed");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "final_sheet.xlsx";
//       a.click();
//     } catch (err) {
//       setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
//       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 animate-pulse">📁 Batch PDF Uploader</h2>

//         <input
//           type="file"
//           multiple
//           accept=".pdf"
//           onChange={handleFiles}
//           className="mb-4 w-full border border-blue-300 p-2 rounded shadow-sm"
//         />

//         {selectedFiles.length > 0 && (
//           <div className="mb-4 text-sm text-gray-600">
//             <strong>Selected Files:</strong>
//             <ul className="list-disc ml-5 mt-1">
//               {selectedFiles.map((file, i) => (
//                 <li key={i}>{file.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="mb-4">
//           <label className="mr-2 font-medium">Batch Size:</label>
//           <input
//             type="number"
//             min={1}
//             max={50}
//             value={batchSize}
//             onChange={(e) => setBatchSize(Number(e.target.value))}
//             className="border px-2 py-1 w-20 rounded"
//           />
//         </div>

//         <button
//           onClick={startUpload}
//           disabled={batches.length === 0 || status === "Uploading..."}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
//         >
//           🚀 Upload All Batches
//         </button>

//         {downloadReady && (
//           <button
//             onClick={downloadExcel}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full mt-4 shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
//           >
//             📥 Download Final Excel
//           </button>
//         )}

//         <div className="mt-6">
//           <p className="text-gray-700"><strong>Status:</strong> {status}</p>
//           <p className="text-gray-700"><strong>Uploaded:</strong> {progress}/{batches.length} batches</p>
//           {estimatedTime > 0 && status === "Uploading..." && (
//             <p className="text-sm text-gray-500">⏱ Estimated time left: ~{estimatedTime}s</p>
//           )}

//           {batches.length > 0 && (
//             <div className="w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full transition-all duration-500 animate-pulse"
//                 style={{ width: `${(progress / batches.length) * 100}%` }}
//               ></div>
//             </div>
//           )}

//           {errors.length > 0 && (
//             <div className="mt-4 text-red-600">
//               <strong>Errors:</strong>
//               <ul className="list-disc list-inside">
//                 {errors.map((err, i) => <li key={i}>{err}</li>)}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [batches, setBatches] = useState([]);
//   const [status, setStatus] = useState("Idle");
//   const [errors, setErrors] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const [batchSize, setBatchSize] = useState(10);
//   const [downloadReady, setDownloadReady] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [estimatedTime, setEstimatedTime] = useState(0);
//   const [uploadStartTime, setUploadStartTime] = useState(null);
//   const [fileStatuses, setFileStatuses] = useState({});

//   const handleFiles = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//     setFileStatuses(files.reduce((acc, file) => ({ ...acc, [file.name]: "pending" }), {}));

//     const batches = [];
//     for (let i = 0; i < files.length; i += batchSize) {
//       batches.push(files.slice(i, i + batchSize));
//     }
//     setBatches(batches);
//     setProgress(0);
//     setStatus("Ready to upload");
//     setErrors([]);
//     setDownloadReady(false);
//     setEstimatedTime(0);
//     setUploadStartTime(null);
//   };

//   const uploadBatch = async (batch, index, retry = 0) => {
//     const formData = new FormData();
//     batch.forEach((file) => formData.append("files", file));

//     try {
//       const response = await fetch("http://localhost:8080/uploadfile", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       });

//       if (!response.ok) throw new Error("Upload failed");

//       const now = Date.now();
//       const elapsed = (now - uploadStartTime) / 1000;
//       const avgTime = elapsed / (index + 1);
//       const remaining = Math.round(avgTime * (batches.length - (index + 1)));
//       setEstimatedTime(remaining);

//       setProgress((prev) => prev + 1);

//       setFileStatuses((prev) => {
//         const updated = { ...prev };
//         batch.forEach((file) => (updated[file.name] = "success"));
//         return updated;
//       });
//     } catch (err) {
//       if (retry < 2) {
//         console.warn(`Retrying batch ${index + 1} (attempt ${retry + 1})...`);
//         await uploadBatch(batch, index, retry + 1);
//       } else {
//         setErrors((prev) => [...prev, `Batch ${index + 1} failed after retries`]);
//         setFileStatuses((prev) => {
//           const updated = { ...prev };
//           batch.forEach((file) => (updated[file.name] = "error"));
//           return updated;
//         });
//       }
//     }
//   };

//   const retryFile = async (file) => {
//     const formData = new FormData();
//     formData.append("files", file);
//     try {
//       setFileStatuses((prev) => ({ ...prev, [file.name]: "uploading" }));
//       const response = await fetch("http://localhost:8080/uploadfile", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       });
//       if (!response.ok) throw new Error("Upload failed");
//       setFileStatuses((prev) => ({ ...prev, [file.name]: "success" }));
//     } catch (err) {
//       setFileStatuses((prev) => ({ ...prev, [file.name]: "error" }));
//     }
//   };

//   const startUpload = async () => {
//     setStatus("Uploading...");
//     setProgress(0);
//     setErrors([]);
//     setDownloadReady(false);
//     setUploadStartTime(Date.now());

//     const uploads = batches.map((batch, index) => uploadBatch(batch, index));
//     await Promise.all(uploads);

//     setStatus("✅ Upload complete");
//     setDownloadReady(true);
//   };

//   const downloadExcel = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/download");
//       if (!response.ok) throw new Error("Download failed");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "final_sheet.xlsx";
//       a.click();
//     } catch (err) {
//       setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-12">
//       <div className="w-[700px] bg-white shadow-2xl rounded-2xl p-10 border border-gray-300">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 animate-pulse">📁 Batch PDF Uploader</h2>

//         <input
//           type="file"
//           multiple
//           accept=".pdf"
//           onChange={handleFiles}
//           className="mb-4 w-full border border-blue-300 p-2 rounded shadow-sm"
//         />

//         {selectedFiles.length > 0 && (
//           <div className="mb-4 text-sm text-gray-600 h-40 overflow-y-auto border border-gray-300 rounded p-2">
//             <strong className="block mb-2">Selected Files:</strong>
//             <ul className="space-y-1">
//               {selectedFiles.map((file, i) => (
//                 <li key={i} className="flex items-center justify-between text-sm">
//                   <span className="truncate w-3/4" title={file.name}>{file.name}</span>
//                   {fileStatuses[file.name] === "success" && <span className="text-green-600">✅</span>}
//                   {fileStatuses[file.name] === "uploading" && <span className="text-blue-500 animate-pulse">⏳</span>}
//                   {fileStatuses[file.name] === "error" && (
//                     <button
//                       className="ml-2 text-red-600 underline text-xs"
//                       onClick={() => retryFile(file)}
//                     >
//                       Retry
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="mb-4">
//           <label className="mr-2 font-medium">Batch Size:</label>
//           <input
//             type="number"
//             min={1}
//             max={50}
//             value={batchSize}
//             onChange={(e) => setBatchSize(Number(e.target.value))}
//             className="border px-2 py-1 w-20 rounded"
//           />
//         </div>

//         <button
//           onClick={startUpload}
//           disabled={batches.length === 0 || status === "Uploading..."}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
//         >
//           🚀 Upload All Batches
//         </button>

//         {downloadReady && (
//           <button
//             onClick={downloadExcel}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full mt-4 shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
//           >
//             📥 Download Final Excel
//           </button>
//         )}

//         <div className="mt-6">
//           <p className="text-gray-700"><strong>Status:</strong> {status}</p>
//           <p className="text-gray-700"><strong>Uploaded:</strong> {progress}/{batches.length} batches</p>
//           {estimatedTime > 0 && status === "Uploading..." && (
//             <p className="text-sm text-gray-500">⏱ Estimated time left: ~{estimatedTime}s</p>
//           )}

//           {batches.length > 0 && (
//             <div className="w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full transition-all duration-500 animate-pulse"
//                 style={{ width: `${(progress / batches.length) * 100}%` }}
//               ></div>
//             </div>
//           )}

//           {errors.length > 0 && (
//             <div className="mt-4 text-red-600">
//               <strong>Errors:</strong>
//               <ul className="list-disc list-inside">
//                 {errors.map((err, i) => <li key={i}>{err}</li>)}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  const [batches, setBatches] = useState([]);
  const [status, setStatus] = useState("Idle");
  const [errors, setErrors] = useState([]);
  const [progress, setProgress] = useState(0);
  const [batchSize, setBatchSize] = useState(10);
  const [downloadReady, setDownloadReady] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [uploadStartTime, setUploadStartTime] = useState(null);
  const [fileStatuses, setFileStatuses] = useState({});
  const [totalSize, setTotalSize] = useState(0);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setFileStatuses(files.reduce((acc, file) => ({ ...acc, [file.name]: "pending" }), {}));
    setTotalSize(files.reduce((sum, file) => sum + file.size, 0));

    const batches = [];
    for (let i = 0; i < files.length; i += batchSize) {
      batches.push(files.slice(i, i + batchSize));
    }
    setBatches(batches);
    setProgress(0);
    setStatus("Ready to upload");
    setErrors([]);
    setDownloadReady(false);
    setEstimatedTime(0);
    setUploadStartTime(null);
  };

  const uploadBatch = async (batch, index, retry = 0) => {
    const formData = new FormData();
    batch.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("https://document-converter-oga9.onrender.com/uploadfile", {
        method: "POST",
        body: formData,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) throw new Error("Upload failed");

      const now = Date.now();
      const elapsed = (now - uploadStartTime) / 1000;
      const avgTime = elapsed / (index + 1);
      const remaining = Math.round(avgTime * (batches.length - (index + 1)));
      setEstimatedTime(remaining);

      setProgress((prev) => prev + 1);

      setFileStatuses((prev) => {
        const updated = { ...prev };
        batch.forEach((file) => (updated[file.name] = "success"));
        return updated;
      });
    } catch (err) {
      if (retry < 2) {
        console.warn(`Retrying batch ${index + 1} (attempt ${retry + 1})...`);
        await uploadBatch(batch, index, retry + 1);
      } else {
        setErrors((prev) => [...prev, `Batch ${index + 1} failed after retries`]);
        setFileStatuses((prev) => {
          const updated = { ...prev };
          batch.forEach((file) => (updated[file.name] = "error"));
          return updated;
        });
      }
    }
  };

  const retryFile = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    try {
      setFileStatuses((prev) => ({ ...prev, [file.name]: "uploading" }));
      const response = await fetch("https://document-converter-oga9.onrender.com/uploadfile", {
        method: "POST",
        body: formData,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      if (!response.ok) throw new Error("Upload failed");
      setFileStatuses((prev) => ({ ...prev, [file.name]: "success" }));
    } catch (err) {
      setFileStatuses((prev) => ({ ...prev, [file.name]: "error" }));
    }
  };

  const startUpload = async () => {
    setStatus("Uploading...");
    setProgress(0);
    setErrors([]);
    setDownloadReady(false);
    setUploadStartTime(Date.now());

    const uploads = batches.map((batch, index) => uploadBatch(batch, index));
    await Promise.all(uploads);

    setStatus("✅ Upload complete");
    setDownloadReady(true);
  };

  // const downloadExcel = async () => {
  //   try {
  //     const response = await fetch("https://a400c30d5532.ngrok-free.app/download");
  //     if (!response.ok) throw new Error("Download failed");

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "final_sheet.xlsx";
  //     a.click();
  //   } catch (err) {
  //     setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
  //   }
  // };

  const downloadExcel = async () => {
    try {
      const response = await fetch("https://document-converter-oga9.onrender.com/download", {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true", // in case ngrok injects banner
        },
      });
  
      if (!response.ok || !response.body) {
        throw new Error("Download failed");
      }
  
      const blob = await response.blob();
  
      // Make sure it's an Excel file
      if (blob.type !== "application/octet-stream" && !blob.type.includes("excel")) {
        throw new Error("Invalid Excel file returned");
      }
  
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "final_sheet.xlsx";
      document.body.appendChild(a); // required for Firefox
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // cleanup
    } catch (err) {
      console.error("Download error:", err);
      setErrors((prev) => [...prev, "❌ Failed to download final Excel file."]);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-12">
      <div className="w-[700px] bg-white shadow-2xl rounded-2xl p-10 border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 animate-pulse">📁 Batch PDF Uploader</h2>

        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFiles}
          className="mb-4 w-full border border-blue-300 p-2 rounded shadow-sm"
        />

        {selectedFiles.length > 0 && (
          <div className="mb-4 text-sm text-gray-600 h-40 overflow-y-auto border border-gray-300 rounded p-2">
            <strong className="block mb-2">Selected Files ({(totalSize / 1024).toFixed(2)} KB):</strong>
            <ul className="space-y-1">
              {selectedFiles.map((file, i) => (
                <li key={i} className="flex items-center justify-between text-sm">
                  <span className="truncate w-3/4" title={file.name}>{file.name}</span>
                  {fileStatuses[file.name] === "success" && <span className="text-green-600">✅</span>}
                  {fileStatuses[file.name] === "uploading" && <span className="text-blue-500 animate-pulse">⏳</span>}
                  {fileStatuses[file.name] === "error" && (
                    <button
                      className="ml-2 text-red-600 underline text-xs"
                      onClick={() => retryFile(file)}
                    >
                      Retry
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <label className="mr-2 font-medium">Batch Size:</label>
          <input
            type="number"
            min={1}
            max={50}
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            className="border px-2 py-1 w-20 rounded"
          />
        </div>

        <button
          onClick={startUpload}
          disabled={batches.length === 0 || status === "Uploading..."}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
        >
          🚀 Upload All Batches
        </button>

        {downloadReady && (
          <button
            onClick={downloadExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full mt-4 shadow-md transition duration-300 ease-in-out hover:scale-[1.01]"
          >
            📥 Download Final Excel
          </button>
        )}

        <div className="mt-6">
          <p className="text-gray-700"><strong>Status:</strong> {status}</p>
          <p className="text-gray-700"><strong>Uploaded:</strong> {progress}/{batches.length} batches</p>
          {estimatedTime > 0 && status === "Uploading..." && (
            <p className="text-sm text-gray-500">⏱ Estimated time left: ~{estimatedTime}s</p>
          )}

          {batches.length > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full transition-all duration-500 animate-pulse"
                style={{ width: `${(progress / batches.length) * 100}%` }}
              ></div>
            </div>
          )}

          {errors.length > 0 && (
            <div className="mt-4 text-red-600">
              <strong>Errors:</strong>
              <ul className="list-disc list-inside">
                {errors.map((err, i) => <li key={i}>{err}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
