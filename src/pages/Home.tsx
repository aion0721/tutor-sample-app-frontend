// src/pages/Home.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { PaginatedGrid } from "@/components/PaginatedGrid";

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
        <PaginatedGrid items={dummyData.notify} />
      </Box>

      {/* 募集中 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          募集中
        </Heading>
        <PaginatedGrid items={dummyData.open} />
      </Box>

      {/* 受講済 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          受講済
        </Heading>
        <PaginatedGrid items={dummyData.history} />
      </Box>
    </VStack>
  </Layout>
);
