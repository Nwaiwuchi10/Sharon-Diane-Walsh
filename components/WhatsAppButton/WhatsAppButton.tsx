"use client";

export default function WhatsAppButton() {
  // Sharon's phone number formatted for WhatsApp API (no +, spaces, or dashes)
  const whatsappUrl = "https://wa.me/18562082465";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <svg
        className="w-8 h-8 fill-current transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.116-2.905-6.993-1.876-1.878-4.355-2.911-6.992-2.913-5.443 0-9.865 4.42-9.869 9.865-.001 1.761.47 3.477 1.365 5.008L1.817 22.04l6.126-1.606c.01-.006.02-.012.03-.018zM17.43 14.92c-.29-.145-1.716-.848-1.983-.945-.266-.096-.461-.145-.656.145-.195.29-.757.945-.928 1.139-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.337-1.444-.863-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.34.435-.509.145-.17.194-.29.29-.485.097-.194.048-.364-.025-.509-.072-.145-.656-1.579-.898-2.161-.23-.559-.464-.482-.635-.49-.164-.008-.353-.01-.542-.01-.19 0-.498.07-.76.353-.261.284-1 .976-1 2.378 0 1.4.1.022.03.1.08.08 1.09 1.664 2.63 2.33 1.54.666 2.54.887 3.54.74 1.15-.17 1.72-.693 1.96-1.19.24-.495.24-.92.17-.993-.07-.073-.26-.12-.55-.265z" />
      </svg>
      {/* Tooltip on hover */}
      <span className="absolute left-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
        Chat with Sharon
      </span>
    </a>
  );
}
