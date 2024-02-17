export default ({
    pageTitle,
    telemetry = true,
    title = 'Horse Around',
    description = 'You suck at moving the horsey. Get better at moving the horsey.',
    imagePath = '/horsey-social.png',
    imageType = 'image/png',
    imageWidth = 600,
    imageHeight = 600,
    author = 'horsey.gg',
    published,
    type = 'website',
} = {}) => {
    const route = useRoute();
    const {origin} = useRuntimeConfig().public;
    const url = `${origin}${route.path}`.replace(/\/$/, '');
    const imageUrl = `${origin}${imagePath}`;

    const script = [];
    if (telemetry) {
        script.push({
            'src': 'https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js',
            'data-app-id': useRuntimeConfig().public.telemetryAppId,
        });
    }

    useHead({
        meta: [
            {hid: 'description', name: 'description', content: description},
        ],
        link: [
            {rel: 'canonical', href: url},
        ],
        script,
    });

    const seoMeta = {
        title: pageTitle ?? title,
        colorScheme: 'only light',
        themeColor: '#5D9945',
        ogUrl: url,
        ogImage: {
            url: imageUrl,
            type: imageType,
            width: imageWidth,
            height: imageHeight,
        },
        ogTitle: title,
        ogDescription: description,
        ogType: type,
        twitterDescription: description,
        twitterTitle: title,
        twitterSite: '@chalksy',
        twitterImage: imageUrl,
    };

    if (type === 'article') {
        seoMeta.articleAuthor = author;
        if (published) {
            seoMeta.articlePublishedTime = published;
        }
    }

    useSeoMeta(seoMeta);
};

