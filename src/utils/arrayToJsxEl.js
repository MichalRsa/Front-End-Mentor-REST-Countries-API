export const arrayToJsxEl = (data, plural, singular) => {
  let _data = data;

  if (!Array.isArray(data)) {
    _data = Object.values(data);
  }

  if (_data.length !== 1) {
    return (
      <p>
        <span>{plural}: </span>
        {_data.map((el, i) => (
          <>
            {el.name ? el.name : el}
            {_data.length - 1 !== i && ','}{' '}
          </>
        ))}
      </p>
    );
  } else {
    return (
      <p>
        <span>{singular}: </span>
        {_data[0].name ? _data[0].name : _data[0]}
      </p>
    );
  }
};
