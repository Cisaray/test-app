import {ListComponent} from "./components/ListComponent.tsx";
import {useData} from "./hooks/useData.ts";


function App() {
    const {data, addChild, removeChild} = useData()

    return <ListComponent data={data} addChild={addChild} removeChild={removeChild}/>
}

export default App
