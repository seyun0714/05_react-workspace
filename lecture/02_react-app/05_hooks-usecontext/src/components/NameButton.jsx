function NameButton({ setSelected, names }) {
  console.log(names);
  return (
    <>
      {names.map((name, idx) => {
        return (
          <button key={idx} onClick={() => setSelected(name)}>
            {name}
          </button>
        );
      })}
    </>
  );
}

export default NameButton;
