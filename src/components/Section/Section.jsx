import PropTypes from 'prop-types';

import { SectionCont } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionCont>
      {title && <h2>{title}</h2>}
      {children}
    </SectionCont>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
