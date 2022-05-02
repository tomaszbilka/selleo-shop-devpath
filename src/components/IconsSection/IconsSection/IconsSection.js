import linkIcons from '../../../utils/iconsSectionData';
import IconItem from '../IconItem';

const IconsSection = () => {
  return (
    <section className="icons-section">
      {linkIcons.map((el, index) => (
        <IconItem {...el} key={index} />
      ))}
    </section>
  );
};

export default IconsSection;
