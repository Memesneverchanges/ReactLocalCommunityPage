
export function Popup(props: { visible: boolean, width: string | number, height: string | number, children: React.ReactNode }) {
  return (
    <>
      <div className="overlay" style={{ visibility: props.visible ? 'visible' : 'hidden' }}>
        <div className="form" >
          {props.children}
        </div>
      </div>
    </>
  )
}