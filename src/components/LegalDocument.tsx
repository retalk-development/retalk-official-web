import { Fragment } from "react";
import type { LegalBlock, LegalDocumentContent } from "@/content/legal/types";
import styles from "./legal-document.module.css";

function renderInlineText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return <strong key={`${index}-${segment}`}>{segment.slice(2, -2)}</strong>;
    }

    return <Fragment key={`${index}-${segment}`}>{segment}</Fragment>;
  });
}

function orderedListStart(blocks: readonly LegalBlock[], index: number) {
  for (let previousIndex = index - 1; previousIndex >= 0; previousIndex -= 1) {
    const previousBlock = blocks[previousIndex];
    if (previousBlock.kind === "heading" || previousBlock.kind === "ordered") {
      return undefined;
    }
    if (previousBlock.kind === "paragraph") {
      const explicitNumber = /^(\d+)\.\s/.exec(previousBlock.text);
      return explicitNumber ? Number(explicitNumber[1]) + 1 : undefined;
    }
  }

  return undefined;
}

function renderBlock(block: LegalBlock, index: number, blocks: readonly LegalBlock[]) {
  switch (block.kind) {
    case "heading":
      return <h2 key={`heading-${index}`}>{block.text}</h2>;
    case "paragraph":
      return <p key={`paragraph-${index}`}>{renderInlineText(block.text)}</p>;
    case "ordered":
      return (
        <ol key={`ordered-${index}`} start={orderedListStart(blocks, index)}>
          {block.items.map((item, itemIndex) => (
            <li key={`${itemIndex}-${item}`}>{renderInlineText(item)}</li>
          ))}
        </ol>
      );
    case "unordered":
      return (
        <ul key={`unordered-${index}`}>
          {block.items.map((item, itemIndex) => (
            <li key={`${itemIndex}-${item}`}>{renderInlineText(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className={styles.tableFrame} key={`table-${index}`}>
          <table>
            <thead>
              <tr>
                {block.headers.map((header) => <th key={header} scope="col">{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`cell-${rowIndex}-${cellIndex}`}>{renderInlineText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "contact":
      return (
        <div className={styles.contact} key={`contact-${index}`}>
          {block.intro && <p>{renderInlineText(block.intro)}</p>}
          <p>
            問い合わせ先:{" "}
            <a href={`mailto:${block.email}`}>{block.email}</a>
          </p>
        </div>
      );
  }
}

export function LegalDocument({ document }: { document: LegalDocumentContent }) {
  return (
    <div className={styles.document} aria-label={document.title}>
      {document.blocks.map((block, index) => renderBlock(block, index, document.blocks))}
    </div>
  );
}
