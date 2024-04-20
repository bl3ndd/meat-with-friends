import './App.css'

function App() {
    const friends = [
        { name: 'Kolyan', daysBusy: ['mon', 'tue'] },
        { name: 'Volodya', daysBusy: ['mon', 'tue'] },
        { name: 'Zheka', daysBusy: ['mon', 'tue'] },
        { name: 'Seryoga', daysBusy: ['mon', 'tue'] },
    ]
    return (
        <>
            <div className="body">
                <h1>Friends</h1>
                <div className="friends">
                    { friends.map((friend) => {
                        return <div className="friendCard">
                            { friend.name }:
                            { friend.daysBusy.map((day) => <div>{ day }</div>) }
                        </div>
                    }) }
                </div>
            </div>
        </>
    )
}

export default App
