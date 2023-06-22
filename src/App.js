import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import { NavLink, Link, useRoutes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/books',
  //     children: [
  //       {
  //         index: true,
  //         element: <BookList />
  //       },
  //       {
  //         path: ':id',
  //         element: <Book />
  //       },
  //       {
  //         path: 'new',
  //         element: <NewBook />
  //       }
  //     ]
  //   }
  // ])
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
       <Route path="/" element={<Home />} />
        {/* <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
