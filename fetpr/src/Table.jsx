import Row from './Row';

const Table = ({ user }) => {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    {user.map(use => (
                        <Row key={use.id} use={use} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table