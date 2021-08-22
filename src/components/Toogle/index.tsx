import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { RootState } from "../../store/module/rootReducer";
import { setDarkMode, setlightMode } from "../../store/module/themes/actions";
import { lightTheme } from "../../styles/global";
import { Switch } from "./styles";

export default function Toogle() {
  const dispatch = useDispatch();
  const { themeName } = useSelector((state: RootState) => state.themes);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if ( themeName === 'dark') {
      inputRef.current.checked = true;
    }
  }, [themeName])

  const handleClick = () => {
    if (!inputRef.current) return;
    console.log(inputRef.current.checked);
    

    if (inputRef.current.checked) {
        dispatch(setDarkMode());
    } else {
      dispatch(setlightMode());
    }
  };

  return (
    <Switch>
      <input type="checkbox" ref={inputRef} onClick={handleClick} />
      <span></span>
    </Switch>
  );
}
