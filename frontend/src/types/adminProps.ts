import { Book } from "./book";
import { Publisher } from "./publisher";

export interface AdminProps {
  open: boolean;
  onClose: () => void;
}

export interface AddCopyFormProps {
  selectedBook: Book | null;
  selectedPublisher: Publisher | null;
}

export interface AdminBookTableProps {
  onBookSelection: (book: Book) => void;
  setShowBooks: (value: boolean) => void;
}

export interface AdminPublisherTableProps {
  onPublisherSelection: (publisher: Publisher) => void;
  setShowPublishers: (value: boolean) => void;
}

