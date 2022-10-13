// code from: https://stackoverflow.com/a/68928267
import React, { useEffect, useRef, useState } from 'react';

const ControlledInput = (props) => {
   const { value, onChange, ...rest } = props;
   const [cursor, setCursor] = useState(null);
   const ref = useRef(null);

   useEffect(() => {
      const input = ref.current;
      if (input) input.setSelectionRange(cursor, cursor);
   }, [ref, cursor, value]);

   const handleChange = (e) => {
      setCursor(e.target.selectionStart);
      onChange && onChange(e.target.value);
   };

   return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
};

export default ControlledInput;