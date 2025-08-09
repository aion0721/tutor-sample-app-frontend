import type { CardData } from "@/types";

// モックデータ
export const notifyData: CardData[] = [
  {
    title: "メンテナンスのお知らせ",
    description: "7/25 22:00〜システム停止します",
  },
];

export const openData: CardData[] = [
  {
    title: "React研修",
    description: "8/1 開始予定。基本から学べます",
    category: "app",
    tags: ["react"],
  },
  {
    title: "Kubernetes入門",
    description: "応募受付中！",
    category: "app",
    tags: ["初心者", "k8s"],
  },
  {
    title: "Dockerハンズオン",
    description: "コンテナ基礎を学ぼう",
    category: "business",
    tags: ["Docker", "Container"],
  },
  { title: "Terraform基礎", description: "IaC を実践的に", category: "it" },
  { title: "Git講座", description: "バージョン管理の基本", category: "other" },
  {
    title: "Jenkins CI/CD",
    description: "自動化パイプライン体験",
    category: "other",
  },
  {
    title: "Azure入門",
    description: "クラウドを触ってみよう",
    category: "infra",
  },
  {
    title: "AWSソリューション",
    description: "サービス選定のコツ",
    category: "infra",
  },
  { title: "Python基礎", description: "初学者向け文法＋実践", category: "app" },
  {
    title: "TypeScript応用",
    description: "型で強くなる開発",
    category: "business",
  },
  {
    title: "Linuxコマンド速習",
    description: "シェル芸入門",
    category: "other",
  },
  {
    title: "Prometheus & Grafana",
    description: "監視ダッシュボード構築",
    category: "other",
  },
  {
    title: "Vault Secrets",
    description: "秘密情報の安全管理",
    category: "other",
  },
  {
    title: "Helm Chart入門",
    description: "K8s パッケージ管理",
    category: "other",
  },
  {
    title: "マイクロサービス設計",
    description: "分割統治のベストプラクティス",
  },
];

export const historyData: CardData[] = [];

export const fetchNotifyData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(notifyData), 1500);
  });

export const fetchOpenData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(openData), 2500);
  });

export const fetchHistoryData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(historyData), 500);
  });
