import React from 'react';

class Token extends React.Component {
    render() {
        const { beers } = this.props;
        return (
        <div>
            <ul>
                {/* {
                    beers.map(beerName => {
                    return <li className="beer-token">{beerName}</li>
                })
                } */}
                {console.log(beers)}
                {beers.map((key, index) => {
                    return (
                            <li key={key} className="beer-token">{key}</li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

export default Token;
