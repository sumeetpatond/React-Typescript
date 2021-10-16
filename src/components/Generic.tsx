type GenericProps<T> = {
  items: T[];
};
const Generic = function <T extends {}>({ items }: GenericProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Generic;
