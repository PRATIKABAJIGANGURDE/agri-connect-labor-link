import { MapPin, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  location: string;
  wage: string;
  duration: string;
  farmerName: string;
  onApply: () => void;
}

const JobCard = ({ title, location, wage, duration, farmerName, onApply }: JobCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-agri-text">{title}</h3>
          <Button onClick={onApply} className="bg-agri-brown hover:bg-agri-brown/90 text-white">
            Apply Now
          </Button>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            <span>{wage}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          Posted by: {farmerName}
        </div>
      </div>
    </Card>
  );
};

export default JobCard;