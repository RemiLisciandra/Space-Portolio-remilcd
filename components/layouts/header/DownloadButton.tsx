"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxDownload } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = "/cv/cv.pdf";

    fetch(fileUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = "CV_Rémi_LISCIANDRA.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          toast.success("Téléchargement du CV en cours !", {
            position: "bottom-right",
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
    <motion.button
      onClick={handleDownload}
      className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 text-white font-medium py-2 px-4 rounded hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Télécharger mon CV
      <RxDownload className="text-[20px] ms-2 flex-shrink-0" />
    </motion.button>
  );
};

export default DownloadButton;
