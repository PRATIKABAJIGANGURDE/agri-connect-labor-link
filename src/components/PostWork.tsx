import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Calendar, MapPin, IndianRupee } from "lucide-react";

const PostWork = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    wage: "",
    duration: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Work Posted Successfully",
      description: "Workers will be able to see your listing now",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-agri-text">Post New Work</h2>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-agri-text">Work Title</label>
          <Input
            placeholder="e.g. Rice Harvesting"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-agri-text">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Enter work location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-agri-text">Daily Wage</label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Enter daily wage"
              value={formData.wage}
              onChange={(e) => setFormData({ ...formData, wage: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-agri-text">Duration</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="e.g. 1 week"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-agri-text">Description</label>
          <Textarea
            placeholder="Describe the work requirements..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="min-h-[100px]"
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-agri-brown hover:bg-agri-brown/90 text-white"
        >
          Post Work
        </Button>
      </div>
    </form>
  );
};

export default PostWork;