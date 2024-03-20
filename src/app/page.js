import BeforeAfter from "@/components/BeforeAfter";
import BodyOne from "@/components/BodyOne";
import BodyTwo from "@/components/BodyTwo";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <div>
      <Introduction/>
      <BeforeAfter/>
      <BodyOne/>
      <BodyTwo/>
    </div>
  );
}
