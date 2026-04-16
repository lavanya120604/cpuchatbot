import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { BottomNav } from "@/components/BottomNav";
import { MapPin, Phone, Mail, Clock, Globe, Instagram, Linkedin, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Career Point University" },
      { name: "description", content: "Contact Career Point University. Address, phone, email, and office hours." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    icon: MapPin,
    label: "Address",
    value: "National Highway 52, Opposite Alaniya Mata Ji Mandir, Alaniya, Kota - 325003, Rajasthan",
  },
  { icon: Phone, label: "Phone", value: "+91 8005752912", href: "tel:+918005752912" },
  { icon: Mail, label: "Email", value: "info@university.edu", href: "mailto:info@university.edu" },
  { icon: Clock, label: "Office Hours", value: "Mon-Fri: 9:30 AM - 5:00 PM\nSat: 9:30 AM - 1:00 PM" },
  { icon: Globe, label: "Website", value: "cpur.in", href: "https://cpur.in" },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/cp.university",
    color: "bg-gradient-to-br from-pink-500 to-orange-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://share.google/XbfMvdalU2s1ykPqn",
    color: "bg-blue-600",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/@cpurajasthan",
    color: "bg-blue-500",
  },
];

const departmentContacts = [
  { dept: "Registrar Office", name: "Dr. Ravi Shankher", phone: "9057532048", email: "registrar@cpur.edu.in" },
  { dept: "Admission Office", name: "Rajeev Singh", phone: "9862388265", email: "rajeev.singh@cpuniverse.in" },
  { dept: "Examination Dept", name: "Raaj Kumar Sharma", phone: "7599565364", email: "coe@cpur.edu.in" },
  { dept: "Student Welfare", name: "Dr. Rakhee Chaudhary", phone: "9414209998", email: "dsw.office@cpur.edu.in" },
  { dept: "Accounts", name: "Jitendra Soni", phone: "9057531983", email: "accounts@cpur.edu.in" },
  { dept: "Hostel (Male)", name: "Naveen Chaoudhary", phone: "9588870175", email: "" },
  { dept: "Hostel (Female)", name: "Hemlata Saxena", phone: "9588870175", email: "" },
  { dept: "Reception", name: "Naveen Sharma", phone: "9057532026", email: "reception@cpur.edu.in" },
];

function ContactPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Contact Us" />
      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        {/* University Info */}
        <div className="rounded-2xl bg-card border border-border p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://yt3.googleusercontent.com/nvuNMbnLrWT-Nc0a9CI6YnVxGcZzd08d4c5Whwh0t1fgkhcCaDHEKudX3jMaBxe0xmRlyL8-_A=s900-c-k-c0x00ffffff-no-rj"
              alt="CPU Logo"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h2 className="text-base font-bold">Career Point University</h2>
              <p className="text-xs text-muted-foreground">Kota, Rajasthan</p>
            </div>
          </div>

          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm whitespace-pre-line">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="rounded-2xl bg-card border border-border p-5 shadow-sm">
          <h3 className="text-base font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center h-10 w-10 rounded-full ${color} text-white transition-transform hover:scale-110`}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Department Contacts */}
        <div className="rounded-2xl bg-card border border-border p-5 shadow-sm">
          <h3 className="text-base font-semibold mb-3">Department Contacts</h3>
          <div className="space-y-3">
            {departmentContacts.map((c) => (
              <div key={c.dept} className="rounded-xl bg-secondary/50 p-3">
                <p className="text-xs font-bold text-primary">{c.dept}</p>
                <p className="text-sm font-medium mt-0.5">{c.name}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <a href={`tel:${c.phone}`} className="hover:text-primary">📞 {c.phone}</a>
                  {c.email && <a href={`mailto:${c.email}`} className="hover:text-primary truncate">✉️ {c.email}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
