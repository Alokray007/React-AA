import React, { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TransitionItem({result, ...props}) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} {...props}>
      <li ref={nodeRef} className="nameLi" onClick={props.onClick}>
          {result}
        </li>
    </CSSTransition>
  )

}

export default function Autocomplete({ names }) {
  const [inputVal, setInputVal] = useState("");
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      if (document.activeElement === inputRef.current) return;
      else setShowList(false);
    };

    if (showList) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      console.log("Removing Autocomplete listener on update!");
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showList]);

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const selectName = (e) => {
    e.stopPropagation();
    setInputVal(e.target.innerHTML);
    setShowList(false);
  };

  const matches = () => {
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach((name) => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push("No matches");

    return matches;
  };

  const results = matches().map((result) => {
    return (
      <TransitionItem
        key={result}
        classNames="result"
        timeout={{ enter: 500, exit: 300 }}
        onClick={selectName}
        result={result}
      />
    );
  });

  return (
    <section className="autocomplete-section">
      <h1>Autocomplete</h1>
      <div className="auto">
        <input
          placeholder="Search..."
          ref={inputRef}
          onChange={handleInput}
          value={inputVal}
          onFocus={() => setShowList(true)}
        />
        {showList && (
          <ul className="auto-dropdown">
            <TransitionGroup>{results}</TransitionGroup>
          </ul>
        )}
      </div>
    </section>
  );
}
