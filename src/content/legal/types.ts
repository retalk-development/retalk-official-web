import { productionSiteUrl } from "@/config/site";

export type LegalBlock =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'ordered'; items: readonly string[] }
  | { kind: 'unordered'; items: readonly string[] }
  | { kind: 'table'; headers: readonly string[]; rows: readonly (readonly string[])[] }
  | { kind: 'contact'; intro?: string; email: string };

export type LegalDocumentContent = {
  title: string;
  blocks: readonly LegalBlock[];
};

export const LEGAL_VERSION = 'Ver.1.0';
export const LEGAL_OPERATOR = '松野航洋（言語聴覚士）';
export const LEGAL_CONTACT_EMAIL = 'retalk.app.info@gmail.com';
export const LEGAL_EFFECTIVE_DATE = 'App StoreでSTAMU Aphasia Ver.1.0が一般公開された日';
export const LEGAL_ADDRESS_DISCLOSURE_POLICY =
  '運営者の住所は、法令に基づき開示が必要となる場合、請求に応じて遅滞なく開示します。';

export const LEGAL_OFFICIAL_URLS = {
  website: productionSiteUrl,
  privacy: `${productionSiteUrl}/privacy`,
  terms: `${productionSiteUrl}/terms`,
  contact: `${productionSiteUrl}/contact`,
  safety: `${productionSiteUrl}/safety`,
} as const;
