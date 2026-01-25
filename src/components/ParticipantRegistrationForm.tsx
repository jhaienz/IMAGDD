import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle } from "lucide-react";

export default function ParticipantRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    interests: "",
    dietaryRestrictions: "",
    attendanceType: "full",
    workshopPreferences: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for registering for IMAGDD 2026. We've sent a
              confirmation email to <strong>{formData.email}</strong>.
            </p>
            <p className="text-sm text-gray-500">
              You'll receive additional information about the event, schedule,
              and workshops closer to the date.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="mt-6"
              variant="outline"
            >
              Register Another Participant
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Participant Registration</CardTitle>
        <CardDescription>
          Fill out the form below to register for IMAGDD 2026. All fields marked
          with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Professional Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization/Institution</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your company or university"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Your Role/Title *</Label>
              <Input
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                placeholder="Game Developer, Designer, Student, etc."
              />
            </div>
          </div>

          {/* Event Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Event Preferences
            </h3>

            <div className="space-y-2">
              <Label htmlFor="attendanceType">Attendance Type *</Label>
              <select
                id="attendanceType"
                name="attendanceType"
                required
                value={formData.attendanceType}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
              >
                <option value="full">Full Conference (3 Days)</option>
                <option value="day1">Day 1 Only</option>
                <option value="day2">Day 2 Only</option>
                <option value="day3">Day 3 Only</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Areas of Interest *</Label>
              <Textarea
                id="interests"
                name="interests"
                required
                value={formData.interests}
                onChange={handleChange}
                placeholder="e.g., Game Development, 3D Animation, VR/AR, Digital Art..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workshopPreferences">Workshop Preferences</Label>
              <Textarea
                id="workshopPreferences"
                name="workshopPreferences"
                value={formData.workshopPreferences}
                onChange={handleChange}
                placeholder="List any specific workshops you're interested in attending"
                rows={3}
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Complete Registration
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our terms and conditions and
            privacy policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
