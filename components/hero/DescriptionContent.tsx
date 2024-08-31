"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const DescriptionContent = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.8)}
      className="text-sm lg:text-lg text-gray-400 mb-3 lg:mb-5 max-w-[600px]"
    >
      <p>
        Hello, je m&apos;appelle Rémi. J&apos;ai 22 ans et je suis développeur
        depuis 5 ans, avec une forte préférence pour le développement backend.
      </p>
      <p>J&apos;ai 2 ans d&apos;expérience avec Symfony et 1 an avec React.</p>
      <p className="mt-2">
        React me permet de créer des applications ergonomiques, en offrant une
        bonne UI/UX.
      </p>
      <p>
        Symfony me permet de gérer la partie serveur de manière efficace,
        notamment en créant et en gérant des API robustes.
      </p>
    </motion.div>
  );
};

export default DescriptionContent;
