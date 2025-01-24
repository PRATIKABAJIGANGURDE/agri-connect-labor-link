import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";

interface UserTypeSelectionProps {
  onSelect: (type: "farmer" | "worker") => void;
}

const UserTypeSelection = ({ onSelect }: UserTypeSelectionProps) => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-tech-green mb-8">Choose your role</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          onClick={() => onSelect("farmer")}
          className="p-8 bg-tech-green hover:bg-tech-green/90 text-white flex flex-col items-center gap-4 min-w-[240px] shadow-lg transition-all duration-300"
        >
          <User size={36} />
          <span className="text-lg font-medium">I'm a Farmer</span>
        </Button>
        <Button
          onClick={() => onSelect("worker")}
          className="p-8 bg-tech-blue hover:bg-tech-blue/90 text-white flex flex-col items-center gap-4 min-w-[240px] shadow-lg transition-all duration-300"
        >
          <Users size={36} />
          <span className="text-lg font-medium">I'm a Worker</span>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeSelection;