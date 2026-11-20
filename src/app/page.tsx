import DeckHero from "@/components/deck/DeckHero";
import FeedTicker from "@/components/deck/FeedTicker";
import Remit from "@/components/deck/Remit";
import SystemsGrid from "@/components/deck/SystemsGrid";
import Protocol from "@/components/deck/Protocol";
import Brief from "@/components/deck/Brief";
import Transmit from "@/components/deck/Transmit";

export default function HomePage() {
  return (
    <main id="main">
      <DeckHero />
      <FeedTicker />
      <Remit />
      <SystemsGrid />
      <Protocol />
      <Brief />
      <Transmit />
    </main>
  );
}
