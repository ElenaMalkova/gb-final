export default {
    state: {
        projects: [

            {
                id: 1,
                topic: 'Decor / Architecture',
                heading: 'Modern Kitchan',
                img: [
                    require('@/assets/img/projects_img/gallery_img-1-1.jpg'),
                    require('@/assets/img/projects_img/gallery_img-1-2.jpg'),
                    require('@/assets/img/projects_img/gallery_img-1-3.jpg'),
                ],
                tag: 'Kitchen',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" + "\n" + "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },
            {
                id: 2,
                topic: 'Decor / Architecture',
                heading: 'Cozy Bedroom',
                img: [
                    require('@/assets/img/projects_img/gallery_img-2-1.jpg'),
                    require('@/assets/img/projects_img/gallery_img-2-2.jpg'),
                    require('@/assets/img/projects_img/gallery_img-2-3.jpg'),
                ],
                tag: 'Bedroom',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" + "\n" + "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },
            {
                id: 3,
                topic: 'Decor / Architecture',
                heading: 'Stylish Livingroom',
                img: [
                    require('@/assets/img/projects_img/gallery_img-3-1.jpg'),
                    require('@/assets/img/projects_img/gallery_img-3-2.jpg'),
                    require('@/assets/img/projects_img/gallery_img-3-3.jpg'),
                ],
                tag: 'Livingroom',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" + "\n" + "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },
            {
                id: 4,
                topic: 'Decor / Architecture',
                heading: 'Epic Bathroom',
                img: [
                    require('@/assets/img/projects_img/gallery_img-4-1.jpg'),
                    require('@/assets/img/projects_img/gallery_img-4-2.jpg'),
                ],
                tag: 'Bathroom',
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n" + "\n" + "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },]
    }, getters: {
        projects: (state) => {
            return state.projects;
        }
    },
}