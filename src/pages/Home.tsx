// src/pages/Home.tsx
import { Box, Heading, VStack, Spinner, Center } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CardGroup from "@/components/CardGroup";
import { useEffect, useState } from "react";
import { fetchHomeData, type HomeData } from "@/mocks/home";

export const Home = () => {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    fetchHomeData().then(setData);
  }, []);

  if (!data) {
    return (
      <Layout>
        <Center py={10}>
          <Spinner size="xl" />
        </Center>
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack align="stretch" gap={4}>
      {/* お知らせ */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          お知らせ
        </Heading>
        <CardGroup items={data.notify} />
      </Box>

      {/* 募集中 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          募集中
        </Heading>
        <CardGroup items={data.open} />
      </Box>

      {/* 受講済 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          受講済
        </Heading>
        <CardGroup items={data.history} />
      </Box>
    </VStack>
  </Layout>
  );
};
