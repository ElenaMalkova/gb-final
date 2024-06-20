export default {
    state: {
        articles: [
            {
                id: 1,
                dateCreated: '2024_02_17',
                images: [
                    require('@/assets/img/cats/cat-photo_01_01.jpg'),
                    require('@/assets/img/cats/cat-photo_01_02.jpg'),
                    require('@/assets/img/cats/cat-photo_01_03.jpg'),
                    require('@/assets/img/cats/cat-photo_01_04.jpg'),
                    require('@/assets/img/cats/cat-photo_01_05.jpg'),
                ],
                heading: 'Заголовок 1',
                sub_heading: 'Подзаголовок 1',
                text:
                    'Коту нужна помощь с приобретением качественного корма и игрушек для поддержания его активности и здоровья. Если у вас есть возможность помочь, будем очень благодарны за любую поддержку. Особенно нужны специализированные корма, которые помогут поддерживать его отличное самочувствие и здоровье.',

                text_parts: ['Врез 1', 'Врез 2', 'Врез 3', 'Врез 4', 'Врез 5'],
            },
            {
                id: 2,
                dateCreated: '2024_02_17',
                images: [
                    require('@/assets/img/cats/cat-photo_01_01.jpg'),
                    require('@/assets/img/cats/cat-photo_01_02.jpg'),
                    require('@/assets/img/cats/cat-photo_01_03.jpg'),
                    require('@/assets/img/cats/cat-photo_01_04.jpg'),
                    require('@/assets/img/cats/cat-photo_01_05.jpg'),
                ],
                heading: 'Заголовок 1',
                sub_heading: 'Подзаголовок 1',
                text:
                    'Коту нужна помощь с приобретением качественного корма и игрушек для поддержания его активности и здоровья. Если у вас есть возможность помочь, будем очень благодарны за любую поддержку. Особенно нужны специализированные корма, которые помогут поддерживать его отличное самочувствие и здоровье.',

                text_parts: ['Врез 1', 'Врез 2', 'Врез 3', 'Врез 4', 'Врез 5'],
            },
            {
                id: 3,
                dateCreated: '2024_02_17',
                images: [
                    require('@/assets/img/cats/cat-photo_01_01.jpg'),
                    require('@/assets/img/cats/cat-photo_01_02.jpg'),
                    require('@/assets/img/cats/cat-photo_01_03.jpg'),
                    require('@/assets/img/cats/cat-photo_01_04.jpg'),
                    require('@/assets/img/cats/cat-photo_01_05.jpg'),
                ],
                heading: 'Заголовок 1',
                sub_heading: 'Подзаголовок 1',
                text:
                    'Коту нужна помощь с приобретением качественного корма и игрушек для поддержания его активности и здоровья. Если у вас есть возможность помочь, будем очень благодарны за любую поддержку. Особенно нужны специализированные корма, которые помогут поддерживать его отличное самочувствие и здоровье.',

                text_parts: ['Врез 1', 'Врез 2', 'Врез 3', 'Врез 4', 'Врез 5'],
            },
        ]
    }, getters: {
        articles: (state) => {
            return state.articles;
        },
    }
}