import Book from "../model/book.model.js"; // Ensure the correct path and file extension

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // Change variable name to 'books' for clarity
    res.status(200).json(books);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Error fetching books", error }); // Provide a more descriptive error response
  }
}
