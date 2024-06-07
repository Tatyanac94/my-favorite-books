import React from "react";

const Home = () => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-4xl font-bold text-blue-600 underline">
        Welcome to My Favorite Books
      </h1>

      <p className="mb-6 text-lg text-gray-700 text-center">
        My name is Tatyana, and I absolutely enjoy reading different genres. I guess you can say reading is one of my favorite hobbies. My favorite books are not listed in any particular order. Although I did group each list based on when I was a child, teenager, and now an adult.
      </p>

      {/* Favorite Children Books */}
      <div className="mb-6">
        <h3 className="mb-6 text-3xl font-bold text-blue-600 underline">My Favorite Children Books</h3>
        <ul className="mb-6  font-bold text-gray-600 list-disc">
          <li>Harry Potter (series) By: J.K. Rowling</li>
          <li>The Girl Who Owned a City By: O.T. Nelson</li>
          <li>The Last Book in the Universe By: Rodman Philbrick</li>
          <li>The Adventures of Huckleberry Finn By: Mark Twain</li>
          <li>A Series of Unfortunate Event (series) By: Lemony Snickett</li>
        </ul>
      </div>

      {/* Favorite Teen Books */}
      <div className="mb-6">
        <h3 className="mb-6 text-3xl font-bold text-blue-600 underline">My Favorite Teen Books</h3>
        <ul className="mb-6  font-bold text-gray-600 list-disc">
          <li>Drama High (series) By: L. Divine</li>
          <li>The Uglies (series) By: Scott Westerfield</li>
          <li>His Dark Materials (series) By: J.K. Rowling</li>
          <li>The Hunger Games By: Suzanne Collins (series)</li>
          <li>Chicken Noodle Soup for the Soul (series) By: Jack Cranfield</li>
        </ul>
      </div>

      {/* Favorite Adult Books */}
      <div className="mb-6">
        <h3 className="mb-6 text-3xl font-bold text-blue-600 underline">My Favorite Adult Books</h3>
        <ul className="mb-6  font-bold text-gray-600 list-disc">
          <li>1984 By: George Orwell</li>
          <li>The Giver By: Lois Lowry</li>
          <li>Alex Cross (series) By: James Patterson</li>
          <li>The Coldest Winter Ever By: Sister Souljah</li>
          <li>One Flew Over the Cuckoo{'\''}s Nest (series) By: Ken Kesey</li>
        </ul>
      </div>

    </div>
  </>
);

export default Home;
