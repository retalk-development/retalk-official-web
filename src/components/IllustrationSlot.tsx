import styles from "./illustration-slot.module.css";

type IllustrationSlotProps = {
  slot: string;
  caption: string;
};

export function IllustrationSlot({ slot, caption }: IllustrationSlotProps) {
  return (
    <figure className={styles.slot} data-asset-slot={slot} data-illustration-slot="placeholder">
      <div className={styles.frame} aria-hidden="true">
        <span>イラスト</span>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
