import { Mail, Phone,  } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-center justify-center">
      
      {/* Header */}
      <h2 className="text-2xl font-semibold text-zinc-900">Contact Me</h2>
      <p className="text-zinc-500">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col gap-3 mt-4 w-full">
        <div className="flex items-center justify-center gap-2 text-zinc-700  transition-colors cursor-pointer">
          <Mail className="h-5 w-5" />
          <span>nitishprajapati180@gmail.com</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-zinc-700  transition-colors cursor-pointer">
          <Phone className="h-5 w-5" />
          <span>+91 8007060099</span>
        </div>
      </div>

      
    </div>
  );
}
