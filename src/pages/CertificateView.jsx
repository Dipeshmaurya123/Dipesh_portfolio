import { useParams } from "react-router-dom";

function CertificateView() {
  const { fileName } = useParams();
  const fileUrl = `/certificates/${fileName}`;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <iframe src={fileUrl} title="Certificate" className="w-full h-screen" />
    </div>
  );
}

export default CertificateView;
