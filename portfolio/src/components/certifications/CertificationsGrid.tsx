import { useLang } from "../../../i18n/LanguageContext";
import CertificationCard from "./CertificationCard";
import { useState } from "react";
import CertificateModal from "./CertificateModal";

import sql from "../../static/images/certificates/sql.png"
import seo1 from "../../static/images/certificates/seo1.png"
import seo2 from "../../static/images/certificates/seo2.png"
import wp from "../../static/images/certificates/wp.png"
import divi from "../../static/images/certificates/divi.png"
import python from "../../static/images/certificates/python_course.png"
import flask from "../../static/images/certificates/flask_course.png"

export const certificatesImages: Record<string, string> = {
  sql: sql,
  seoBeginner: seo1,
  seoAdvanced: seo2,
  wpBeginner: wp,
  wpAdvanced: divi,
  python: python,
  flask: flask,
};


export default function CertificationsGrid() {
  const { t } = useLang();

  const [activeCert, setActiveCert] = useState<{
    img: string;
    title: string;
  } | null>(null);



  return (
    // <section className="bg-background-light py-16">
    //   <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {t.certifications.items.map((item: any, i: number) => (
    //       <CertificationCard key={i} {...item} img={certificatesImages[item.img]}/>
    //     ))}
    //   </div>
    // </section>
    <>
      <section className="bg-background-light py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.certifications.items.map((item: any, i: number) => {
            const img = certificatesImages[item.img];

            return (
              <div
                key={i}
                onClick={() =>
                  setActiveCert({ img, title: item.title })
                }
                className="cursor-pointer"
              >
                <CertificationCard {...item} img={img} />
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {activeCert && (
        <CertificateModal
          img={activeCert.img}
          title={activeCert.title}
          onClose={() => setActiveCert(null)}
        />
      )}
    </>
  );
}
