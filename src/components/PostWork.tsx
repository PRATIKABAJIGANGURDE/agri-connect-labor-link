import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Calendar, MapPin, IndianRupee, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn max-w-2xl mx-auto pt-4">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-tech-green">Post New Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Work Title</label>
            <Input
              placeholder="e.g. Rice Harvesting"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="focus:ring-tech-green"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 focus:ring-tech-green"
                placeholder="Enter work location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Daily Wage</label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 focus:ring-tech-green"
                placeholder="Enter daily wage"
                value={formData.wage}
                onChange={(e) => setFormData({ ...formData, wage: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Duration</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 focus:ring-tech-green"
                placeholder="e.g. 1 week"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <Textarea
              placeholder="Describe the work requirements..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[100px] focus:ring-tech-green"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white font-medium py-3 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Post Work
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default PostWork;