import { ApplyButton } from "../ui/ApplyButton";
import { data } from "./data";

export const FirstApply = ({ t }: { t: (key: string) => string }) => {
  const { title, button, privacyNotice, messageWhatsapp } = data(t);
  return (
    <div className="bg-primary rounded-tl-3xl rounded-br-3xl max-w-3xl mx-auto -translate-y-2/5" id="apply">
      <div className="p-4 flex items-center justify-center flex-col border -translate-y-[10%] bg-white rounded-tl-3xl rounded-br-3xl">
        <h3 className="text-sm mb-4 text-center md:text-lg">{title}</h3>
        <ApplyButton text={button} messageWhatsapp={messageWhatsapp}/>
        <p className="mt-4 text-xs text-center">{privacyNotice}</p>
      </div>
    </div>
  );
};
