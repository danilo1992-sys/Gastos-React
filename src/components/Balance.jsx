import {useGlobalState} from '../context/GlobalState';

function Balance() {

    const data = useGlobalState()

    return (
    <div>
        <div >
            Balance
            <h1>
                {JSON.stringify(data)}
            </h1>
        </div>
    </div>
    )
}

export default Balance