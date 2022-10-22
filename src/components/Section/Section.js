import PropTypes from 'prop-types';
// import css from './Section.module.css';

//*    styles..//
import { SectionMain, SectionContainer, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionMain>
      <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </SectionContainer>
    </SectionMain>
  );
}

Section.prototype = {
  title: PropTypes.string,
};

// export default function Section({ title, children }) {
//   return (
//     <section className={css.section}>
//       <div className={css.container}>
//         {title && <h2 className={css.title}>{title}</h2>}
//         {children}
//       </div>
//     </section>
//   );
// }

// Section.prototype = {
//   title: PropTypes.string,
// };
