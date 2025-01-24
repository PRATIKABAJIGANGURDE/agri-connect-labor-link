import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const PhoneAuth = ({ onSuccess }: { onSuccess: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = () => {
    toast({
      title: "OTP Sent",
      description: "Please check your phone for the verification code",
    });
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    toast({
      title: "Success",
      description: "Phone number verified successfully",
    });
    onSuccess();
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 animate-fadeIn">
      <Card className="bg-white shadow-lg">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 bg-tech-green/10 rounded-full flex items-center justify-center mb-4">
            <Phone className="h-8 w-8 text-tech-green" />
          </div>
          <CardTitle className="text-2xl font-semibold text-tech-green">
            Phone Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showOtp ? (
            <>
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button 
                onClick={handleSendOtp}
                className="w-full bg-tech-green hover:bg-tech-green/90 text-white"
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-lg text-center tracking-widest"
                  maxLength={6}
                />
              </div>
              <Button 
                onClick={handleVerifyOtp}
                className="w-full bg-tech-green hover:bg-tech-green/90 text-white"
              >
                Verify OTP
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneAuth;