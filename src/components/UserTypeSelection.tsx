import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";

interface UserTypeSelectionProps {
  onSelect: (type: "farmer" | "worker") => void;
}

const UserTypeSelection = ({ onSelect }: UserTypeSelectionProps) => {
  return (
    <div className="flex flex-col items-center space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-agri-text mb-8">Choose your role</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          onClick={() => onSelect("farmer")}
          className="p-8 bg-agri-brown hover:bg-agri-brown/90 text-white flex flex-col items-center gap-3 min-w-[200px]"
        >
          <User size={32} />
          <span className="text-lg">I'm a Farmer</span>
        </Button>
        <Button
          onClick={() => onSelect("worker")}
          className="p-8 bg-agri-yellow hover:bg-agri-yellow/90 text-agri-text flex flex-col items-center gap-3 min-w-[200px]"
        >
          <Users size={32} />
          <span className="text-lg">I'm a Worker</span>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;