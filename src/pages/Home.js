import css from './pages.module.css';

export default function Home() {
  return (
    <div className={css.home_container}>
      <h1 className={css.home_title}>Hello! I am your Phonebook!</h1>
    </div>
  );
}
