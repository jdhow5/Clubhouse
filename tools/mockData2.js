const user = [
    {
        id: 1,
        firstName: "Brodie",
        lastName: "Ward",
        rating: "4.5",
        address: {
            street: "1209 Rustico Rd",
            city: "Miltonvale Park",
            province: "PE",
            postalCode: "C1E 3B9",
            countryCode: "CA"
        },
        clubsId: 1
    },
    {
        id: 2,
        firstName: "Brian",
        lastName: "Howard",
        rating: "4.0",
        address: {
            street: "375 Pine Grove Rd",
            city: "Long River",
            province: "PE",
            postalCode: "C0B 1M0",
            countryCode: "CA"
        },
        clubsId: 2
    },
    {
        id: 3,
        firstName: "Jacob",
        lastName: "Howard",
        rating: "4.2",
        address: {
            street: "310 Roncesvalles Ave",
            city: "Toronto",
            province: "ON",
            postalCode: "M6R 2M5",
            countryCode: "CA"
        },
        clubsId: 3
    },
    {
        id: 4,
        firstName: "Michael",
        lastName: "Waddell",
        rating: "3.8",
        address: {
            street: "2 Gloucester St",
            city: "Toronto",
            province: "ON",
            postalCode: "M4Y 1Z5",
            countryCode: "CA"
        },
        clubsId: 4
    },
    {
        id: 5,
        firstName: "Richard",
        lastName: "McInnis",
        rating: "4.0",
        address: {
            street: "52 Diana Grace Ave",
            city: "Dartmouth",
            province: "NS",
            postalCode: "B2W 6A2",
            countryCode: "CA"
        },
        clubsId: 5
    },
    {
        id: 6,
        firstName: "Rob",
        lastName: "Hunt",
        rating: "3.6",
        address: {
            street: "1 Andrew Cobb Ct",
            city: "Bedford",
            province: "NS",
            postalCode: "B4A 4J9",
            countryCode: "CA"
        },
        clubsId: 6
    },
    {
        id: 7,
        firstName: "Keir",
        lastName: "Clark",
        rating: "3.9",
        address: {
            street: "185 Woodside Rd",
            city: "Breadalbane",
            province: "PE",
            postalCode: "C0A 1E0",
            countryCode: "CA"
        },
        clubsId: 7
    },
    {
        id: 8,
        firstName: "Steve",
        lastName: "Smith",
        rating: "5.0",
        address: {
            street: "104 Sunnyside Dr",
            city: "Lot 20",
            province: "PE",
            postalCode: "C0A 1M0",
            countryCode: "CA"
        },
        clubsId: 8
    },
    {
        id: 9,
        firstName: "Spencer",
        lastName: "Montgomery",
        rating: "4.1",
        address: {
            street: "168 Dorchester St",
            city: "Charlottetown",
            province: "PE",
            postalCode: "C1A 4V9",
            countryCode: "CA"
        },
        clubsId: 9
    },
    {
        id: 10,
        firstName: "Drew",
        lastName: "Coulson",
        rating: "3.2",
        address: {
            street: "99 Madison Ave",
            city: "Toronto",
            province: "ON",
            postalCode: "M5R 2S3",
            countryCode: "CA"
        },
        clubsId: 10
    }
];

const clubs = [
    {
        id: 1,
        userId: 1,
        hand: "left",
        fullSet: true,
        price: "30.00",
        image: "",
        driver: {
            name: "Taylormade M4",
            price: "5.00",
            shaft: "Graphite",
            flex: "S",
            image: ""
        },
        fairwayWood: [
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
                image: ""
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
                image: ""
            }
        ],
        hybrid: [],
        irons: [
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            }
        ],
        wedge: [
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: "",
            },
            {
                name: "",
                type: "",
                price: "",
                shaft: "",
                flex: ""
            }
        ],
        putter: {
            name: "",
            type: "",
            price: "",
            shaft: "",
            flex: "",
            image: ""
        }
    },
    {
        id: 2,
        name: "Scott Allen"
    },
    {
        id: 3,
        name: "Dan Wahlin"
    }
];

const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    newCourse,
    user,
    clubs
};
