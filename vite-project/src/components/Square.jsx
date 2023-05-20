import React from 'react'

const Square = ({value}) => {
    return <button>{value}</button>
}

const Board = () => {
    return (
        <main className=''>
            <section className=''>
                <Square value={1} />
                <Square value={2}/>
                <Square value={3}/>

            </section>
            <section>
                <Square value={4} />
                <Square value={5} />
                <Square value={6} />

            </section>
            <section>
                <Square value={7} />
                <Square value={8} />
                <Square value={9} />

            </section>
        </main>
    )
}

export default Board