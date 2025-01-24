import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

const PhoneAuth = ({ onSuccess }: { onSuccess: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "OTP Sent",
      description: "Please check your phone for the verification code",
    });
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

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
        <CardContent className="space-y-6">
          {!showOtp ? (
            <>
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="text-lg focus:ring-tech-green"
                  maxLength={10}
                />
              </div>
              <Button 
                onClick={handleSendOtp}
                className="w-full bg-tech-green hover:bg-tech-green/90 text-white flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  render={({ slots }) => (
                    <InputOTPGroup className="gap-2 justify-center">
                      {slots.map((slot, idx) => (
                        <InputOTPSlot key={idx} {...slot} index={idx} />
                      ))}
                    </InputOTPGroup>
                  )}
                />
              </div>
              <Button 
                onClick={handleVerifyOtp}
                className="w-full bg-tech-green hover:bg-tech-green/90 text-white flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
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