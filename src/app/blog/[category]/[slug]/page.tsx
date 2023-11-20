// markdown
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';
import { 
    MDXRemote,
} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
// UI Component
import StyledBlogSlugPageRoot from './page.styled';
// type
import { 
    TBlogMarkdownParam,
} from '@/utils/ssr/blogMarkdownManager.type';

export const generateStaticParams = () => {
    return BlogMarkdownManager.instance;
};

type TBlogSlugPageProps = {
    params: TBlogMarkdownParam;
};

async function BlogSlugPage(props: TBlogSlugPageProps) {
    const {
        params,
    } = props;

    // const {
    //     category,
    //     slug,
    // } = params;

    const markdown = await BlogMarkdownManager.readMarkdownFile(params);
    const categoryNameList = await BlogMarkdownManager.readCategoryNameList();

    if (!markdown || !categoryNameList) {
        return null;
    }

    // TODO: Frontmatter 사용 예시
    // const frontmatter = BlogMarkdownManager.readFrontmatterFromFile(markdown);

    return (
        <div style={{
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {/* TODO: Frontmatter 사용 예시 */}
            {/* <div>
                <h2>
                    FrontMatter
                </h2>

                <h3>
                    ID: {frontmatter.id}
                </h3>

                <h3>
                    Title: {frontmatter.title}
                </h3>

                <h3>
                    createdAt: {frontmatter.createdAt.toISOString()}
                </h3>

                <div>
                    <h3>
                        Tag List
                    </h3>

                    <ul style={{ listStyleType: 'disc', padding: '0 20px' }}>
                        {frontmatter.tagList?.map((tag, index) => (
                            <li key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>
                        modifiedHistories: 
                    </h3>

                    <ul style={{ listStyleType: 'disc', padding: '0 20px' }}>
                        {frontmatter.modifiedHistories?.map((history, index) => {
                            const {
                                commitMessage,
                                modifiedAt,
                            } = history;

                            return (
                                <li key={index}>
                                    <span>
                                        Commit Message: {commitMessage}
                                    </span>
                                    <br />
                                    <span>
                                        {modifiedAt.toISOString()};
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <h3>
                    Category: {category}
                </h3>

                <h3>
                    Slug: {slug}
                </h3>
            </div> */}

            <div style={{ padding: '20px', color: '#ff1493' }}>
                {categoryNameList.map((c, index) => (
                    <div key={index}>
                        {c}
                    </div>
                ))}
            </div>

            <StyledBlogSlugPageRoot>
                <MDXRemote
                    options={{
                        parseFrontmatter: true,
                        mdxOptions: {
                            remarkPlugins: [
                                remarkGfm,
                            ],
                        },
                    }}
                    // FIXME: `src/components/markdownElements/markdownElements.ts` 작성 후, 적용하기
                    components={{
                        a(props) {
                            const {
                                href,
                                children,
                            } = props;

                            return (
                                <a href={href} style={{ color: '#ff1493' }} target="_blank">
                                    {children}
                                </a>
                            );
                        },
                    }}
                    source={markdown} />
            </StyledBlogSlugPageRoot>
        </div>
    );
}

export default BlogSlugPage;
