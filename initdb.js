const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Spaghetti Bolognese',
    slug: 'spaghetti-bolognese',
    image: '/1.jpg',
    summary: 'A classic Italian pasta dish with a rich meat sauce.',
    instructions: `
    1. Cook spaghetti according to package instructions.
    2. In a separate pan, sauté onions and garlic until translucent.
    3. Add ground beef and cook until browned.
    `,
    creator: 'John Doe',
    creator_email: 'john@gmail.com',
  },
  {
    title: 'Chicken Curry',
    slug: 'chicken-curry',
    image: '/3.jpg',
    summary: 'A flavorful curry dish with tender chicken pieces.',
    instructions: `
    1. Heat oil in a pan and add onions and garlic.
    2. Add chicken pieces and cook until browned.
    3. Stir in curry powder and coconut milk, simmer until chicken is cooked through.
    `,
    creator: 'Jane Smith',
    creator_email: 'jane@gmail.com'
  },
  {
    title: 'Caesar Salad',
    slug: 'caesar-salad',
    image: '/5.png',
    summary: 'A fresh salad with romaine lettuce, croutons, and Caesar dressing.',
    instructions: `
    1. In a bowl, combine romaine lettuce, croutons, and Parmesan cheese.
    2. Drizzle with Caesar dressing and toss to combine.
    `,
    creator: 'Alice Johnson',
    creator_email: 'Alice@gmail.com'
  }
];
db.prepare(`
  CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
  )
  `).run();

  async function initData() {
    const stmt = db.prepare(`
      INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
      )
    `);
  
    for (const meal of dummyMeals) {
      stmt.run(meal);
    }
  }
  
  initData();