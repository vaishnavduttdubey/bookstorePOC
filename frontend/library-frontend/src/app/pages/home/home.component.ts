import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  books = [


      //Award winner
  //    {title: 'Percy Jackson and the Lightning Thief', author: 'Rick Riordan', price: 450, image: 'assets/Award winner/9780141346809.jpg', rating: '★★★★', category: 'Award winner' },
  // { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', price: 599, image: 'assets/Award winner/Guns Germs and steel.jpg', rating: '★★★★★', category: 'Award winner' },
  // { title: 'The Gruffalo', author: 'Julia Donaldson', price: 399, image: 'assets/Award winner/The gruffalo.jpg', rating: '★★★★', category: 'Award winner' },


  // //  NEW ARRIVALS

  // { title: '12 Year My Messed-up Love Story', author: 'Chetan Bhagat', price: 300, image: 'assets/New Arrival/12 Year my messed-up Love story.jpg', rating: '★★★', category: 'New Arrival' },
  // { title: 'Basti Darbar', author: 'Rajat Sharma', price: 399, image: 'assets/New Arrival/Basti and Darbar.jpg', rating: '★★★★', category: 'New Arrival' },
  // { title: 'Luna Octopus', author: 'Elena Grant', price: 350, image: 'assets/New Arrival/Luna octopus.jpg', rating: '★★★☆', category: 'New Arrival' },
  // { title: 'Nightangle', author: 'Kristin Hannah', price: 499, image: 'assets/New Arrival/Nightingale.jpg', rating: '★★★★★', category: 'New Arrival' },
  // { title: 'The Art of Spending Money', author: 'James Clear', price: 799, image: 'assets/New Arrival/The Art of Spending money.jpg', rating: '★★★★', category: 'New Arrival' },
  // { title: 'The Secret of Secrets', author: 'Osho', price: 599, image: 'assets/New Arrival/The secret of secrets.jpg', rating: '★★★★☆', category: 'New Arrival' },
  // { title: 'Thomas Edison', author: 'Edmund Morris', price: 550, image: 'assets/New Arrival/thomas edition.jpg', rating: '★★★★', category: 'New Arrival' },
  // { title: 'Turtle Moon', author: 'Alice Hoffman', price: 480, image: 'assets/New Arrival/Turtle Moon.jpg', rating: '★★★★☆', category: 'New Arrival' },
  // { title: 'Van Gogh', author: 'Steven Naifeh', price: 699, image: 'frontend/library-frontend/src/assets/New Arrival/Van gogh the complete painting.jpg', rating: '★★★★★', category: 'New Arrival' },

  // //  BESTSELLERS
  // { title: 'Atlas', author: 'Lucinda Riley', price: 599, image: 'assets/Best seller/Atlas.jpg', rating: '★★★★★', category: 'Bestseller' },
  // { title: 'Ikigai', author: 'Héctor García & Francesc Miralles', price: 499, image: 'assets/Best seller/Ikigai.jpg', rating: '★★★★★', category: 'Bestseller' },
  // { title: 'Wise and Otherwise', author: 'Sudha Murty', price: 399, image: 'assets/Best seller/Sudha murty.jpg', rating: '★★★★', category: 'Bestseller' },
  // { title: 'The Alchemist', author: 'Paulo Coelho', price: 499, image: 'assets/Best seller/the Alchemist.jpg', rating: '★★★★★', category: 'Bestseller' },
  // { title: 'The Art of Being Alone', author: 'Renuka Narayanan', price: 350, image: 'assets/Best seller/The art of being Alone.jpg', rating: '★★★★☆', category: 'Bestseller' },

  // //  BIOGRAPHY
  // { title: 'A Brief History of Time', author: 'Stephen Hawking', price: 599, image: 'assets/Biography/A breif history of time.jpg', rating: '★★★★★', category: 'Biography' },
  // { title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 399, image: 'assets/Biography/APJ Abdul Kalam JI.jpg', rating: '★★★★★', category: 'Biography' },
  // { title: 'The Autobiography of a Yogi', author: 'Paramahansa Yogananda', price: 499, image: 'assets/Biography/AutoBiography of a Yogi.jpg', rating: '★★★★★', category: 'Biography' },
  // { title: 'I Owe You One', author: 'Sophie Kinsella', price: 450, image: 'assets/Biography/IOU.jpg', rating: '★★★☆', category: 'Biography' },
  // { title: 'Steve Jobs', author: 'Walter Isaacson', price: 699, image: 'assets/Biography/Steve Jobs.jpg', rating: '★★★★★', category: 'Biography' },

  // //  BOX SET
  // { title: 'Percy Jackson Box Set', author: 'Rick Riordan', price: 1899, image: 'assets/Box-Set/Percy Jackson.jpg', rating: '★★★★★', category: 'Box Set' },
  // { title: 'Shadow and Bone Box Set', author: 'Leigh Bardugo', price: 1599, image: 'assets/Box-Set/Shadow and Bone.jpg', rating: '★★★★☆', category: 'Box Set' },
  // { title: 'Sherlock Holmes Complete Collection', author: 'Arthur Conan Doyle', price: 1299, image: 'assets/Box-Set/Sherlock Holmes.jpg', rating: '★★★★★', category: 'Box Set' },

  // //  CHILDREN’S BOOKS
  // { title: 'Ben 10: Alien Force', author: 'Cartoon Network', price: 299, image: "assets/Childre's Book/Ben 10 Alien Force.jpg", rating: '★★★☆', category: 'Children' },
  // { title: 'Ben 10', author: 'Cartoon Network', price: 250, image: "assets/Childre's Book/Ben 10.jpg", rating: '★★★', category: 'Children' },
  // { title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', price: 450, image: "assets/Childre's Book/Chain saw man.jpg", rating: '★★★★', category: 'Children' },
  // { title: 'Demon Slayer: Kimetsu no Yaiba', author: 'Koyoharu Gotouge', price: 499, image: "assets/Childre's Book/Demon slayer kimetsu no Yaiba.jpg", rating: '★★★★★', category: 'Children' },
  // { title: 'Crayon Shinchan', author: 'Yoshito Usui', price: 299, image: "assets/Childre's Book/the Crayon Shinchan.jpg", rating: '★★★★', category: 'Children' },
  // { title: 'The Man Who Drank the Moon', author: 'Kelly Barnhill', price: 499, image: "assets/Childre's Book/The man Who drank the moon.jpg", rating: '★★★★☆', category: 'Children' },

  // //  COMEDY
  // { title: 'Comedy in Khaki', author: 'Vivek Desai', price: 350, image: 'assets/Comedy/Comedy in Khakhi.jpg', rating: '★★★☆', category: 'Comedy' },
  // { title: 'The Divine Comedy', author: 'Dante Alighieri', price: 599, image: 'assets/Comedy/The Divine Comedy.jpg', rating: '★★★★★', category: 'Comedy' },
  // { title: 'The Temporary Roomie', author: 'Sarah Adams', price: 399, image: 'assets/Comedy/The Temporary Roomie.jpg', rating: '★★★★', category: 'Comedy' },

  // //  FICTION
  // { title: 'All the Ever Afters', author: 'Danielle Teller', price: 450, image: 'assets/Fiction Book/All the ever afters.jpg', rating: '★★★★', category: 'Fiction' },
  // { title: 'Brahmin Ki Beti', author: 'Munshi Premchand', price: 299, image: 'assets/Fiction Book/Bramhin ki beti.jpg', rating: '★★★★', category: 'Fiction' },
  // { title: 'Godan', author: 'Munshi Premchand', price: 399, image: 'assets/Fiction Book/Godan.jpg', rating: '★★★★★', category: 'Fiction' },
  // { title: 'Mansarovar', author: 'Munshi Premchand', price: 350, image: 'assets/Fiction Book/Mansarovar.jpg', rating: '★★★★☆', category: 'Fiction' },
  // { title: 'Raavan', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/Raavan.jpg', rating: '★★★★★', category: 'Fiction' },
  // { title: 'The Oath of the Vayuputras', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/The oat of VayuPutras.jpg', rating: '★★★★★', category: 'Fiction' },
  // { title: 'The Time Machine', author: 'H.G. Wells', price: 399, image: 'assets/Fiction Book/The Time Machine.jpg', rating: '★★★★★', category: 'Fiction' },
  // { title: 'Three Men in a Boat', author: 'Jerome K. Jerome', price: 350, image: 'assets/Fiction Book/Three men in a boat.jpg', rating: '★★★★☆', category: 'Fiction' },

  // //  HORROR
  // { title: 'Enter at Your Own Risk', author: 'R.L. Stine', price: 350, image: 'assets/Horror/Enter at your Own Risk.jpg', rating: '★★★☆', category: 'Horror' },
  // { title: 'Famous Five: Mystery of the Ghost Hill', author: 'Enid Blyton', price: 399, image: 'assets/Horror/Famous Fives.jpg', rating: '★★★★', category: 'Horror' },
  // { title: 'Ghost of the Silent Hill', author: 'James Herbert', price: 450, image: 'assets/Horror/Ghost of the Silent Hills.jpg', rating: '★★★★☆', category: 'Horror' },
  // { title: 'Marghat', author: 'Neelesh Misra', price: 399, image: 'assets/Horror/Marghat.jpg', rating: '★★★★', category: 'Horror' },
  // { title: 'Secret Seven: The Haunted Hill', author: 'Enid Blyton', price: 350, image: 'assets/Horror/Secret Seven.jpg', rating: '★★★★', category: 'Horror' },
  // { title: 'The Cursed', author: 'A. G. Riddle', price: 499, image: 'assets/Horror/The Cursed.jpg', rating: '★★★☆', category: 'Horror' },
  // { title: 'The Wind on the Haunted Hill', author: 'Ruskin Bond', price: 299, image: 'assets/Horror/The wind on the Haunted hill.jpg', rating: '★★★★', category: 'Horror' },

  // //  MARVEL
  // { title: 'Avengers: The Ultimate Guide', author: 'DK', price: 799, image: 'assets/Marvel/Avengers.jpg', rating: '★★★★★', category: 'Marvel' },
  // { title: 'Daredevil', author: 'Stan Lee', price: 699, image: 'assets/Marvel/DareDevil.jpg', rating: '★★★★★', category: 'Marvel' },
  // { title: 'Iron Man', author: 'Ted Hughes', price: 699, image: 'assets/Marvel/IronMan.jpg', rating: '★★★★', category: 'Marvel' },
  // { title: 'Loki', author: 'Marvel Studios', price: 699, image: 'assets/Marvel/Loki.jpg', rating: '★★★★', category: 'Marvel' },
  // { title: 'Spider-Man: Homecoming', author: 'Marvel Comics', price: 599, image: 'assets/Marvel/SpiderMan.jpg', rating: '★★★★★', category: 'Marvel' },
  // { title: 'Blade', author: 'Marvel Comics', price: 499, image: 'assets/Marvel/The Blade.jpg', rating: '★★★★', category: 'Marvel' },
  // { title: 'Wolverine', author: 'Chris Claremont', price: 699, image: 'assets/Marvel/Wolverine.jpg', rating: '★★★★★', category: 'Marvel' },

  // //  SPORTS
  // { title: 'Driven – The Virat Kohli Story', author: 'Vijay Lokapally', price: 499, image: 'assets/Sports/Driven.jpg', rating: '★★★★☆', category: 'Sports' },
  // { title: 'Michael Jordan: The Life', author: 'Roland Lazenby', price: 599, image: 'assets/Sports/Michael Jordan.jpg', rating: '★★★★★', category: 'Sports' },
  // { title: 'Sachin Tendulkar: Playing It My Way', author: 'Sachin Tendulkar', price: 699, image: 'assets/Sports/Sachine Tendulkar.jpg', rating: '★★★★★', category: 'Sports' },
  // { title: 'The Champion Mind', author: 'Jim Afremow', price: 499, image: 'assets/Sports/The Champion Mind.jpg', rating: '★★★★☆', category: 'Sports' },

  // //  TODAY’S DEALS
  // { title: 'James Herbert: Collection', author: 'James Herbert', price: 350, image: "assets/Today's Deal/james herbert.jpg", rating: '★★★★', category: 'Today Deal' },
  // { title: 'Lord Easy Money', author: 'James Hadley Chase', price: 299, image: "assets/Today's Deal/Lords Easy MOney.jpg", rating: '★★★☆', category: 'Today Deal' },
  // { title: 'Robin Cook: Pandemic', author: 'Robin Cook', price: 499, image: "assets/Today's Deal/Robin cook.jpg", rating: '★★★★', category: 'Today Deal' },
  // { title: 'The Handbook for Leaders', author: 'Max De Pree', price: 399, image: "assets/Today's Deal/the handbook for leaders.jpg", rating: '★★★★☆', category: 'Today Deal' },
  // { title: 'The Maisky Diaries', author: 'Gabriel Gorodetsky', price: 599, image: "assets/Today's Deal/the maisky dairy.jpg", rating: '★★★★', category: 'Today Deal' }

  { title: '12 Years My Messed-up Love Story', author: 'Chetan Bhagat', price: 300, image: 'assets/New Arrival/12 Year my messed-up Love story.jpg', rating: '★★★★', category: 'New Arrival' },
    { title: 'The Art of Spending Money', author: 'James Clear', price: 799, image: 'assets/New Arrival/The Art of Spending money.jpg', rating: '★★★★★', category: 'New Arrival' },

    { title: 'Demon Slayer: Kimetsu no Yaiba', author: 'Koyoharu Gotouge', price: 550, image: "assets/Childre's Book/Demon slayer kimetsu no Yaiba.jpg", rating: '★★★★', category: 'Childrens Book' },
    { title: 'Ben 10 Alien Force', author: 'Cartoon Network', price: 299, image: "assets/Childre's Book/Ben 10 Alien Force.jpg", rating: '★★★☆', category: 'Childrens Book' },

    { title: 'Iron Man', author: 'Ted Hughes', price: 599, image: 'assets/Marvel/IronMan.jpg', rating: '★★★★★', category: 'Marvel' },
    { title: 'Loki', author: 'Marvel Comics', price: 499, image: 'assets/Marvel/Loki.jpg', rating: '★★★★☆', category: 'Marvel' },

    { title: 'Driven – The Virat Kohli Story', author: 'Vijay Lokapally', price: 499, image: 'assets/Sports/Driven.jpg', rating: '★★★★☆', category: 'Sports' },
    { title: 'Sachin Tendulkar: Playing It My Way', author: 'Sachin Tendulkar', price: 699, image: 'assets/Sports/Sachine Tendulkar.jpg', rating: '★★★★★', category: 'Sports' }


  ];

  // Pick top 2 books from each category
