"use client";

import React from "react";
import { RxDownload } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = "/cv/CV_2024-08-05_Rémi_LISCIANDRA.pdf";

    fetch(fileUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = "CV_2024-08-05_Rémi_LISCIANDRA.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          toast.success("Téléchargement du CV en cours !", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          throw new Error("File not found");
        }
      })
      .catch((error) => {
        toast.error(
          "Erreur lors du téléchargement du CV. Veuillez réessayer plus tard.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 text-white font-medium py-2 px-4 rounded hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500 text-sm md:text-base"
    >
      <span className="hidden sm:inline">Télécharger mon CV</span>
      <span className="sm:hidden">CV</span>
      <RxDownload className="text-[20px] ms-2 flex-shrink-0" />
    </button>
  );
};

export default DownloadButton;
