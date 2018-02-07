import React from 'react';

import Type from './Type';

import lagers from '../lagers';
import ales from '../ales';

class App extends React.Component {
    constructor() {
        super();

    }

    render() {

    return (
        <div className="beer">
            <div className="beer-view">
                <div>
                    <div className='lager-view'>
                        <Type beerData={lagers}/>
                    </div>

                    <div className='ale-view'>
                        <Type beerData={ales} />                        
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