topBooks = (() => {
  const categoryMap: { [key: string]: any[] } = {}; // an empty object to store categories


  for (const book of this.books) {
    // if this category doesn't exist yet, create an empty array for it
    if (!categoryMap[book.category]) {
      categoryMap[book.category] = [];
    }

    // add book only if that category has less than 2 books so far
    if (categoryMap[book.category].length < 2) {
      categoryMap[book.category].push(book);
    }
  }

  // now take all arrays from the categoryMap and make one single array
  return Object.values(categoryMap).flat();
})();


  slideLeft() {
    this.slider.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  slideRight() {
    this.slider.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }




// this is section book-row
bookrow=[
  { title: 'Mansarovar', author: 'Munshi Premchand', price: 350, image: 'assets/Fiction Book/Mansarovar.jpg', rating: '★★★★☆', category: 'Fiction' },
  { title: 'Raavan', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/Raavan.jpg', rating: '★★★★★', category: 'Fiction' },
  { title: 'The Oath of the Vayuputras', author: 'Amish Tripathi', price: 499, image: 'assets/Fiction Book/The oat of VayuPutras.jpg', rating: '★★★★★', category: 'Fiction' },
  { title: 'The Time Machine', author: 'H.G. Wells', price: 399, image: 'assets/Fiction Book/The Time Machine.jpg', rating: '★★★★★', category: 'Fiction' },


  //  MARVEL
  { title: 'Avengers: The Ultimate Guide', author: 'DK', price: 799, image: 'assets/Marvel/Avengers.jpg', rating: '★★★★★', category: 'Marvel' },
  { title: 'Daredevil', author: 'Stan Lee', price: 699, image: 'assets/Marvel/DareDevil.jpg', rating: '★★★★★', category: 'Marvel' },
  { title: 'Iron Man', author: 'Ted Hughes', price: 699, image: 'assets/Marvel/IronMan.jpg', rating: '★★★★', category: 'Marvel' },
  { title: 'Loki', author: 'Marvel Studios', price: 699, image: 'assets/Marvel/Loki.jpg', rating: '★★★★', category: 'Marvel' },
  { title: 'Spider-Man: Homecoming', author: 'Marvel Comics', price: 599, image: 'assets/Marvel/SpiderMan.jpg', rating: '★★★★★', category: 'Marvel' },
  { title: 'Blade', author: 'Marvel Comics', price: 499, image: 'assets/Marvel/The Blade.jpg', rating: '★★★★', category: 'Marvel' },
  { title: 'Wolverine', author: 'Chris Claremont', price: 699, image: 'assets/Marvel/Wolverine.jpg', rating: '★★★★★', category: 'Marvel' },

  //  SPORTS
  { title: 'Driven – The Virat Kohli Story', author: 'Vijay Lokapally', price: 499, image: 'assets/Sports/Driven.jpg', rating: '★★★★☆', category: 'Sports' },


]


bookNewArrival =[
  { title: '12 Year My Messed-up Love Story', author: 'Chetan Bhagat', price: 300, image: 'assets/New Arrival/12 Year my messed-up Love story.jpg', rating: '★★★', category: 'New Arrival' },
  { title: 'Basti Darbar', author: 'Rajat Sharma', price: 399, image: 'assets/New Arrival/Basti and Darbar.jpg', rating: '★★★★', category: 'New Arrival' },
  { title: 'Luna Octopus', author: 'Elena Grant', price: 350, image: 'assets/New Arrival/Luna octopus.jpg', rating: '★★★☆', category: 'New Arrival' },
  { title: 'Nightangle', author: 'Kristin Hannah', price: 499, image: 'assets/New Arrival/Nightingale.jpg', rating: '★★★★★', category: 'New Arrival' },
  { title: 'The Art of Spending Money', author: 'James Clear', price: 799, image: 'assets/New Arrival/The Art of Spending money.jpg', rating: '★★★★', category: 'New Arrival' },
  { title: 'The Secret of Secrets', author: 'Osho', price: 599, image: 'assets/New Arrival/The secret of secrets.jpg', rating: '★★★★☆', category: 'New Arrival' },
  { title: 'Thomas Edison', author: 'Edmund Morris', price: 550, image: 'assets/New Arrival/thomas edition.jpg', rating: '★★★★', category: 'New Arrival' },
  { title: 'Turtle Moon', author: 'Alice Hoffman', price: 480, image: 'assets/New Arrival/Turtle Moon.jpg', rating: '★★★★☆', category: 'New Arrival' }
]
}
