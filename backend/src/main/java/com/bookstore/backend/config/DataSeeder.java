package com.bookstore.backend.config;

import com.bookstore.backend.entity.Book;
import com.bookstore.backend.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(BookRepository repo) {
        return args -> {

            // Prevent duplicate insertion
            if (repo.count() > 0) {
                System.out.println("Books already exist in DB. Skipping seeding.");
                return;
            }

            
            // Award Winner

            repo.save(new Book("Percy Jackson and the Lightning Thief", "Rick Riordan", "Award winner", "assets/Award winner/9780141346809.jpg", "★★★★", "Percy discovers he is the son of a Greek god and embarks on a dangerous quest.", 450));
            repo.save(new Book("Guns, Germs, and Steel", "Jared Diamond", "Award winner", "assets/Award winner/Guns Germs and steel.jpg", "★★★★★", "A comprehensive analysis of how civilizations developed differently around the world.", 599));
            repo.save(new Book("The Gruffalo", "Julia Donaldson", "Award winner", "assets/Award winner/The gruffalo.jpg", "★★★★", "A clever mouse outsmarts predators with tales of the terrifying Gruffalo.", 399));


            // New Arrival

            repo.save(new Book("12 Year My Messed-up Love Story", "Chetan Bhagat", "New Arrival", "assets/New Arrival/12 Year my messed-up Love story.jpg", "★★★", "A humorous and relatable story about love, friendship, and life’s ups and downs.", 300));
            repo.save(new Book("Basti Darbar", "Rajat Sharma", "New Arrival", "assets/New Arrival/Basti and Darbar.jpg", "★★★★", "Insights into political and social issues in modern India.", 399));
            repo.save(new Book("Luna Octopus", "Elena Grant", "New Arrival", "assets/New Arrival/Luna octopus.jpg", "★★★☆", "An imaginative story exploring the wonders of the ocean.", 350));
            repo.save(new Book("Nightingale", "Kristin Hannah", "New Arrival", "assets/New Arrival/Nightingale.jpg", "★★★★★", "A story of courage and survival during World War II.", 499));
            repo.save(new Book("The Art of Spending Money", "James Clear", "New Arrival", "assets/New Arrival/The Art of Spending money.jpg", "★★★★", "Practical tips on smart financial habits and wealth building.", 799));
            repo.save(new Book("The Secret of Secrets", "Dan Brown", "New Arrival", "assets/New Arrival/The secret of secrets.jpg", "★★★★☆", "Philosophical reflections on life, love, and self-discovery.", 599));
            repo.save(new Book("Thomas Edison", "Edmund Morris", "New Arrival", "assets/New Arrival/thomas edition.jpg", "★★★★", "The life and inventions of one of the world’s greatest inventors.", 550));
            repo.save(new Book("Turtle Moon", "Alice Hoffman", "New Arrival", "assets/New Arrival/Turtle Moon.jpg", "★★★★☆", "A story about love, family secrets, and self-discovery.", 480));
            repo.save(new Book("Van Gogh", "Steven Naifeh", "New Arrival", "assets/New Arrival/Van gogh the complete painting.jpg", "★★★★★", "The complete story of Van Gogh’s life and masterpieces.", 699));


            // Bestseller

            repo.save(new Book("Atlas", "Lucinda Riley", "Bestseller", "assets/Best seller/Atlas.jpg", "★★★★★", "A gripping saga across generations and continents.", 599));
            repo.save(new Book("Ikigai", "Héctor García & Francesc Miralles", "Bestseller", "assets/Best seller/Ikigai.jpg", "★★★★★", "Discover the Japanese secret to a long and happy life.", 499));
            repo.save(new Book("Wise and Otherwise", "Sudha Murty", "Bestseller", "assets/Best seller/Sudha murty.jpg", "★★★★", "Short stories and reflections on life from real experiences.", 399));
            repo.save(new Book("The Alchemist", "Paulo Coelho", "Bestseller", "assets/Best seller/the Alchemist.jpg", "★★★★★", "A journey of following your dreams and listening to your heart.", 499));
            repo.save(new Book("The Art of Being Alone", "Renuka Narayanan", "Bestseller", "assets/Best seller/The art of being Alone.jpg", "★★★★☆", "Exploring self-awareness and personal growth.", 350));


            // Biography

            repo.save(new Book("A Brief History of Time", "Stephen Hawking", "Biography", "assets/Biography/A breif history of time.jpg", "★★★★★", "From the Big Bang to black holes, a cosmic journey.", 599));
            repo.save(new Book("Wings of Fire", "A.P.J. Abdul Kalam", "Biography", "assets/Biography/APJ Abdul Kalam JI.jpg", "★★★★★", "Autobiography of India’s visionary President.", 399));
            repo.save(new Book("The Autobiography of a Yogi", "Paramahansa Yogananda", "Biography", "assets/Biography/AutoBiography of a Yogi.jpg", "★★★★★", "A spiritual journey into yoga and meditation.", 499));
            repo.save(new Book("I Owe You One", "Sophie Kinsella", "Biography", "assets/Biography/IOU.jpg", "★★★☆", "A funny and emotional story of friendship and love.", 450));
            repo.save(new Book("Steve Jobs", "Walter Isaacson", "Biography", "assets/Biography/Steve Jobs.jpg", "★★★★★", "Biography of the legendary Apple co-founder.", 699));


            // Box Set

            repo.save(new Book("Percy Jackson Box Set", "Rick Riordan", "Box Set", "assets/Box-Set/Percy Jackson.jpg", "★★★★★", "Complete Percy Jackson series in one box.", 1899));
            repo.save(new Book("Shadow and Bone Box Set", "Leigh Bardugo", "Box Set", "assets/Box-Set/Shadow and Bone.jpg", "★★★★☆", "All Shadow and Bone novels collected together.", 1599));
            repo.save(new Book("Sherlock Holmes Complete Collection", "Arthur Conan Doyle", "Box Set", "assets/Box-Set/Sherlock Holmes.jpg", "★★★★★", "Classic detective stories from the master of mystery.", 1299));


            // Children

            repo.save(new Book("Ben 10: Alien Force", "Cartoon Network", "Children", "assets/Childre's Book/Ben 10 Alien Force.jpg", "★★★☆", "Ben 10 adventures in fighting aliens.", 299));
            repo.save(new Book("Ben 10", "Cartoon Network", "Children", "assets/Childre's Book/Ben 10.jpg", "★★★", "Classic Ben 10 series for kids.", 250));
            repo.save(new Book("Chainsaw Man", "Tatsuki Fujimoto", "Children", "assets/Childre's Book/Chain saw man.jpg", "★★★★", "A dark action manga full of suspense and thrill.", 450));
            repo.save(new Book("Demon Slayer: Kimetsu no Yaiba", "Koyoharu Gotouge", "Children", "assets/Childre's Book/Demon slayer kimetsu no Yaiba.jpg", "★★★★★", "The story of Tanjiro fighting demons to save his sister.", 499));
            repo.save(new Book("Crayon Shinchan", "Yoshito Usui", "Children", "assets/Childre's Book/the Crayon Shinchan.jpg", "★★★★", "Funny adventures of Shinchan and friends.", 299));
            repo.save(new Book("The Man Who Drank the Moon", "Kelly Barnhill", "Children", "assets/Childre's Book/The man Who drank the moon.jpg", "★★★★☆", "A magical story about a young girl raised by a witch.", 499));


            // Comedy

            repo.save(new Book("Comedy in Khaki", "Vivek Desai", "Comedy", "assets/Comedy/Comedy in Khakhi.jpg", "★★★☆", "Funny stories set in a military backdrop.", 350));
            repo.save(new Book("The Divine Comedy", "Dante Alighieri", "Comedy", "assets/Comedy/The Divine Comedy.jpg", "★★★★★", "Epic journey through Hell, Purgatory, and Heaven.", 599));
            repo.save(new Book("The Temporary Roomie", "Sarah Adams", "Comedy", "assets/Comedy/The Temporary Roomie.jpg", "★★★★", "Romantic comedy with twists and turns.", 399));

            // ============================
            // Fiction
            // ============================
            repo.save(new Book("All the Ever Afters", "Danielle Teller", "Fiction", "assets/Fiction Book/All the ever afters.jpg", "★★★★", "A fascinating novel blending reality and fantasy.", 450));
            repo.save(new Book("Brahmin Ki Beti", "Munshi Premchand", "Fiction", "assets/Fiction Book/Bramhin ki beti.jpg", "★★★★", "Classic Indian fiction exploring social themes.", 299));
            repo.save(new Book("Godan", "Munshi Premchand", "Fiction", "assets/Fiction Book/Godan.jpg", "★★★★★", "A timeless story of rural India and its struggles.", 399));
            repo.save(new Book("Mansarovar", "Munshi Premchand", "Fiction", "assets/Fiction Book/Mansarovar.jpg", "★★★★☆", "Collection of short stories by Premchand.", 350));
            repo.save(new Book("Raavan", "Amish Tripathi", "Fiction", "assets/Fiction Book/Raavan.jpg", "★★★★★", "A retelling of Raavan’s life and the choices he made.", 499));
            repo.save(new Book("The Oath of the Vayuputras", "Amish Tripathi", "Fiction", "assets/Fiction Book/The oat of VayuPutras.jpg", "★★★★★", "Epic conclusion of the Shiva Trilogy.", 499));
            repo.save(new Book("The Time Machine", "H.G. Wells", "Fiction", "assets/Fiction Book/The Time Machine.jpg", "★★★★★", "Classic sci-fi about time travel and its consequences.", 399));
            repo.save(new Book("Three Men in a Boat", "Jerome K. Jerome", "Fiction", "assets/Fiction Book/Three men in a boat.jpg", "★★★★☆", "Humorous tale of a boating holiday on the Thames.", 350));


            // Horror

            repo.save(new Book("Enter at Your Own Risk", "R.L. Stine", "Horror", "assets/Horror/Enter at your Own Risk.jpg", "★★★☆", "Scary adventures perfect for young readers.", 350));
            repo.save(new Book("Famous Five: Mystery of the Ghost Hill", "Enid Blyton", "Horror", "assets/Horror/Famous Fives.jpg", "★★★★", "Classic mystery from the Famous Five series.", 399));
            repo.save(new Book("Ghost of the Silent Hill", "James Herbert", "Horror", "assets/Horror/Ghost of the Silent Hills.jpg", "★★★★☆", "A chilling horror story that will keep you up at night.", 450));
            repo.save(new Book("Marghat", "Neelesh Misra", "Horror", "assets/Horror/Marghat.jpg", "★★★★", "Frightening tales based on folklore and imagination.", 399));
            repo.save(new Book("Secret Seven: The Haunted Hill", "Enid Blyton", "Horror", "assets/Horror/Secret Seven.jpg", "★★★★", "Young detectives solve spooky mysteries.", 350));
            repo.save(new Book("The Cursed", "A. G. Riddle", "Horror", "assets/Horror/The Cursed.jpg", "★★★☆", "A gripping tale of ancient curses and suspense.", 499));
            repo.save(new Book("The Wind on the Haunted Hill", "Ruskin Bond", "Horror", "assets/Horror/The wind on the Haunted hill.jpg", "★★★★", "Short horror stories for young adults.", 299));


            // Marvel

            repo.save(new Book("Avengers: The Ultimate Guide", "DK", "Marvel", "assets/Marvel/Avengers.jpg", "★★★★★", "Comprehensive guide to the Avengers superheroes.", 799));
            repo.save(new Book("Daredevil", "Stan Lee", "Marvel", "assets/Marvel/DareDevil.jpg", "★★★★★", "Story of the blind superhero vigilante.", 699));
            repo.save(new Book("Iron Man", "Ted Hughes", "Marvel", "assets/Marvel/IronMan.jpg", "★★★★", "Iron Man adventures in comics and movies.", 699));
            repo.save(new Book("Loki", "Marvel Studios", "Marvel", "assets/Marvel/Loki.jpg", "★★★★", "God of Mischief adventures in Marvel Universe.", 699));
            repo.save(new Book("Spider-Man: Homecoming", "Marvel Comics", "Marvel", "assets/Marvel/SpiderMan.jpg", "★★★★★", "Peter Parker returns as Spider-Man in high school.", 599));
            repo.save(new Book("Blade", "Marvel Comics", "Marvel", "assets/Marvel/The Blade.jpg", "★★★★", "The vampire hunter Blade and his dark adventures.", 499));
            repo.save(new Book("Wolverine", "Chris Claremont", "Marvel", "assets/Marvel/Wolverine.jpg", "★★★★★", "Mutant superhero with regenerative powers.", 699));


            // Today's Deal
            repo.save(new Book("James Herbert: Collection", "James Herbert", "Today's Deal", "assets/Today's Deal/james herbert.jpg", "★★★★", "Collection of James Herbert novels.", 350));
            repo.save(new Book("Lord Easy Money", "James Hadley Chase", "Today's Deal", "assets/Today's Deal/Lords Easy MOney.jpg", "★★★☆", "Thrilling story by James Hadley Chase.", 299));
            repo.save(new Book("Robin Cook: Pandemic", "Robin Cook", "Today's Deal", "assets/Today's Deal/Robin cook.jpg", "★★★★", "Medical thriller exploring global pandemics.", 499));
            repo.save(new Book("The Handbook for Leaders", "Max De Pree", "Today's Deal", "assets/Today's Deal/the handbook for leaders.jpg", "★★★★☆", "Leadership lessons for professionals.", 399));
            repo.save(new Book("The Maisky Diaries", "Gabriel Gorodetsky", "Today's Deal", "assets/Today's Deal/the maisky dairy.jpg", "★★★★", "Historical insights from Soviet ambassador diaries.", 599));

            System.out.println("📚 All 65 Books Inserted Successfully!");
        };
    }
}
