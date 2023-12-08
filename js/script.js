tailwind.config = {
    prefix: 'tw-',
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            colors: {
                app: '#02C3C2',
                // app: '#D387CD',
                correct: '#02C3C2',
                wrong: '#F68534',
                solved: '#F68534',
            },
            scale: {
                0: '0',
                5: '.05',
                10: '.1',
                15: '.15',
                20: '.2',
                25: '.25',
                50: '.5',
                75: '.75',
                90: '.9',
                95: '.95',
                100: '1',
                105: '1.05',
                110: '1.1',
                125: '1.25',
                150: '1.5',
            },
            height: (theme) => ({
                auto: 'auto',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                full: '100%',
                screen: '100vh',
                half: '50%',
                third: '33.333333%',
                quarter: '25%',
                fifth: '20%',
            }),
            fontFamily: {
                nanumgothic: ['NanumGothic'],
                poppins: ['Poppins'],
            },
            fontSize: {
                '3xs': ['0.5rem', { lineHeight: '0.5rem' }],
                '2xs': ['0.675rem', { lineHeight: '0.75rem' }],
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
            zIndex: {
                100: '100',
                999: '999',
            },
        },
    },
};

//// max group by 'product' : 1 over
//// specifics - choose quiz identifiers : [1, 2, 3, 4, 5]
const generateQuzzes = (quantity, specifics) => {
    if (!quantity || quantity < 1) {
        quantity = 1;
    }

    if (!quantity || quantity > _.size(quizzes)) {
        quantity = _.size(quizzes);
    }

    if (specifics && _.size(specifics) > 0) {
        ////
        return _.chain(specifics)
            .map((s) => _.find(quizzes, { identifier: s }))
            .value();
    }

    return _.chain(quizzes).groupBy('product').sampleSize(quantity).flatten().shuffle().sampleSize(quantity).value();
};
