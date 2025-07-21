// src/pages/Home.tsx
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { CardComponent } from "@/components/Card";

const dummyData = {
  notify: [
    {
      title: "メンテナンスのお知らせ",
      description: "7/25 22:00〜システム停止します",
    },
    { title: "新機能追加", description: "ダークモードを追加しました" },
  ],
  open: [
    { title: "React研修", description: "8/1 開始予定。基本から学べます" },
    { title: "Kubernetes入門", description: "応募受付中！" },
  ],
  history: [
    { title: "PowerApps講座", description: "2024年12月受講済み" },
    { title: "Git基礎講座", description: "2025年1月受講済み" },
  ],
};

export const Home = () => (
  <Layout>
    <VStack align="stretch" gap={4}>
      {/* お知らせ */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          お知らせ
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {dummyData.notify.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </SimpleGrid>
      </Box>

      {/* 募集中 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          募集中
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {dummyData.open.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </SimpleGrid>
      </Box>

      {/* 受講済 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          受講済
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {dummyData.history.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  </Layout>
);
