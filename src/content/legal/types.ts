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

export const LEGAL_CONTACT_EMAIL = 'retalk.app.info@gmail.com';
