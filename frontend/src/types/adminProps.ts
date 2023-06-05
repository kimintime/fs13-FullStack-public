import { Author } from "./author";
import { Book } from "./book";
import { Category } from "./category";
import { Publisher } from "./publisher";

export interface AdminProps {
  open: boolean;
  onClose: () => void;
}

export interface AddCopyFormProps {
  selectedBook: Book | null;
  selectedPublisher: Publisher | null;
  clearSelected: () => void;
}

export interface AddAuthorFormProps {
  selectedBook: Book | null;
  selectedAuthor: Author | null;
  clearSelected: () => void;
}

export interface AddCategoryFormProps {
  selectedBook: Book | null;
  selectedCategory: Category | null;
  clearSelected: () => void;
}

export interface EditBookFormProps {
  selectedBook: Book | null;
  clearSelected: () => void;
}

export interface AdminBookTableProps {
  onBookSelection: (book: Book) => void;
  setShowBooks: (value: boolean) => void;
}

export interface AdminPublisherTableProps {
  onPublisherSelection: (publisher: Publisher) => void;
  setShowPublishers: (value: boolean) => void;
}

export interface AdminAuthorTableProps {
  onAuthorSelection: (author: Author) => void;
  setShowAuthors: (value: boolean) => void;
}

export interface AdminCategoryTableProps {
  onCategorySelection: (category: Category) => void;
  setShowCategories: (value: boolean) => void;
}
