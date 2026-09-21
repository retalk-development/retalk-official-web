import { faqItems } from "@/data/homepage";
import styles from "./faq-accordion.module.css";

export function FAQAccordion() {
  return (
    <div className={styles.list}>
      {faqItems.map((item, index) => (
        <details key={item.question} className={styles.item} name="retalk-faq">
          <summary>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <span>{item.question}</span>
            <span className={styles.plus} aria-hidden="true">＋</span>
          </summary>
          <div className={styles.answer}><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}
