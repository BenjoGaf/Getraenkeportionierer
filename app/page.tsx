import Clean from "@/components/Settings";
import Mixdrink from "@/components/Mixdrink";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-start lg:p-12 md:p-8 p-2 pt-8 h-screen min-h-min">
      {/* Überschrift und Copyright */}
      <div className="flex flex-col p-3 md:pb-16 pb-10">
        <div className="font-sans text-5xl pb-3 text-black text-center">
          Getränkeautomat
        </div>
        <div className="font-sans text-m text-justify px-6">
          eine Diplomarbeit von Elias Bieler, Benjamin Gangol und Alexander
          Kollar
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 right-0">&copy; Gangol</div>
        </div>
      </div>
      {/* Inhalt */}
      <div className="flex md:flex-row w-full flex-col justify-between p-3 ">
        <Mixdrink />
        <Clean />
      </div>
    </main>
  );
}
