import { VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import type { CardData } from "@/types";
import { useEffect, useState } from "react";
import { fetchNotifyData, fetchOpenData, fetchHistoryData } from "@/mocks/home";
import { Section } from "@/components/Secrion";

export const Home = () => {
  const [notify, setNotify] = useState<CardData[] | null>(null);
  const [open, setOpen] = useState<CardData[] | null>(null);
  const [history, setHistory] = useState<CardData[] | null>(null);

  useEffect(() => {
    fetchNotifyData().then(setNotify);
    fetchOpenData().then(setOpen);
    fetchHistoryData().then(setHistory);
  }, []);

  return (
    <Layout>
      <VStack align="stretch" gap={4}>
        <Section title="お知らせ" items={notify} />
        <Section title="募集中" items={open} />
        <Section title="受講済" items={history} />
      </VStack>
    </Layout>
  );
};
