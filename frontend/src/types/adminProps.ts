import { Author } from "./author";
import { Book } from "./book";
import { Category } from "./category";
import { Copy } from "./copy";
import { Loan } from "./loan";
import { Publisher } from "./publisher";
import { User } from "./user";

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

export interface EditAuthorFormProps {
  selectedAuthor: Author | null;
  clearSelected: () => void;
}

export interface EditCategoryFormProps {
  selectedCategory: Category | null;
  clearSelected: () => void;
}

export interface EditPublisherFormProps {
  selectedPublisher: Publisher | null;
  clearSelected: () => void;
}

export interface EditCopyFormProps {
  selectedCopy: Copy | null;
  selectedPublisher: Publisher | null;
  clearSelected: () => void;
}

export interface EditLoanFormProps {
  selectedLoan: Loan | null;
  clearSelected: () => void;
}

export interface EditUserFormProps {
  selectedUser: User | null;
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

export interface AdminCopiesTableProps {
  onCopySelection: (copy: Copy) => void;
  setShowCopies: (value: boolean) => void;
}

export interface AdminLoanTableProps {
  onLoanSelection: (loan: Loan) => void;
  setShowLoans: (value: boolean) => void;
}

export interface AdminUserTableProps {
  onUserSelection: (user: User) => void;
  setShowUsers: (value: boolean) => void;
}

