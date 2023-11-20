// utils
import { 
    readMarkdownDir, 
    readMarkdownFile,
} from './fsUtils';
import matter from 'gray-matter';

export type TBlogMarkdownParam = {
    category: string;
    slug: string;
};

export type TBlogMarkdownTag = 
    'javascript' |
    'nextjs' |
    'typescript';

export type TBlogMarkdownFrontmatter = {
    id: string;
    title: string;

    // FIXME: TTag 타입 정의 후, 적용하기 (string union)
    tagList?: TBlogMarkdownTag[];

    createdAt: Date;
    modifiedHistories?: Array<{
        commitMessage: string;
        modifiedAt: Date;
    }>;
};

class BlogMarkdownManager {
    private static _instance: Promise<TBlogMarkdownParam[]>;

    private constructor() {
        BlogMarkdownManager._instance = this.generateInstance();
    }

    private async generateInstance() {
        const categoryList = await BlogMarkdownManager.readCategoryNameList();

        const categoryPromiseList = categoryList
            .map(category => {
                return readMarkdownDir('file', category);
            });

        const fileNameListInCategories = await Promise.all(categoryPromiseList);

        return fileNameListInCategories.reduce((
            result,
            fileNameList,
            indexOfCategory
        ) => {
            const category = categoryList[indexOfCategory];

            const newResult = fileNameList.reduce((newResult, fileName) => {
                const slug = fileName.match(/(.+)\.mdx/)?.[1];

                if (!slug) {
                    return newResult;
                }

                return [
                    ...newResult,
                    {
                        category,
                        slug,
                    },
                ];
            }, [] as TBlogMarkdownParam[]);

            return [
                ...result,
                ...newResult,
            ];
        }, [] as TBlogMarkdownParam[]);
    }

    static readCategoryNameList() {
        return readMarkdownDir('dir');
    }

    static async readMarkdownFile(params?: { 
        category: string;
        slug: string;
    }) {
        if (!params) {
            return null;
        }

        const {
            category,
            slug,
        } = params;

        const filePathInMarkdown = `${category}/${slug}.mdx`;
        const markdownFile = await readMarkdownFile(filePathInMarkdown);
        return markdownFile;
    }

    static readFrontmatterFromFile(markdown: string) {
        const frontmatter = matter(markdown).data as TBlogMarkdownFrontmatter;

        const {
            createdAt,
            modifiedHistories,
        } = frontmatter;

        return {
            ...frontmatter,
            createdAt: new Date(createdAt),
            modifiedHistories: modifiedHistories?.map(history => ({
                ...history,
                modifiedAt: new Date(history.modifiedAt),
            })),
        } as TBlogMarkdownFrontmatter;
    }

    static get instance() {
        if (!BlogMarkdownManager._instance) {
            new BlogMarkdownManager();
        }

        return BlogMarkdownManager._instance;
    }
}

export default BlogMarkdownManager;
