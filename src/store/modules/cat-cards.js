
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
            {
                id: 2,
                checkInDate: '2024_05_11',
                images: [
                    require('@/assets/img/cats/cat-photo_02_01.jpg'),
                    require('@/assets/img/cats/cat-photo_02_02.jpg'),
                    require('@/assets/img/cats/cat-photo_02_03.jpg'),
                    require('@/assets/img/cats/cat-photo_02_04.jpg'),
                    require('@/assets/img/cats/cat-photo_02_05.jpg'),
                    require('@/assets/img/cats/cat-photo_02_06.jpg')
                ],
                name: 'Мурка',
                forHome: true,
                age: {
                    years: 3,
                    months: 4
                },
                gender: 'female',
                sterilization: false,
                health: true,
                healthDescription: 'Мурка здорова и активно играет каждый день, она любит бегать за лазерной указкой и охотиться за игрушечными мышами.',
                description: 'Мурка — прекрасная кошка, которой 3 года и 4 месяца. Она ласковая и любит проводить время в компании людей. Её любимое занятие — греться на солнышке и мурлыкать. Мурка не стерилизована, но у неё отличное здоровье и она активно играет каждый день.',
                helpWanted: false,
                helpDescription: ''
            },
            {
                id: 3,
                checkInDate: '2024_01_27',
                images: [
                    require('@/assets/img/cats/cat-photo_03_01.jpg'),
                    require('@/assets/img/cats/cat-photo_03_02.jpg'),
                    require('@/assets/img/cats/cat-photo_03_03.jpg'),
                    require('@/assets/img/cats/cat-photo_03_04.jpg'),
                    require('@/assets/img/cats/cat-photo_03_05.jpg'),
                    require('@/assets/img/cats/cat-photo_03_06.jpg'),
                    require('@/assets/img/cats/cat-photo_03_07.jpg')
                ],
                name: 'Барсик',
                forHome: false,
                age: {
                    years: 1,
                    months: 2
                },
                gender: 'male',
                sterilization: true,
                health: true,
                healthDescription: 'Барсик здоров, но иногда у него случаются аллергические реакции на определенные виды пищи.',
                description: 'Барсик — молодой кот, которому всего 1 год и 2 месяца. Он полон энергии и всегда готов играть. Этот котик стерилизован и здоров, однако иногда у него бывают аллергические реакции на определенные виды пищи. Барсик обожает бегать за мячиком и прятаться в картонных коробках.',
                helpWanted: false,
                helpDescription: ''
            },
            {
                id: 4,
                checkInDate: '2024_04_23',
                images: [
                    require('@/assets/img/cats/cat-photo_04_01.jpg'),
                    require('@/assets/img/cats/cat-photo_04_02.jpg'),
                    require('@/assets/img/cats/cat-photo_04_03.jpg'),
                    require('@/assets/img/cats/cat-photo_04_04.jpg'),
                    require('@/assets/img/cats/cat-photo_04_05.jpg'),
                    require('@/assets/img/cats/cat-photo_04_06.jpg'),
                    require('@/assets/img/cats/cat-photo_04_07.jpg')
                ],
                name: 'Снежок',
                forHome: true,
                age: {
                    years: 4,
                    months: 8
                },
                gender: 'male',
                sterilization: false,
                health: false,
                healthDescription: '',
                description: 'Снежок — белоснежный кот с голубыми глазами, которому 4 года и 8 месяцев. Он очень спокойный и любит проводить время в уединении, но также не против поиграть с другими животными. Снежок не стерилизован, но у него отличное здоровье и никаких проблем с ним не возникает.',
                helpWanted: true,
                helpDescription: 'Снежку нужна помощь в приобретении качественного корма, а также новых игрушек. Он будет очень благодарен за любую поддержку, особенно за специальные лакомства для котов.'
            },
            {
                id: 5,
                checkInDate: '2024_04_22',
                images: [
                    require('@/assets/img/cats/cat-photo_05_01.jpg'),
                    require('@/assets/img/cats/cat-photo_05_02.jpg'),
                    require('@/assets/img/cats/cat-photo_05_03.jpg'),
                    require('@/assets/img/cats/cat-photo_05_04.jpg')
                ],
                name: 'Люси',
                forHome: false,
                age: {
                    years: 5,
                    months: 0
                },
                gender: 'female',
                sterilization: true,
                health: false,
                healthDescription: '',
                description: 'Люси — взрослая кошка, которой 5 лет. Она спокойная и уравновешенная, любит проводить время на коленях у хозяина. Люси стерилизована и у неё отличное здоровье. Если вы ищете спокойного и ласкового питомца, Люси станет вашим идеальным другом.',
                helpWanted: false,
                helpDescription: ''
            },
            {
                id: 6,
                checkInDate: '2024_03_25',
                images: [
                    require('@/assets/img/cats/cat-photo_06_01.jpg'),
                    require('@/assets/img/cats/cat-photo_06_02.jpg'),
                    require('@/assets/img/cats/cat-photo_06_03.jpg'),
                    require('@/assets/img/cats/cat-photo_06_04.jpg'),
                    require('@/assets/img/cats/cat-photo_06_05.jpg'),
                    require('@/assets/img/cats/cat-photo_06_06.jpg')
                ],
                name: 'Мурзик',
                forHome: true,
                age: {
                    years: 2,
                    months: 3
                },
                gender: 'male',
                sterilization: true,
                health: true,
                healthDescription: 'Мурзик имеет хорошее здоровье, однако ему нужны регулярные визиты к ветеринару для профилактики.',
                description: 'Мурзик — энергичный кот, которому 2 года и 3 месяца. Он любит играть с другими животными и бегать по дому. Мурзик стерилизован и здоров, однако ему необходимы регулярные визиты к ветеринару для профилактики. Если вы ищете активного и жизнерадостного кота, Мурзик — ваш выбор.',
                helpWanted: true,
                helpDescription: 'Мурзику необходима помощь в приобретении качественного корма и регулярные визиты к ветеринару для профилактики. Любая поддержка будет очень полезной для него.'
            },
            {
                id: 7,
                checkInDate: '2023_10_03',
                images: [
                    require('@/assets/img/cats/cat-photo_07_01.jpg'),
                    require('@/assets/img/cats/cat-photo_07_02.jpg'),
                    require('@/assets/img/cats/cat-photo_07_03.jpg'),
                    require('@/assets/img/cats/cat-photo_07_04.jpg'),
                    require('@/assets/img/cats/cat-photo_07_05.jpg'),
                    require('@/assets/img/cats/cat-photo_07_06.jpg')
                ],
                name: 'Белка',
                forHome: true,
                age: {
                    years: 1,
                    months: 5
                },
                gender: 'female',
                sterilization: false,
                health: false,
                healthDescription: '',
                description: 'Белка — молодая кошка, которой 1 год и 5 месяцев. Она очень игривая и любит охотиться за игрушками. Белка не стерилизована, но у неё отличное здоровье и она активна каждый день. Её любимое занятие — играть с другими животными и бегать по дому.',
                helpWanted: false,
                helpDescription: ''
            },
            {
                id: 8,
                checkInDate: '2024_02_03',
                images: [
                    require('@/assets/img/cats/cat-photo_08_01.jpg'),
                    require('@/assets/img/cats/cat-photo_08_02.jpg'),
                    require('@/assets/img/cats/cat-photo_08_03.jpg'),
                    require('@/assets/img/cats/cat-photo_08_04.jpg'),
                    require('@/assets/img/cats/cat-photo_08_05.jpg'),
                    require('@/assets/img/cats/cat-photo_08_06.jpg'),
                    require('@/assets/img/cats/cat-photo_08_07.jpg')
                ],
                name: 'Рыжик',
                forHome: true,
                age: {
                    years: 3,
                    months: 1
                },
                gender: 'male',
                sterilization: true,
                health: false,
                healthDescription: '',
                description: 'Рыжик — красивый рыжий кот, которому 3 года и 1 месяц. Он спокойный и любит проводить время в уединении. Рыжик стерилизован и у него отличное здоровье. Если вы ищете спокойного и независимого кота, Рыжик станет вашим идеальным питомцем.',
                helpWanted: true,
                helpDescription: 'Рыжику нужна помощь в приобретении качественного корма и новых игрушек. Он будет очень благодарен за любую поддержку.'
            },
            {
                id: 9,
                checkInDate: '2024_01_07',
                images: [
                    require('@/assets/img/cats/cat-photo_09_01.jpg'),
                    require('@/assets/img/cats/cat-photo_09_02.jpg'),
                    require('@/assets/img/cats/cat-photo_09_03.jpg'),
                    require('@/assets/img/cats/cat-photo_09_04.jpg'),
                    require('@/assets/img/cats/cat-photo_09_05.jpg'),
                    require('@/assets/img/cats/cat-photo_09_06.jpg')
                ],
                name: 'Черныш',
                forHome: true,
                age: {
                    years: 4,
                    months: 6
                },
                gender: 'male',
                sterilization: false,
                health: true,
                healthDescription: 'Черныш здоров и активен, ему нравится играть с другими животными и бегать по дому.',
                description: 'Черныш — черный кот с блестящей шерстью, которому 4 года и 6 месяцев. Он активен и любознателен, любит проводить время на улице, охотиться на мелких животных и играть с другими котами. Черныш не стерилизован, но у него отличное здоровье и он никогда не болеет. Он станет отличным другом для активных и любящих природу людей.',
                helpWanted: true,
                helpDescription: 'Чернышу нужна помощь в приобретении качественного корма, а также средств для защиты от паразитов. Он будет очень благодарен за любую поддержку.'
            },
            {
                id: 10,
                checkInDate: '2024_01_07',
                images: [
                    require('@/assets/img/cats/cat-photo_10_01.jpg'),
                    require('@/assets/img/cats/cat-photo_10_02.jpg'),
                    require('@/assets/img/cats/cat-photo_10_03.jpg'),
                    require('@/assets/img/cats/cat-photo_10_04.jpg'),
                    require('@/assets/img/cats/cat-photo_10_05.jpg'),
                    require('@/assets/img/cats/cat-photo_10_06.jpg')
                ],
                name: 'Маша',
                forHome: true,
                age: {
                    years: 3,
                    months: 10
                },
                gender: 'female',
                sterilization: true,
                health: false,
                healthDescription: '',
                description: 'Маша — грациозная кошка, которой 3 года и 10 месяцев. Она спокойная и ласковая, любит проводить время рядом с людьми, мурлыкая на коленях у хозяина. Маша стерилизована и у неё отличное здоровье. Если вы ищете спокойного и любящего питомца, Маша станет отличным выбором.',
                helpWanted: false,
                helpDescription: ''
            },
            {
                id: 11,
                checkInDate: '2024_01_07',
                images: [
                    require('@/assets/img/cats/cat-photo_11_01.jpg'),
                    require('@/assets/img/cats/cat-photo_11_02.jpg'),
                    require('@/assets/img/cats/cat-photo_11_03.jpg'),
                    require('@/assets/img/cats/cat-photo_11_04.jpg'),
                    require('@/assets/img/cats/cat-photo_11_05.jpg'),
                    require('@/assets/img/cats/cat-photo_11_06.jpg')
                ],
                name: 'Том',
                forHome: true,
                age: {
                    years: 5,
                    months: 2
                },
                gender: 'male',
                sterilization: false,
                health: true,
                healthDescription: 'Том здоров, но у него есть небольшая склонность к ожирению, поэтому ему нужно соблюдать диету.',
                description: 'Том — взрослый кот, которому 5 лет и 2 месяца. Он спокойный и уравновешенный, любит проводить время, лежа на солнце. Том не стерилизован, но у него хорошее здоровье. Он имеет небольшую склонность к ожирению, поэтому ему нужна специальная диета и активные игры. Том станет прекрасным другом для тех, кто любит спокойных и ласковых котов.',
                helpWanted: true,
                helpDescription: 'Тому нужна помощь в приобретении специального корма для котов с склонностью к ожирению. Любая поддержка в виде корма или игрушек для активных игр будет очень полезной.'
            },
            {
                id: 12,
                checkInDate: '2023_12_05',
                images: [
                    require('@/assets/img/cats/cat-photo_12_01.jpg'),
                    require('@/assets/img/cats/cat-photo_12_02.jpg'),
                    require('@/assets/img/cats/cat-photo_12_03.jpg'),
                    require('@/assets/img/cats/cat-photo_12_04.jpg'),
                    require('@/assets/img/cats/cat-photo_12_05.jpg'),
                    require('@/assets/img/cats/cat-photo_12_06.jpg')
                ],
                name: 'Сима',
                forHome: true,
                age: {
                    years: 2,
                    months: 9
                },
                gender: 'female',
                sterilization: true,
                health: false,
                healthDescription: '',
                description: 'Сима — молодая кошка, которой 2 года и 9 месяцев. Она очень игривая и любит проводить время в компании людей. Сима стерилизована и у неё отличное здоровье. Её любимое занятие — бегать за игрушками и играть с другими животными. Если вы ищете активного и жизнерадостного питомца, Сима станет отличным выбором.',
                helpWanted: false,
                helpDescription: ''
            }
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