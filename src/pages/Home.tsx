// src/pages/Home.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CardGroup from "@/components/CardGroup";

const dummyData = {
  notify: [
    {
      title: "メンテナンスのお知らせ",
      description: "7/25 22:00〜システム停止します",
    },
  ],
  open: [
    { title: "React研修", description: "8/1 開始予定。基本から学べます" },
    { title: "Kubernetes入門", description: "応募受付中！" },
    { title: "Dockerハンズオン", description: "コンテナ基礎を学ぼう" },
    { title: "Terraform基礎", description: "IaC を実践的に" },
    { title: "Git講座", description: "バージョン管理の基本" },
    { title: "Jenkins CI/CD", description: "自動化パイプライン体験" },
    { title: "Azure入門", description: "クラウドを触ってみよう" },
    { title: "AWSソリューション", description: "サービス選定のコツ" },
    { title: "Python基礎", description: "初学者向け文法＋実践" },
    { title: "TypeScript応用", description: "型で強くなる開発" },
    { title: "Linuxコマンド速習", description: "シェル芸入門" },
    { title: "Prometheus & Grafana", description: "監視ダッシュボード構築" },
    { title: "Vault Secrets", description: "秘密情報の安全管理" },
    { title: "Helm Chart入門", description: "K8s パッケージ管理" },
    {
      title: "マイクロサービス設計",
      description: "分割統治のベストプラクティス",
    },
  ],
  history: [],
};

export const Home = () => (
  <Layout>
    <VStack align="stretch" gap={4}>
      {/* お知らせ */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          お知らせ
        </Heading>
        <CardGroup items={dummyData.notify} />
      </Box>

      {/* 募集中 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          募集中
        </Heading>
        <CardGroup items={dummyData.open} />
      </Box>

      {/* 受講済 */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          受講済
        </Heading>
        <CardGroup items={dummyData.history} />
      </Box>
    </VStack>
  </Layout>
);
