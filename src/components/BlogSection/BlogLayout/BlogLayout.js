import SectionHeader from 'components/SectionHeader';
import BlogGrid from 'components/BlogSection/BlogGrid';

const BlogLayout = () => {
    return (
        <section className="blog-layout">
            <SectionHeader
                title="Latest News"
                description="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
            />
            <BlogGrid />
        </section>
    );
};

export default BlogLayout;
