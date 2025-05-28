import { ProgressBar } from "./parts/ProgressBar";

export const FurnitureForm = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="bg-primary min-h-screen flex items-center">
      <div className="container bg-white rounded-2xl p-4">
        <ProgressBar />
      </div>
    </section>
  );
};
