import colors, {
    designSystemColors,
} from './colors';

const theme = (themeName: keyof typeof designSystemColors) => {
    return {
        colors,
        designSystemColors: designSystemColors[themeName],
    } as const;
};

export default theme;
