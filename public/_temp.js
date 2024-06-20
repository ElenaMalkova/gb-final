
export default {
    state: {
        cats: [
            {
                id: 1,
                checkInDate: '2024_02_17',
                images: [
                    require('@/assets/img/cats/cat-photo_01_01.jpg'),
                    require('@/assets/img/cats/cat-photo_01_02.jpg'),
                    require('@/assets/img/cats/cat-photo_01_03.jpg'),
                    require('@/assets/img/cats/cat-photo_01_04.jpg'),
                    require('@/assets/img/cats/cat-photo_01_05.jpg'),
                ],
                name: 'Кот',
                forHome: true,
                age: {
                    years: 2,
                    months: 6
                },
                gender: 'male',
                sterilization: true,
                health: false,
                healthDescription: '',
                description: 'Этот милый котик по имени Кот — замечательный домашний питомец, которому всего 2 года и 6 месяцев. Он очень игривый, любознательный и любит проводить время с людьми. Ему нравится бегать за игрушками, а также нежиться на коленях хозяина. Кот уже стерилизован, что является большим плюсом для его здоровья и поведения. Если вы ищете дружелюбного и активного кота, Кот станет отличным дополнением к вашей семье.',
                helpWanted: true,
                helpDescription: 'Коту нужна помощь с приобретением качественного корма и игрушек для поддержания его активности и здоровья. Если у вас есть возможность помочь, будем очень благодарны за любую поддержку. Особенно нужны специализированные корма, которые помогут поддерживать его отличное самочувствие и здоровье.'
            },
        ]
    }, getters: {
        cats: (state) => {
            return state.cats;
        },
        getRandomCats: (state) => {
            const shuffled = state.cats.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 6)
        },
        totalAnimals: state => state.cats.length,
        maleCats: state => state.cats.filter(cat => cat.gender === 'male').length,
        femaleCats: state => state.cats.filter(cat => cat.gender === 'female').length,
        animalsLookingForHome: state => state.cats.filter(cat => cat.forHome).length,
        animalsNeedingHelp: state => state.cats.filter(cat => cat.helpWanted === true).length,
        getCatById: (state) => (id) => state.cats.find(cat => cat.id === id),

    },
}