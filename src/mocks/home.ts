import type { CardData } from "@/components/CardGroup";

// モックデータ
const notifyData: CardData[] = [
    {
      title: "メンテナンスのお知らせ",
      description: "7/25 22:00〜システム停止します",
    },
];

const openData: CardData[] = [
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
];

const historyData: CardData[] = [];

export const fetchNotifyData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(notifyData), 500);
  });

export const fetchOpenData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(openData), 500);
  });

export const fetchHistoryData = async (): Promise<CardData[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(historyData), 500);
  });
