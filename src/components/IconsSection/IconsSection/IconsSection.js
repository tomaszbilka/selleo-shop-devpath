import linkIcons from 'utils/iconsSectionData';
import IconItem from 'components/IconsSection/IconItem';

const IconsSection = () => {
    return (
        <section className="icons-section">
            {linkIcons.map((el) => (
                <IconItem {...el} key={el.title} />
            ))}
        </section>
    );
};

export default IconsSection;
