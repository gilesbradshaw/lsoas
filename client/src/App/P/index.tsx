// @ts-nocheck
import React from 'react'

import Chart from 'react-apexcharts'
import Pre from '../Pre'
import Scroll from '../Scroll'

import use from '../use'
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
        width: '1600px',
        height: '800px'
      }}
    >
      <Chart
        {...{
          ...config,
          type: 'scatter',
          width: 1600,
          height: 800,
        }}
      />
    </div>
    <Pre>
      {JSON.stringify(config, null, 2)}
    </Pre>
  </Scroll>
}