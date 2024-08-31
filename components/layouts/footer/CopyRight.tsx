"use client";

import Link from "@/components/ui/Link";

const CopyRight = () => {
  return (
    <div className="my-5 text-xs text-center z-[20]">
      &copy; Rémi LISCIANDRA. Basé sur un projet original de{" "}
      <Link
        href={"https://github.com/Mif2006/Space-Portolio"}
        target="_blank"
        className="inline-flex"
        size="xs"
      >
        Mif2006
      </Link>
      . Tous droits réservés.
    </div>
  );
};

export default CopyRight;
