import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GraduationCap, ArrowLeft, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const applicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  gender: z.string().min(1, { message: "Please select a gender" }),
  educationLevel: z.string().min(1, { message: "Please select your education level" }),
  program: z.string().min(1, { message: "Please select a program" }),
  address: z
    .string()
    .trim()
    .min(5, { message: "Address must be at least 5 characters" })
    .max(200, { message: "Address must be less than 200 characters" }),
  emergencyContact: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid emergency contact number" })
    .max(20, { message: "Emergency contact must be less than 20 characters" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Apply = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      educationLevel: "",
      program: "",
      address: "",
      emergencyContact: "",
      message: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    // Simulate submission delay. In a real app, send data to a backend API.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Application submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h2 className="font-bold text-lg text-foreground">DUHAGA</h2>
              <p className="text-xs text-muted-foreground">Secretary School</p>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply to DUHAGA</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take the first step toward a rewarding career in office management and administration.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {isSubmitted ? (
            <div className="bg-card border rounded-xl shadow-card p-8 text-center animate-fade-in">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                Application Received!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for applying to DUHAGA Secretary School. Our admissions team will review
                your application and contact you soon.
              </p>
              <Link to="/">
                <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                  Return to Home
                </Button>
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card border rounded-xl shadow-card p-6 md:p-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    {...register("fullName")}
                    aria-invalid={errors.fullName ? "true" : "false"}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+256 700 000 000"
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    {...register("dateOfBirth")}
                    aria-invalid={errors.dateOfBirth ? "true" : "false"}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={watch("gender")}
                    onValueChange={(value) => setValue("gender", value)}
                  >
                    <SelectTrigger id="gender" aria-label="Select gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p className="text-sm text-destructive">{errors.gender.message}</p>
                  )}
                </div>

                {/* Education Level */}
                <div className="space-y-2">
                  <Label htmlFor="educationLevel">Highest Education Level</Label>
                  <Select
                    value={watch("educationLevel")}
                    onValueChange={(value) => setValue("educationLevel", value)}
                  >
                    <SelectTrigger id="educationLevel" aria-label="Select education level">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="o-level">O-Level</SelectItem>
                      <SelectItem value="a-level">A-Level</SelectItem>
                      <SelectItem value="certificate">Certificate</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="degree">Degree</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.educationLevel && (
                    <p className="text-sm text-destructive">{errors.educationLevel.message}</p>
                  )}
                </div>

                {/* Program */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="program">Program of Interest</Label>
                  <Select
                    value={watch("program")}
                    onValueChange={(value) => setValue("program", value)}
                  >
                    <SelectTrigger id="program" aria-label="Select program">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secretarial-diploma">Secretarial Diploma</SelectItem>
                      <SelectItem value="office-management">Office Management</SelectItem>
                      <SelectItem value="computer-applications">Computer Applications</SelectItem>
                      <SelectItem value="business-communication">Business Communication</SelectItem>
                      <SelectItem value="records-management">Records Management</SelectItem>
                      <SelectItem value="short-hand">Shorthand & Typing</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.program && (
                    <p className="text-sm text-destructive">{errors.program.message}</p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your current residential address"
                    {...register("address")}
                    aria-invalid={errors.address ? "true" : "false"}
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                  )}
                </div>

                {/* Emergency Contact */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
                  <Input
                    id="emergencyContact"
                    type="tel"
                    placeholder="+256 700 000 000"
                    {...register("emergencyContact")}
                    aria-invalid={errors.emergencyContact ? "true" : "false"}
                  />
                  {errors.emergencyContact && (
                    <p className="text-sm text-destructive">{errors.emergencyContact.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us why you want to join DUHAGA..."
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Submit Application
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apply;
