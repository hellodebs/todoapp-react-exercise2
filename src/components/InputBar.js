export default function InputBar({ onSubmit, name }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="todo" placeholder="My todo..." />
      <button className="button">{name}</button>
    </form>
  );
}
