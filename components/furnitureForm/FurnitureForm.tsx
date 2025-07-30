import { formData } from "./lib";
import { InteractiveApply } from "./parts/InteractiveApply";

export const FurnitureForm = ({ t }: { t: (key: string) => string }) => {

  return (
    <section className="bg-primary min-h-screen flex p-1 lg:py-12">
      <div className="container bg-white rounded-2xl !p-0">
        <InteractiveApply formData={formData(t)} />
      </div>
    </section>
  );
};
