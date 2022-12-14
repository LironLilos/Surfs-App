const products = [
  {
    id: 1,
    name: 'SUP SURFTECH GENERATOR',
    category: 'sup',
    img: '/images/products/SUP SURFTECH GENERATOR.jpg',
    price: 71990,
    countInStock: 5,
    rating: 4.5,
    numberOfReviews: 18,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, iaculis at sem et, vulputate consectetur magna. Integer nec nisi eu est semper aliquet at vel lectus. Proin malesuada turpis vel varius mollis. Ut hendrerit neque at turpis accumsan iaculis. Cras in ligula non dolor accumsan malesuada.',
    featuredProduct: true,
  },
  {
    id: 2,
    name: 'SUP SURFTECH THE LIDO',
    category: 'sup',
    img: '/images/products/SUP SURFTECH THE LIDO.jpg',
    price: 9990,
    countInStock: 4,
    rating: 5,
    numberOfReviews: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra. Lacus vestibulum sed arcu non odio euismod. Arcu dictum varius duis at consectetur lorem donec. Viverra orci sagittis eu volutpat odio facilisis mauris. Feugiat sed lectus vestibulum mattis ullamcorper. Enim diam vulputate ut pharetra sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Urna duis convallis convallis tellus. Magna fermentum iaculis eu non diam. Et malesuada fames ac turpis egestas. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Facilisi morbi tempus iaculis urna id volutpat. Facilisi etiam dignissim diam quis enim. Consequat semper viverra nam libero. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
    featuredProduct: true,
  },
  {
    id: 3,
    name: 'SURFTECH DREAMLINER SURFBOARD',
    category: 'sup',
    img: '/images/products/SURFTECH DREAMLINER SURFBOARD.jpg',
    price: 98090,
    countInStock: 4,
    rating: 4,
    numberOfReviews: 16,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra. Lacus vestibulum sed arcu non odio euismod. Arcu dictum varius duis at consectetur lorem donec. Viverra orci sagittis eu volutpat odio facilisis mauris. Feugiat sed lectus vestibulum mattis ullamcorper. Enim diam vulputate ut pharetra sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Urna duis convallis convallis tellus. Magna fermentum iaculis eu non diam. Et malesuada fames ac turpis egestas. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Facilisi morbi tempus iaculis urna id volutpat. Facilisi etiam dignissim diam quis enim. Consequat semper viverra nam libero. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
    featuredProduct: true,
  },
  {
    id: 4,
    name: 'SURFTECH X PURA VIDA TCP 2-PIECE ADJUSTABLE PADDLE',
    category: 'sup',
    img: '/images/products/SURFTECH X PURA VIDA TCP 2-PIECE ADJUSTABLE PADDLE.jpg',
    price: 49990,
    countInStock: 7,
    rating: 3.5,
    numberOfReviews: 38,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra. Lacus vestibulum sed arcu non odio euismod. Arcu dictum varius duis at consectetur lorem donec. Viverra orci sagittis eu volutpat odio facilisis mauris. Feugiat sed lectus vestibulum mattis ullamcorper. Enim diam vulputate ut pharetra sit. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Urna duis convallis convallis tellus. Magna fermentum iaculis eu non diam. Et malesuada fames ac turpis egestas. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Facilisi morbi tempus iaculis urna id volutpat. Facilisi etiam dignissim diam quis enim. Consequat semper viverra nam libero. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
    featuredProduct: true,
  },
  {
    id: 5,
    name: 'FORRO AERO RACK PADS 28 ROOF PADS',
    category: 'sup',
    img: '/images/products/FORRO AERO RACK PADS 28 ROOF PADS.jpg',
    price: 11990,
    countInStock: 0,
    rating: 0.5,
    numberOfReviews: 10,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 6,
    name: 'SEAGLASS 2-PIECE ADJUSTABLE PADDLE',
    category: 'sup',
    img: '/images/products/SEAGLASS 2-PIECE ADJUSTABLE PADDLE.jpg',
    price: 14990,
    countInStock: 2,
    rating: 5,
    numberOfReviews: 20,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 7,
    name: 'SWIFFER-FISH 2-PIECE ADJUSTABLE PADDLE',
    category: 'sup',
    img: '/images/products/SWIFFER-FISH 2-PIECE ADJUSTABLE PADDLE.jpg',
    price: 41990,
    countInStock: 0,
    rating: 3,
    numberOfReviews: 50,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 8,
    name: 'SUP NSP O2 ALLROUNDER LT',
    category: 'sup',
    img: '/images/products/TABLA DE SUP NSP O2 ALLROUNDER LT.jpg',
    price: 61990,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 9,
    name: 'SUP FANATIC FLY AIR',
    category: 'sup',
    img: '/images/products/SUP FANATIC FLY AIR.jpg',
    price: 19990,
    countInStock: 2,
    rating: 0.5,
    numberOfReviews: 10,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 10,
    name: 'ROXY ALUMINIUM PADDLE 3 PIECES PADDLE',
    category: 'sup',
    img: '/images/products/ROXY ALUMINIUM PADDLE 3 PIECES PADDLE.jpg',
    price: 34090,
    countInStock: 2,
    rating: 5,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 11,
    name: 'SKATE MILLER CORPORATE',
    category: 'skate',
    img: '/images/products/SKATE MILLER CORPORATE.jpg',
    price: 51000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 16,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 12,
    name: 'BLACK RACER SPECIAL EDITION',
    category: 'skate',
    img: '/images/products/BLACK RACER SPECIAL EDITION.jpg',
    price: 66200,
    countInStock: 2,
    rating: 3.5,
    numberOfReviews: 38,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 13,
    name: 'SKATE PLAN B SHECKLER EMBROIDERED',
    category: 'skate',
    img: '/images/products/SKATE PLAN B SHECKLER EMBROIDERED.jpg',
    price: 16000,
    countInStock: 2,
    rating: 3,
    numberOfReviews: 50,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 14,
    name: 'SURFSKATE SANTA CRUZ WAVE DOT CUT BACK',
    category: 'skate',
    img: '/images/products/SURFSKATE SANTA CRUZ WAVE DOT CUT BACK.jpg',
    price: 23000,
    countInStock: 2,
    rating: 5,
    numberOfReviews: 20,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 15,
    name: 'SURFSKATE SANTA CRUZ FLAME DOT SHARK',
    category: 'skate',
    img: '/images/products/SURFSKATE SANTA CRUZ FLAME DOT SHARK.jpg',
    price: 41000,
    countInStock: 2,
    rating: 4.5,
    numberOfReviews: 18,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 16,
    name: 'CREATURES GRIFFIN COLAPINTO LITE PAD',
    category: 'surf',
    img: '/images/products/CREATURES GRIFFIN COLAPINTO LITE PAD.jpg',
    price: 80000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 17,
    name: 'ODYSEA SKIPPER QUADSURFBOARD',
    category: 'surf',
    img: '/images/products/ODYSEA SKIPPER QUADSURFBOARD.jpg',
    price: 60000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 18,
    name: 'SURF ODYSEA SKIPPER- QUAD 6 SURFBOARD',
    category: 'surf',
    img: '/images/products/SURF ODYSEA SKIPPER- QUAD 6 SURFBOARD.jpg',
    price: 40000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 19,
    name: 'TOWN & COUNTRY TANAKA GLIDE 6 8 SURFBOARD',
    category: 'surf',
    img: '/images/products/TOWN & COUNTRY TANAKA GLIDE 6 8 SURFBOARD.jpg',
    price: 33000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 20,
    name: 'QUIKSILVER QS SHORT 5 9 BAG',
    category: 'surf',
    img: '/images/products/QUIKSILVER QS SHORT 5 9 BAG.jpg',
    price: 22000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 21,
    name: 'QUIKSILVER UNION 6 LEASH',
    category: 'surf',
    img: '/images/products/QUIKSILVER UNION 6 LEASH.jpg',
    price: 18000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 22,
    name: 'FUTURES VII FEA BLACKSTIX 3.0 M TRI-FINS FINS',
    category: 'surf',
    img: '/images/products/FUTURES VII FEA BLACKSTIX 3.0 M TRI-FINS FINS.jpg',
    price: 40000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 23,
    name: 'VENON GOPHER 7 0 SURFBOARD',
    category: 'surf',
    img: '/images/products/VENON GOPHER 7 0 SURFBOARD.jpg',
    price: 22000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 24,
    name: 'OCEAN EARTH HAPPY HOUR 6 6 - SKY SURFBOARD',
    category: 'surf',
    img: '/images/products/OCEAN EARTH HAPPY HOUR 6 6 - SKY SURFBOARD.jpg',
    price: 37000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 25,
    name: 'INDIO ENDURANCE PLUS 5 10 SURFBOARD',
    category: 'surf',
    img: '/images/products/INDIO ENDURANCE PLUS 5 10 SURFBOARD.jpg',
    price: 52000,
    countInStock: 0,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 26,
    name: 'LOST PUDDLE JUMPER LIGHT SPEED  6 0 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/LOST PUDDLE JUMPER LIGHT SPEED  6 0 SURFBOARD.jpg',
    price: 43000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 27,
    name: 'SOFTECH BRAINCHILD 7 6 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/SOFTECH BRAINCHILD 7 6 SURFBOARD.jpg',
    price: 34000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 28,
    name: 'SOFTECH ROLLER 7 6 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/SOFTECH ROLLER 7 6 SURFBOARD.jpg',
    price: 19000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 29,
    name: 'GERRY LOPEZ SOMETHING FISHY 6 0 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/GERRY LOPEZ SOMETHING FISHY 6 0 SURFBOARD.jpg',
    price: 12000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 30,
    name: 'TOLEDO WILDFIRE 5 3 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/TOLEDO WILDFIRE 5 3 SURFBOARD.jpg',
    price: 42000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 31,
    name: 'ROLLER 8 0 SURFBOARD',
    category: 'wind-surf',
    img: '/images/products/ROLLER 8 0 SURFBOARD.jpg',
    price: 23000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 32,
    name: 'ZEPPELIN 8 0 SURFBOARD',
    category: 'kite-surf',
    img: '/images/products/ZEPPELIN 8 0 SURFBOARD.jpg',
    price: 51000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 0,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 33,
    name: 'LIL RIPPER 5 6 SURFBOARD',
    category: 'kite-surf',
    img: '/images/products/LIL RIPPER 5 6 SURFBOARD.jpg',
    price: 71000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 34,
    name: 'SCI-FI 2.0 5 3 SURFBOARD',
    category: 'kite-surf',
    img: '/images/products/SCI-FI 2.0 5 3 SURFBOARD.jpg',
    price: 76000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 0,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 35,
    name: 'SCI-FI 2 LFT 3 SURFBOARD',
    category: 'kite-surf',
    img: '/images/products/SCI-FI 2 LFT 3 SURFBOARD.jpg',
    price: 35000,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
  {
    id: 36,
    name: 'BRAINCHILD 7 0 SURFBOARD',
    category: 'kite-surf',
    img: '/images/products/BRAINCHILD 7 0 SURFBOARD.jpg',
    price: 22000,
    countInStock: 0,
    rating: 4,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    featuredProduct: false,
  },
];

export default products;
