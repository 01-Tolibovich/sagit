"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { useState } from "react";

interface ApplyButtonProps {
  text: string;
  messageWhatsapp?: string;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({
  text,
  messageWhatsapp,
}) => {
  const [value, setValue] = useState("Привет! 👋 Меня интересует...");

  function onSubmit() {
    window.open(`https://wa.me/992904103311?text=${value}`, "_blank"); // открыть в новой вкладке
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`bg-primary px-6 py-3 text-white rounded-full font-bold`}
        >
          {text}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{messageWhatsapp}</DialogTitle>
          <DialogDescription>
            <span className="grid md:grid-cols-2 gap-4">
              <span className="rounded-3xl w-full h-auto mx-auto">
                <Image
                  src="/static/WhatsApp.png"
                  width={800}
                  height={800}
                  alt=""
                  className="rounded-3xl object-contain w-full"
                />
              </span>
                <span className="overflow-hidden flex flex-col justify-around">
                  <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="mb-8"
                  />
                <Button onClick={onSubmit}>{text}</Button>
                </span>
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
