# Final screenshot replacement

All product captures are portrait images referenced only through `src/data/product-screens.ts`. Keep the current `591 × 1280` aspect ratio where possible. Final replacement can be completed by overwriting the same filenames in `public/product/`; update the mapping only when a filename changes.

| Filename | Used on | Important crop area |
| --- | --- | --- |
| `launch-screen.jpg` | Home / hero | Logo and start action |
| `patient-home-top.jpg` | Home / hero, patient flow | User heading and training cards |
| `patient-home-bottom.jpg` | Reserved / currently unused | Record and supporter actions |
| `training-categories-top.jpg` | Home / hero and patient flow; Features | Heading and first category cards |
| `training-categories-bottom.jpg` | Reserved / currently unused | Remaining category cards |
| `task-list-top.jpg` | Home / patient flow | Task heading and first task cards |
| `task-list-bottom.jpg` | Reserved / currently unused | Remaining task cards |
| `training-setup-top.jpg` | Home / patient flow; Features; For ST | User, task, question and choice settings |
| `training-setup-bottom.jpg` | Reserved / currently unused | Word source and start action |
| `training-question.jpg` | Home / hero and continuity flow | Prompt and answer choices |
| `training-correct.jpg` | Reserved / currently unused | Correct-state feedback |
| `training-result.jpg` | Home / hero and continuity flow; Features | Score summary and completion state |
| `patient-record.jpg` | Home / hero, continuity and platform; Features | Summary metrics and task history |
| `st-dashboard-overview.jpg` | Home / hero, continuity and analysis; Features; For ST | Dashboard summary and recent training |
| `st-task-analysis-top.jpg` | Home / analysis; Features; For ST | Filters, totals and accuracy chart |
| `st-task-analysis-bottom.jpg` | Home / analysis; For ST | Accuracy trend and recent sessions |
| `st-support-menu.jpg` | For ST | User heading and support menu |
| `word-settings-filter.jpg` | Home / efficiency; Features; For ST | User heading and filter controls |
| `word-settings-list.jpg` | Home / efficiency; Features; For ST | Word list and selection state |
| `evaluation-records-top.jpg` | Home / efficiency and platform; Features | User heading and record comparison |
| `exam-select.jpg` | Reserved / currently unused | Exam selection list |
| `slta-detail-top.jpg` | Home / efficiency | Exam date and profile summary |
| `slta-detail-graph.jpg` | Home / efficiency; For ST | Profile graph and domain labels |
| `slta-comparison-top.jpg` | Home / efficiency; For ST | Two-date legend and comparison graph |
| `slta-comparison-diff.jpg` | Home / efficiency | Difference filters and values |
| `rehab-record-list.jpg` | Home / platform | Record dates and session summaries |
| `rehab-record-detail-top.jpg` | Home / efficiency; Features; For ST | Date, basic information and training summary |
| `rehab-record-detail-soap.jpg` | Home / efficiency; For ST | SOAP headings and observations |
| `rehab-record-detail-karte.jpg` | Home / efficiency | Generated chart-text area and copy action |
| `user-info-overview.jpg` | Home / platform and motion scene; For ST | User heading and profile categories |

## Capture rules

- Orientation: portrait for every file; preserve the full-width app canvas and current aspect ratio.
- Status bar: keep it visible for every final capture, using one device appearance, time style, battery style, and light/dark convention consistently.
- Crop: do not cut page titles, section labels, charts, result totals, or primary actions named above. Allow the website frame to crop only lower continuation content.
- Demo data: use one clearly synthetic user across every screen. Keep dates, task names, scores, evaluation dates, and rehab sessions internally consistent. Never use a real name, birth date, facility ID, address, phone number, or clinical note.
- Before public deployment, replace the current `山田太郎` captures with data explicitly identifiable as demo data; the current files appear synthetic but the images themselves do not prove that.
