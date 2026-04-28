const base = '/hobbies'
const img = n => `${base}/WhatsApp Image 2026-04-28 at 00.44.54 (${n}).jpeg`

// Cooking photos — swap numbers with skiing below if something looks wrong
const cookingPhotos = [2, 3, 4, 5, 6, 7, 8, 9].map(n => ({
  image: img(n),
  text: 'Cooking',
}))

// Skiing photos
const skiingPhotos = [10, 11, 12, 13, 14, 15].map(n => ({
  image: img(n),
  text: 'Skiing',
}))

export const hobbyData = {
  cooking: {
    title: 'Cooking',
    cover: img(2),
    items: cookingPhotos,
  },
  skiing: {
    title: 'Skiing',
    cover: img(10),
    items: skiingPhotos,
  },
}
