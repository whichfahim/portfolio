import { Approach, Contact, Hero, InventoryMarquee, MainQuests, QuestLog, SideQuests } from '@/components/sections';

export function HomePage() {
  return (
    <>
      <Hero />
      <InventoryMarquee />
      <Approach />
      <MainQuests />
      <SideQuests />
      <QuestLog />
      <Contact />
    </>
  );
}
