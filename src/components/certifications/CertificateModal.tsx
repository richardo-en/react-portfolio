type Props = {
  img: string;
  title: string;
  onClose: () => void;
};

export default function CertificateModal({ img, title, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl font-bold hover:opacity-80"
        >
          ×
        </button>

        <img
          src={img}
          alt={title}
          className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
