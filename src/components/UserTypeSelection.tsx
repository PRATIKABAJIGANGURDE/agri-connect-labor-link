import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";

interface UserTypeSelectionProps {
  onSelect: (type: "farmer" | "worker") => void;
}

const UserTypeSelection = ({ onSelect }: UserTypeSelectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-tech-green mb-12">Choose your role</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mx-auto">
        <Button
          onClick={() => onSelect("farmer")}
          className="aspect-square p-8 bg-tech-green hover:bg-tech-green/90 text-white flex flex-col items-center justify-center gap-6 min-h-[200px] shadow-lg transition-all duration-300 hover:scale-105"
        >
          <User size={48} />
          <span className="text-xl font-medium">I'm a Farmer</span>
          <span className="text-sm opacity-80">Post jobs & hire workers</span>
        </Button>
        <Button
          onClick={() => onSelect("worker")}
          className="aspect-square p-8 bg-tech-blue hover:bg-tech-blue/90 text-white flex flex-col items-center justify-center gap-6 min-h-[200px] shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Users size={48} />
          <span className="text-xl font-medium">I'm a Worker</span>
          <span className="text-sm opacity-80">Find agricultural work</span>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;