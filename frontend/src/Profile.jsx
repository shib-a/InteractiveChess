import {Sidebar} from "primereact/sidebar";
import {useState} from "react";
const Profile = () => {
    const [visible, setVisible] = useState(false);
  return (
      <div>
            <Sidebar visible={visible}  position={"right"} onHide={() => setVisible(false)}/>
      </div>
  )
}
export {Profile};