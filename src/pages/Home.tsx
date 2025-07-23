// src/pages/Home.tsx
import { Box, Heading, VStack, Spinner, Center } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CardGroup from "@/components/CardGroup";
import type { CardData } from "@/components/CardGroup";
import { useEffect, useState } from "react";
import { fetchNotifyData, fetchOpenData, fetchHistoryData } from "@/mocks/home";

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
        {/* お知らせ */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            お知らせ
          </Heading>
          <CardGroup items={notify} />
        </Box>

        {/* 募集中 */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            募集中
          </Heading>
          <CardGroup items={open} />
        </Box>

        {/* 受講済 */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            受講済
          </Heading>
          <CardGroup items={history} />
        </Box>
      </VStack>
    </Layout>
  );
};
