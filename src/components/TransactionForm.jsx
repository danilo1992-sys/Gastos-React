

function TransactionForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Ingrese una descripcion"/>
                <input type="number" 
                step="0.01" 
                placeholder="00.00"/>

            </form>
        </div>
    )
}

export default TransactionForm