import Cell from "./Cell";

const Row = ({ use }) => {
    return (
        <tr>
            {Object.entries(use).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
}

export default Row