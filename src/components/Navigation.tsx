import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm border-b z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-2 text-tech-green hover:text-tech-green/90 hover:bg-tech-green/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-tech-green">Agri-Labor Connect</h1>
      </div>
    </div>
  );
};

export default Navigation;