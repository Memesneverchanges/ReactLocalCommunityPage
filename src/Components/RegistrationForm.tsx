import { TActionsAppState } from "../Reducers/appReducer"
import { Popup } from "./Common/Popup"

export function RegistrationForm(props: { visible: boolean ,appDispatch: React.Dispatch<TActionsAppState>}) {

    return (
        <>
            <Popup visible={props.visible} height={'auto'} width={600}>
                <h1>Fill your Master</h1>
                <div className="formally">
                    <div className="formname">
                        <div className="input">
                            <h3>Firstname</h3>
                            <input type="text" />
                        </div>
                        <div className="input">
                            <h3>Lastname</h3>
                            <input type="text" />
                        </div>
                    </div>
                    <h3>Slave ♂</h3>
                    <select name="select" defaultValue={"value2"}>
                        <option value="value1">Billy</option>
                        <option value="value2">Van</option>
                        <option value="value3">Ricardo</option>
                    </select>
                    <h3>About</h3>
                    <textarea className=""></textarea>
                    <div className="FormButtons">
                        <button className="gotodungeon" onClick={()=>props.appDispatch({type:"HideRegisterWindow"})}>Go to Dungeon</button>
                        <button className="OhSHitIamSorry" onClick={()=>props.appDispatch({type:"HideRegisterWindow"})}>Oh shit, I'm sorry</button>
                    </div>
                </div>
            </Popup>
        </>
    )
}