import { IAppState, TActionsAppState } from "../../Reducers/appReducer";

export function Menu(props: { appState: IAppState, appDispatch: React.Dispatch<TActionsAppState> }) {
    // const [tempTimeStamp, setTempTimeStamp] = useState(setTimeout(() => { }, 0))
    // const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //   if (tempTimeStamp)
    //     clearTimeout(tempTimeStamp);
    //   if ((e.target.value.length > 1)) {
    //     const timeBeforeReq = setTimeout(() => {
    //       setTextValue(e.target.value)
    //       console.log('called')
    //     }, 650)
    //     setTempTimeStamp(timeBeforeReq)
    //   }

    // }, [tempTimeStamp])
    return (
        <>
            <div className="Menu">
                <div className="MenuLeftBar">
                    <div className="MenuHeader">
                        Gay website
                    </div>
                    <div className="MenuSelection" onClick={() => props.appDispatch({ type: "ShowRegisterWindow" })}>
                        Register
                    </div>
                </div>
                <div className="MenuRightBar">
                    <div className="MenuRightBarItem">
                        <div className="MenuLabel">
                            Search on Site
                        </div>
                        <input type="text" placeholder={'Рудимент для проверки блоков'} style={{ width: 200 }} />
                    </div>
                </div>
            </div>
        </>
    )
}