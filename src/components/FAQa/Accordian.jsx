import { createContext, useContext, useEffect, useRef, useState } from "react";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="accordian bg-white mb-4 rounded-sm" {...props}>
      <header
        className="flex justify-between items-center p-4 font-medium px-6"
        role="button"
        onClick={() => setSelected(open ? null : value)}
      >
        {trigger}
        {open ? (
          <span className="text-4xl block font-bold">-</span>
        ) : (
          <span className="text-2xl block font-bold">+</span>
        )}
      </header>
      <div
        className="overflow-y-hidden transition-all px-6 duration-300"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-2 pb-4" ref={ref}>{children}</div>
      </div>
    </li>
  );
}
