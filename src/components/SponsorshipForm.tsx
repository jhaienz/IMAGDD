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
import { CheckCircle, Crown, Award, Star } from "lucide-react";

export default function SponsorshipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    sponsorshipTier: "",
    companyDescription: "",
    interests: "",
    additionalComments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sponsorship form submitted:", formData);
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
              Thank You for Your Interest!
            </h2>
            <p className="text-gray-600 mb-4">
              We've received your sponsorship inquiry for{" "}
              <strong>{formData.companyName}</strong>.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Our partnerships team will review your application and contact you
              at <strong>{formData.email}</strong> within 2-3 business days.
            </p>
            <p className="text-sm text-gray-500">
              If you have any immediate questions, please email us at
              sponsors@imagdd.com
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="mt-6"
              variant="outline"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Sponsorship Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Sponsorship Application</CardTitle>
          <CardDescription>
            Fill out the form below to express your interest in sponsoring
            IMAGDD 2026.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Company Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.yourcompany.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyDescription">
                  Company Description *
                </Label>
                <Textarea
                  id="companyDescription"
                  name="companyDescription"
                  required
                  value={formData.companyDescription}
                  onChange={handleChange}
                  placeholder="Brief description of your company and what you do..."
                  rows={4}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Contact Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@company.com"
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
            </div>

            {/* Sponsorship Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Sponsorship Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="interests">
                  Why are you interested in sponsoring IMAGDD? *
                </Label>
                <Textarea
                  id="interests"
                  name="interests"
                  required
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and what you hope to achieve through sponsorship..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalComments">
                  Additional Comments or Questions
                </Label>
                <Textarea
                  id="additionalComments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions you have..."
                  rows={3}
                />
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                What's Included
              </h4>
              <p className="text-sm text-gray-800">
                All sponsorship packages include brand visibility, networking
                opportunities, and the chance to connect with 500+ industry
                professionals, developers, artists, and students from around the
                world.
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Sponsorship Inquiry
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to be contacted by our
              partnerships team regarding sponsorship opportunities.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
