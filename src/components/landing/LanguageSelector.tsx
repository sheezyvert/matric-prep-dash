
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "af", name: "Afrikaans" },
  { code: "zu", name: "isiZulu" },
  { code: "xh", name: "isiXhosa" },
  { code: "st", name: "Sesotho" },
  { code: "tn", name: "Setswana" },
  { code: "nso", name: "Sepedi" },
  { code: "ts", name: "Xitsonga" },
  { code: "ss", name: "siSwati" },
  { code: "ve", name: "Tshivenda" },
  { code: "nr", name: "isiNdebele" },
];

export function LanguageSelector() {
  return (
    <Select defaultValue="en">
      <SelectTrigger className="w-[140px] bg-white/80 backdrop-blur-sm hover:bg-white transition-colors border-sa-sky/20">
        <Globe className="mr-2 h-4 w-4 text-sa-sky" />
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
