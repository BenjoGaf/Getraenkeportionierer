import Clean from "@/components/Clean";
import Mixdrink from "@/components/Mixdrink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center justify-items-start p-12 h-screen">
      {/* Überschrift und Copyright */}
      <div className="flex flex-col p-3 ">
        <div className="font-sans text-4xl pb-3 text-center">
          Getränkeautomat
        </div>
        <div className="font-sans text-m text-justify">
          eine Diplomarbeit von Elias Bieler, Benjamin Gangol und Alexander
          Kollar
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 right-0">&copy; Gangol</div>
        </div>
      </div>
      {/* Inhalt */}
      <div className="flex flex-row w-full flex-wrap justify-between p-3 ">
        <Mixdrink />
        <Clean />
      </div>
    </main>
  );
}
