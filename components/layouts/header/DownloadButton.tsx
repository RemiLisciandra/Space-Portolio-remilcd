"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxDownload } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./../../ui/Button";

const DownloadButton: React.FC = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Button
        onClick={handleDownload}
        icon={<RxDownload className="text-[20px] flex-shrink-0" />}
      >
        Télécharger mon CV
      </Button>
    </motion.div>
  );
};

export default DownloadButton;
