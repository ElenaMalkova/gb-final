export default {
    state: {
        articles: [

            {
                id: 1,
                topic: 'Kitchen Design',
                heading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022',
                img: require('@/assets/img/blog_img/articles_photo_01.jpg'),
                tag: 'Kitchen',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" +
                    "\n" +
                    "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            }, {
                id: 2,
                topic: 'Living Design',
                heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022', // eslint-disable-next-line no-undef
                img: require('@/assets/img/blog_img/articles_photo_02.jpg'),
                tag: 'LivingRoom',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            }, {
                id: 3,
                topic: 'Interior Design',
                heading: 'Best For Any Office & Business Interior Solution',
                date: '15 December, 2022', // eslint-disable-next-line no-undef
                img: require('@/assets/img/blog_img/articles_photo_03.jpg'),
                tag: 'Interior',
                text: "333 Lorem ipsum dolor sit amet",
            }, {
                id: 4,
                topic: 'Kitchen Design',
                heading: 'Beautiful Interior Designing Ideas For Your Kitchen',
                date: '10 December, 2022', // eslint-disable-next-line no-undef
                img: require('@/assets/img/blog_img/articles_photo_04.jpg'),
                tag: 'Architecture',
                text: "444 Lorem ipsum dolor sit amet",
            }, {
                id: 5,
                topic: 'Living Design',
                heading: 'Let’s Get Solution For Building Construction Work',
                date: '10 November, 2023', // eslint-disable-next-line no-undef
                img: require('@/assets/img/blog_img/articles_photo_05.jpg'),
                tag: 'Kitchen planing',
                text: "555 Lorem ipsum dolor sit amet",
            }, {
                id: 6,
                topic: 'Bedroom Design',
                heading: 'Designing Ideas For Your Bedroom',
                date: '15 November, 2023', // eslint-disable-next-line no-undef
                img: require('@/assets/img/blog_img/articles_photo_06.jpg'),
                tag: 'Bedroom',
                text: "666 Lorem ipsum dolor sit amet",
            }, {
                id: 7,
                topic: 'Bedroom Design',
                heading: 'heading',
                date: '22 Oktober, 2023',
                img: require('@/assets/img/blog_img/articles_photo_07.jpg'),
                tag: 'Bedroom',
                text: "777 Lorem ipsum dolor sit amet",
            }, {
                id: 8,
                topic: 'topic',
                heading: 'heading',
                date: '22.05.2024',
                img: require('@/assets/img/blog_img/articles_photo_08.jpg'),
                tag: 'Bedroom',
                text: "888 Lorem ipsum dolor sit amet",
            }]
    }, getters: {
        articles: (state) => {
            return state.articles;
        }
    },
}