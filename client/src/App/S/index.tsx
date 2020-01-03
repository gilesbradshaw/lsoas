// @ts-nocheck
import React from 'react'

import Chart from 'react-apexcharts'
import Pre from '../Pre'
import Scroll from '../Scroll'

import use from './use'
import query from './query'

export default () => {
  const config = use({
    query,
    get: data =>
      data
        ?.parliamentaryConstituencies
  })

  return <Scroll>
    <div
      style={{
        width: '800px',
        height: '600px'
      }}
    >
      <Chart
        {...{
          ...config,
          type: 'scatter',
          width: 800,
          height: 600,
        }}
      />
    </div>
    <Pre>
      {JSON.stringify(config, null, 2)}
    </Pre>
  </Scroll>
}