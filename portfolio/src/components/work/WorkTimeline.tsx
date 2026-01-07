// import { useLang } from "../../../i18n/LanguageContext";
// import WorkItem from "../common/WorkItem";

// export default function WorkTimeline() {
//   const { t } = useLang();

//   return (
//     <section>
//       <div className="max-w-5xl mx-auto px-4 md:px-8 py-24">
//         <div className="space-y-12">
//           {t.work.timeline.items.map((item: any, i: number) => (
//             <WorkItem key={i} {...item} isLast={i === t.work.timeline.items.length - 1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useLang } from "../../../i18n/LanguageContext";
import WorkItem from "../common/WorkItem";

export default function WorkTimeline() {
  const { t } = useLang();

  return (
    <section className="bg-background-light">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-14">
          {t.work.timeline.items.map((item: any, i: number) => (
            <WorkItem
              key={i}
              {...item}
              isLast={i === t.work.timeline.items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
