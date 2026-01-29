import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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
    email: "",
    fullName: "",
    designation: "",
    otherDesignation: "",
    affiliation: "",
    contactNumber: "",
    privacyConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert("Please acknowledge and consent to the data privacy terms.");
      return;
    }
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        <CardTitle className="text-2xl">Register as Participant</CardTitle>
        <CardDescription>
          Fill out the form below to register for IMAGDD 2026. All fields marked
          with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="juan.delacruz@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Juan Dela Cruz"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation">Designation *</Label>
            <select
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <option value="">Select your designation</option>
              <option value="student">Student</option>
              <option value="game_developer">Game Developer</option>
              <option value="educator">Educator</option>
              <option value="industry_professional">Industry Professional</option>
              <option value="other">Other</option>
            </select>
          </div>

          {formData.designation === "other" && (
            <div className="space-y-2">
              <Label htmlFor="otherDesignation">Please specify *</Label>
              <Input
                id="otherDesignation"
                name="otherDesignation"
                required
                value={formData.otherDesignation}
                onChange={handleChange}
                placeholder="Enter your designation"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="affiliation">Affiliation (School/Company/Organization) *</Label>
            <Input
              id="affiliation"
              name="affiliation"
              required
              value={formData.affiliation}
              onChange={handleChange}
              placeholder="Your school, company, or organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number *</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="09XX XXX XXXX"
            />
          </div>

          {/* Data Privacy Consent */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                required
              />
              <Label htmlFor="privacyConsent" className="text-sm text-gray-600 font-normal leading-relaxed">
                I acknowledge and consent to the collection and processing of my personal information for event registration, attendance tracking, communication, and reporting purposes in accordance with the <strong>Data Privacy Act of 2012</strong>.
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Complete Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
