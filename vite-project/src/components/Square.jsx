import React from 'react'

const Square = () => {
    return (
        <main className=''>
            <section className=''>
                <button>1</button>
                <button>2</button>
                <button className='square'>3</button>

            </section>
            <section>
                <button className='square'>4</button>
                <button className='square'>5</button>
                <button className='square'>6</button>

            </section>
            <section>
                <button className='square'>7</button>
                <button className='square'>8</button>
                <button className='square'>9</button>

            </section>
        </main>
    )
}

export default Square