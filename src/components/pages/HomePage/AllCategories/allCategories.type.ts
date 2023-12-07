// react-icons
import {
    TbBrandNextjs,
    TbBrandJavascript,
    TbBrandVue,
    TbBrandTypescript,
    SiReactivex,
} from '@icons';
import { 
    IconType,
} from 'react-icons';

export type TBlogCategoryInfo = {
    category: string;
    description: string;
    IconComponent: IconType;
};

export const allBlogCategoryInfoList = [
    {
        category: 'Nextjs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandNextjs
    },
    {
        category: 'Javascript',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandJavascript,
    },
    {
        category: 'Vue',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandVue,
    },
    {
        category: 'Typescript',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandTypescript,
    },
    {
        category: 'Rxjs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: SiReactivex,
    },
] as Readonly<TBlogCategoryInfo[]>;
