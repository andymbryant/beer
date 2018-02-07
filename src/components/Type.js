import React from 'react';

import Token from './Token';

class Type extends React.Component {
    render() {

        const { beerData } = this.props;
            return (
                <div>
                    <div>
                        {beerData.map((key, index) => {
                            return (
                                <div key={index} className='beer-type'>
                                    <h1>{key.name}</h1>
                                        <Token beers={key.beers} />
                                </div>
                            )
                        })}
                    </div>

                </div>

            )
        }
}

export default Type;
