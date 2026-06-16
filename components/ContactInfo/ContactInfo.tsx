export const CONTACT_INFO = {
  email: "sharondianewalsh@gmail.com",
  phone: "+1 (856) 208-2465",
  phoneRaw: "+18562082465",
  whatsappUrl: "https://wa.me/18562082465",
};

import React from "react";

interface ContactLinkProps {
  type: "email" | "phone";
  className?: string;
  children?: React.ReactNode;
}

export function ContactLink({ type, className = "", children }: ContactLinkProps) {
  if (type === "email") {
    return (
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className={`hover:text-[#c9a84c] transition-colors duration-200 ${className}`}
      >
        {children || CONTACT_INFO.email}
      </a>
    );
  }

  return (
    <a
      href={`tel:${CONTACT_INFO.phoneRaw}`}
      className={`hover:text-[#c9a84c] transition-colors duration-200 ${className}`}
    >
      {children || CONTACT_INFO.phone}
    </a>
  );
}
