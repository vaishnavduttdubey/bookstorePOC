import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  searchBooks(term: any): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  books=[
   { id: 1, title: 'Percy Jackson and the Lightning Thief', author: 'Rick Riordan', price: 450, image: 'assets/Award winner/9780141346809.jpg', rating: '★★★★', category: 'Award winner', description: 'Percy discovers he is the son of a Greek god and embarks on a dangerous quest.' },

  { id: 2, title: 'Guns, Germs, and Steel', author: 'Jared Diamond', price: 599, image: 'assets/Award winner/Guns Germs and steel.jpg', rating: '★★★★★', category: 'Award winner', description: 'A comprehensive analysis of how civilizations developed differently around the world.' },

  { id: 3, title: 'The Gruffalo', author: 'Julia Donaldson', price: 399, image: 'assets/Award winner/The gruffalo.jpg', rating: '★★★★', category: 'Award winner', description: 'A clever mouse outsmarts predators with tales of the terrifying Gruffalo.' },

   { id: 4, title: '12 Year My Messed-up Love Story', author: 'Chetan Bhagat', price: 300, image: 'assets/New Arrival/12 Year my messed-up Love story.jpg', rating: '★★★', category: 'New Arrival', description: 'A humorous and relatable story about love, friendship, and life’s ups and downs.' },

   { id: 5, title: 'Basti Darbar', author: 'Rajat Sharma', price: 399, image: 'assets/New Arrival/Basti and Darbar.jpg', rating: '★★★★', category: 'New Arrival', description: 'Insights into political and social issues in modern India.' },
  { id: 6, title: 'Luna Octopus', author: 'Elena Grant', price: 350, image: 'assets/New Arrival/Luna octopus.jpg', rating: '★★★☆', category: 'New Arrival', description: 'An imaginative story exploring the wonders of the ocean.' },
  { id: 7, title: 'Nightingale', author: 'Kristin Hannah', price: 499, image: 'assets/New Arrival/Nightingale.jpg', rating: '★★★★★', category: 'New Arrival', description: 'A story of courage and survival during World War II.' },
  { id: 8, title: 'The Art of Spending Money', author: 'James Clear', price: 799, image: 'assets/New Arrival/The Art of Spending money.jpg', rating: '★★★★', category: 'New Arrival', description: 'Practical tips on smart financial habits and wealth building.' },
 { id: 9, title: 'The Secret of Secrets', author: 'Osho', price: 599, image: 'assets/New Arrival/The secret of secrets.jpg', rating: '★★★★☆', category: 'New Arrival', description: 'Philosophical reflections on life, love, and self-discovery.' },
  { id: 10, title: 'Thomas Edison', author: 'Edmund Morris', price: 550, image: 'assets/New Arrival/thomas edition.jpg', rating: '★★★★', category: 'New Arrival', description: 'The life and inventions of one of the world’s greatest inventors.' },
  { id: 11, title: 'Turtle Moon', author: 'Alice Hoffman', price: 480, image: 'assets/New Arrival/Turtle Moon.jpg', rating: '★★★★☆', category: 'New Arrival', description: 'A story about love, family secrets, and self-discovery.' },
  { id: 12, title: 'Van Gogh', author: 'Steven Naifeh', price: 699, image: 'assets/New Arrival/Van gogh the complete painting.jpg', rating: '★★★★★', category: 'New Arrival', description: 'The complete story of Van Gogh’s life and masterpieces.' },
  { id: 13, title: 'Atlas', author: 'Lucinda Riley', price: 599, image: 'assets/Best seller/Atlas.jpg', rating: '★★★★★', category: 'Bestseller', description: 'A gripping saga across generations and continents.' },
  { id: 14, title: 'Ikigai', author: 'Héctor García & Francesc Miralles', price: 499, image: 'assets/Best seller/Ikigai.jpg', rating: '★★★★★', category: 'Bestseller', description: 'Discover the Japanese secret to a long and happy life.' },
  { id: 15, title: 'Wise and Otherwise', author: 'Sudha Murty', price: 399, image: 'assets/Best seller/Sudha murty.jpg', rating: '★★★★', category: 'Bestseller', description: 'Short stories and reflections on life from real experiences.' },
  { id: 16, title: 'The Alchemist', author: 'Paulo Coelho', price: 499, image: 'assets/Best seller/the Alchemist.jpg', rating: '★★★★★', category: 'Bestseller', description: 'A journey of following your dreams and listening to your heart.' },
  { id: 17, title: 'The Art of Being Alone', author: 'Renuka Narayanan', price: 350, image: 'assets/Best seller/The art of being Alone.jpg', rating: '★★★★☆', category: 'Bestseller', description: 'Exploring self-awareness and personal growth.' },
  { id: 18, title: 'A Brief History of Time', author: 'Stephen Hawking', price: 599, image: 'assets/Biography/A breif history of time.jpg', rating: '★★★★★', category: 'Biography', description: 'From the Big Bang to black holes, a cosmic journey.' },
  { id: 19, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 399, image: 'assets/Biography/APJ Abdul Kalam JI.jpg', rating: '★★★★★', category: 'Biography', description: 'Autobiography of India’s visionary President.' },
  { id: 20, title: 'The Autobiography of a Yogi', author: 'Paramahansa Yogananda', price: 499, image: 'assets/Biography/AutoBiography of a Yogi.jpg', rating: '★★★★★', category: 'Biography', description: 'A spiritual journey into yoga and meditation.' },
  { id: 21, title: 'I Owe You One', author: 'Sophie Kinsella', price: 450, image: 'assets/Biography/IOU.jpg', rating: '★★★☆', category: 'Biography', description: 'A funny and emotional story of friendship and love.' },
  { id: 22, title: 'Steve Jobs', author: 'Walter Isaacson', price: 699, image: 'assets/Biography/Steve Jobs.jpg', rating: '★★★★★', category: 'Biography', description: 'Biography of the legendary Apple co-founder.' },
  { id: 23, title: 'Percy Jackson Box Set', author: 'Rick Riordan', price: 1899, image: 'assets/Box-Set/Percy Jackson.jpg', rating: '★★★★★', category: 'Box Set', description: 'Complete Percy Jackson series in one box.' },
  { id: 24, title: 'Shadow and Bone Box Set', author: 'Leigh Bardugo', price: 1599, image: 'assets/Box-Set/Shadow and Bone.jpg', rating: '★★★★☆', category: 'Box Set', description: 'All Shadow and Bone novels collected together.' },
  { id: 25, title: 'Sherlock Holmes Complete Collection', author: 'Arthur Conan Doyle', price: 1299, image: 'assets/Box-Set/Sherlock Holmes.jpg', rating: '★★★★★', category: 'Box Set', description: 'Classic detective stories from the master of mystery.' },
  { id: 26, title: 'Ben 10: Alien Force', author: 'Cartoon Network', price: 299, image: "assets/Childre's Book/Ben 10 Alien Force.jpg", rating: '★★★☆', category: 'Children', description: 'Ben 10 adventures in fighting aliens.' },
  { id: 27, title: 'Ben 10', author: 'Cartoon Network', price: 250, image: "assets/Childre's Book/Ben 10.jpg", rating: '★★★', category: 'Children', description: 'Classic Ben 10 series for kids.' },
  { id: 28, title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', price: 450, image: "assets/Childre's Book/Chain saw man.jpg", rating: '★★★★', category: 'Children', description: 'A dark action manga full of suspense and thrill.' },
  { id: 29, title: 'Demon Slayer: Kimetsu no Yaiba', author: 'Koyoharu Gotouge', price: 499, image: "assets/Childre's Book/Demon slayer kimetsu no Yaiba.jpg", rating: '★★★★★', category: 'Children', description: 'The story of Tanjiro fighting demons to save his sister.' },
  { id: 30, title: 'Crayon Shinchan', author: 'Yoshito Usui', price: 299, image: "assets/Childre's Book/the Crayon Shinchan.jpg", rating: '★★★★', category: 'Children', description: 'Funny adventures of Shinchan and friends.' },

   { id: 31, title: 'The Man Who Drank the Moon', author: 'Kelly Barnhill', price: 499, image: "assets/Childre's Book/The man Who drank the moon.jpg", rating: '★★★★☆', category: 'Children', description: 'A magical story about a young girl raised by a witch.' },
  { id: 32, title: 'Comedy in Khaki', author: 'Vivek Desai', price: 350, image: 'assets/Comedy/Comedy in Khakhi.jpg', rating: '★★★☆', category: 'Comedy', description: 'Funny stories set in a military backdrop.' },
  { id: 33, title: 'The Divine Comedy', author: 'Dante Alighieri', price: 599, image: 'assets/Comedy/The Divine Comedy.jpg', rating: '★★★★★', category: 'Comedy', description: 'Epic journey through Hell, Purgatory, and Heaven.' },
  { id: 34, title: 'The Temporary Roomie', author: 'Sarah Adams', price: 399, image: 'assets/Comedy/The Temporary Roomie.jpg', rating: '★★★★', category: 'Comedy', description: 'Romantic comedy with twists and turns.' },
  { id: 35, title: 'All the Ever Afters', author: 'Danielle Teller', price: 450, image: 'assets/Fiction Book/All the ever afters.jpg', rating: '★★★★', category: 'Fiction', description: 'A fascinating novel blending reality and fantasy.' },
  { id: 36, title: 'Brahmin Ki Beti', author: 'Munshi Premchand', price: 299, image: 'assets/Fiction Book/Bramhin ki beti.jpg', rating: '★★★★', category: 'Fiction', description: 'Classic Indian fiction exploring social themes.' },
  { id: 37, title: 'Godan', author: 'Munshi Premchand', price: 399, image: 'assets/Fiction Book/Godan.jpg', rating: '★★★★★', category: 'Fiction', description: 'A timeless story of rural India and its struggles.' },
  { id: 38, title: 'Mansarovar', author: 'Munshi Premchand', price: 350, image: 'assets/Fiction Book/Mansarovar.jpg', rating: '★★★★☆', category: 'Fiction', description: 'Collection of short stories by Premchand.' },
  { id: 39, title: 'Raavan', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/Raavan.jpg', rating: '★★★★★', category: 'Fiction', description: 'A retelling of Raavan’s life and the choices he made.' },
  { id: 40, title: 'The Oath of the Vayuputras', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/The oat of VayuPutras.jpg', rating: '★★★★★', category: 'Fiction', description: 'Epic conclusion of the Shiva Trilogy.' },
  { id: 41, title: 'The Time Machine', author: 'H.G. Wells', price: 399, image: 'assets/Fiction Book/The Time Machine.jpg', rating: '★★★★★', category: 'Fiction', description: 'Classic sci-fi about time travel and its consequences.' },
  { id: 42, title: 'Three Men in a Boat', author: 'Jerome K. Jerome', price: 350, image: 'assets/Fiction Book/Three men in a boat.jpg', rating: '★★★★☆', category: 'Fiction', description: 'Humorous tale of a boating holiday on the Thames.' },
  { id: 43, title: 'Enter at Your Own Risk', author: 'R.L. Stine', price: 350, image: 'assets/Horror/Enter at your Own Risk.jpg', rating: '★★★☆', category: 'Horror', description: 'Scary adventures perfect for young readers.' },
  { id: 44, title: 'Famous Five: Mystery of the Ghost Hill', author: 'Enid Blyton', price: 399, image: 'assets/Horror/Famous Fives.jpg', rating: '★★★★', category: 'Horror', description: 'Classic mystery from the Famous Five series.' },
  { id: 45, title: 'Ghost of the Silent Hill', author: 'James Herbert', price: 450, image: 'assets/Horror/Ghost of the Silent Hills.jpg', rating: '★★★★☆', category: 'Horror', description: 'A chilling horror story that will keep you up at night.' },
  { id: 46, title: 'Marghat', author: 'Neelesh Misra', price: 399, image: 'assets/Horror/Marghat.jpg', rating: '★★★★', category: 'Horror', description: 'Frightening tales based on folklore and imagination.' },
  { id: 47, title: 'Secret Seven: The Haunted Hill', author: 'Enid Blyton', price: 350, image: 'assets/Horror/Secret Seven.jpg', rating: '★★★★', category: 'Horror', description: 'Young detectives solve spooky mysteries.' },
  { id: 48, title: 'The Cursed', author: 'A. G. Riddle', price: 499, image: 'assets/Horror/The Cursed.jpg', rating: '★★★☆', category: 'Horror', description: 'A gripping tale of ancient curses and suspense.' },
  { id: 49, title: 'The Wind on the Haunted Hill', author: 'Ruskin Bond', price: 299, image: 'assets/Horror/The wind on the Haunted hill.jpg', rating: '★★★★', category: 'Horror', description: 'Short horror stories for young adults.' },
  { id: 50, title: 'Avengers: The Ultimate Guide', author: 'DK', price: 799, image: 'assets/Marvel/Avengers.jpg', rating: '★★★★★', category: 'Marvel', description: 'Comprehensive guide to the Avengers superheroes.' },
  { id: 51, title: 'Daredevil', author: 'Stan Lee', price: 699, image: 'assets/Marvel/DareDevil.jpg', rating: '★★★★★', category: 'Marvel', description: 'Story of the blind superhero vigilante.' },
  { id: 52, title: 'Iron Man', author: 'Ted Hughes', price: 699, image: 'assets/Marvel/IronMan.jpg', rating: '★★★★', category: 'Marvel', description: 'Iron Man adventures in comics and movies.' },
  { id: 53, title: 'Loki', author: 'Marvel Studios', price: 699, image: 'assets/Marvel/Loki.jpg', rating: '★★★★', category: 'Marvel', description: 'God of Mischief adventures in Marvel Universe.' },
  { id: 54, title: 'Spider-Man: Homecoming', author: 'Marvel Comics', price: 599, image: 'assets/Marvel/SpiderMan.jpg', rating: '★★★★★', category: 'Marvel', description: 'Peter Parker returns as Spider-Man in high school.' },
  { id: 55, title: 'Blade', author: 'Marvel Comics', price: 499, image: 'assets/Marvel/The Blade.jpg', rating: '★★★★', category: 'Marvel', description: 'The vampire hunter Blade and his dark adventures.' },
  { id: 56, title: 'Wolverine', author: 'Chris Claremont', price: 699, image: 'assets/Marvel/Wolverine.jpg', rating: '★★★★★', category: 'Marvel', description: 'Mutant superhero with regenerative powers.' },
  { id: 57, title: 'Driven – The Virat Kohli Story', author: 'Vijay Lokapally', price: 499, image: 'assets/Sports/Driven.jpg', rating: '★★★★☆', category: 'Sports', description: 'Biography of the cricket star Virat Kohli.' },
  { id: 58, title: 'Michael Jordan: The Life', author: 'Roland Lazenby', price: 599, image: 'assets/Sports/Michael Jordan.jpg', rating: '★★★★★', category: 'Sports', description: 'Biography of the basketball legend Michael Jordan.' },
  { id: 59, title: 'Sachin Tendulkar: Playing It My Way', author: 'Sachin Tendulkar', price: 699, image: 'assets/Sports/Sachine Tendulkar.jpg', rating: '★★★★★', category: 'Sports', description: 'Autobiography of the cricket legend Sachin Tendulkar.' },
  { id: 60, title: 'The Champion Mind', author: 'Jim Afremow', price: 499, image: 'assets/Sports/The Champion Mind.jpg', rating: '★★★★☆', category: 'Sports', description: 'Sports psychology and performance tips for athletes.' }
 ,{ id: 61, title: 'James Herbert: Collection', author: 'James Herbert', price: 350, image:"assets/Today's Deal/james herbert.jpg" , rating: '★★★★', category: "Today's Deal", description: 'Collection of James Herbert novels.' },
  { id: 62, title: 'Lord Easy Money', author: 'James Hadley Chase', price: 299, image: "assets/Today's Deal/Lords Easy MOney.jpg", rating: '★★★☆', category: "Today's Deal", description: 'Thrilling story by James Hadley Chase.' },
  { id: 63, title: 'Robin Cook: Pandemic', author: 'Robin Cook', price: 499, image: "assets/Today's Deal/Robin cook.jpg", rating: '★★★★', category: "Today's Deal", description: 'Medical thriller exploring global pandemics.' },
  { id: 64, title: 'The Handbook for Leaders', author: 'Max De Pree', price: 399, image: "assets/Today's Deal/the handbook for leaders.jpg", rating: '★★★★☆', category: "Today's Deal", description: 'Leadership lessons for professionals.' },
  { id: 65, title: 'The Maisky Diaries', author: 'Gabriel Gorodetsky', price: 599, image: "assets/Today's Deal/the maisky dairy.jpg", rating: '★★★★', category: "Today's Deal", description: 'Historical insights from Soviet ambassador diaries.' }
]



}
