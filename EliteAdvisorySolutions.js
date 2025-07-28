import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function EliteAdvisorySolutions() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Elite Advisory Solutions, LLC</h1>
        <p className="text-lg">Empowering individuals and organizations through strategic advisory, financial literacy, and real estate excellence.</p>
        <div className="flex justify-center gap-4">
          <span className="flex items-center gap-2"><Mail size={16} /> takara@eliteadvisorysolution.com</span>
          <span className="flex items-center gap-2"><Phone size={16} /> 252-751-3845</span>
          <span className="flex items-center gap-2"><MapPin size={16} /> 2120 E Firetower Rd, Ste 2013, Greenville, NC</span>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Notary & Legal Services</h2>
            <p>Mobile notary services, loan signing, and document authentication for individuals and businesses.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Real Estate & Appraisal</h2>
            <p>Expert property evaluations, consulting, and real estate guidance across North Carolina markets.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Financial & Government Consulting</h2>
            <p>Strategic guidance in insurance, credit, tax planning, and HUB/government contract readiness.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <p>Book a consultation or ask a question. We’re here to support your success.</p>
        <form className="max-w-md mx-auto space-y-4">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input placeholder="Your Message" required />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Elite Advisory Solutions, LLC. All rights reserved.
      </footer>
    </div>
  );
}