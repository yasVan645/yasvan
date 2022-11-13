module.exports = {
    hello: async () => {
        return 'Hello there! I\'m yasvan.js version 1.0.0 running on node.js@>=7.8.0';
    },
    personal: {
        names: async () => {
            const _names_ = {
                nickName: ['yasvan'],
                realName: ['Yasin Vandry']
            }
            return _names_;
        },
        age: async () => {
            const _age_ = {
                current: '19',
                lastUpdate: '13-11-2022'
            }
            return _age_;
        }
    },
    general: {
        socials: async () => {
            const _socials_ = {
                count: 5,
                list: {
                    instagram: {
                        username: '@_yasvan',
                        link: 'https://instagram.com/yasvan',
                        icon: 'https://pnggrid.com/wp-content/uploads/2021/05/Instagram-Logo-2048x1965.png'
                    },
                    facebook: {
                        username: '@_yasvan05',
                        link: 'https://www.facebook.com/yasvan05',
                        icon: ''
                    },
                    reddit: {
                        username: 'yasVan645',
                        link: 'https://www.reddit.com/yasVan645',
                        icon: ''
                    },
                    discord: {
                        username: '(⚈ ₋₍ ⚈) yasVan#0001',
                        link: 'https://discord.com',
                        icon: ''
                    },
                    github: {
                        username: 'yasVan645',
                        link: 'https://github.com/yasVan645',
                        icon: ''
                    },
                }
            }
            return _socials_; 
        },
        hobbies: async () => {
            const _hobbies_ = {
                outdoor: [
                    'Camping', 'Fishing'
                ],
                sports: [
                    'Archery', 'Cycling','Paintball',   
                ],
                travel: [],
                traditional: [
                    'Coloring','Drawing','Painting','Writing (Codes)'
                ],
                crafting: [
                    'Origami','Woodworking'
                ],
                food_cooking: [
                    'Baking','Cooking','Mixology',
                ],
                games: [
                    'Chess','Gaming','Puzzles'
                ],
                Collecting: [],
                Enrichment_Miscellaneous: [
                    ' Learn a New Language',
                ],
                others: [
                    'Graphic Design',''
                ]
            }
            return _hobbies_;
        },
        favorites: async () => {
            const _favorites_ = {
                food: {
                    dishes: ['Chicken', 'Fried rice']
                },
                colors: {
                    blue: '#1d5cff',
                    orangeRed: '#ff4500',
                    blueviolet: '#8a2be2'
                },
                musics: {
                    relaxing: ['Chillstep mix'],
                    moody: ['J-Pop', 'ETC.']
                },
                sports: [
                    'Volleyball','Long Tenis'
                ]
            }
            return _favorites_;
        }
    }
}
