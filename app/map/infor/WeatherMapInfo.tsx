import { forwardRef } from 'react'

type Props = {
  layerLabel: string
}

const WeatherMapInfo = forwardRef<HTMLSpanElement, Props>(({ layerLabel }, ref) => {
  return (
    <>
      {/* <div className='absolute w-full flex flex-col text-center bottom-0 m-2 text-white p-5 z-10'>
          <div>
            <span className='text-body'>{timeText}</span>
            <button
              className='rounded-3xl text-xs p-2 bg-accent-blue text-secondary-white'
              onClick={() => handlePlayAnimation()}
            >
              {isPlaying ? 'Pause' : 'Play 3600x'}
            </button>
          </div>
          <input
            ref={timeSlider}
            type='range'
            min={0}
            max={11}
            step={1}
            onClick={(event: MouseEvent) => handleSetValueInput(event)}
          />
        </div> */}
      <div className='absolute text-label m-7 text-secondary-white z-10'>
        <p className='capitalize'>{layerLabel}</p>
        <span ref={ref}></span>
      </div>
    </>
  )
})
export default WeatherMapInfo
