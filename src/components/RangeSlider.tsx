/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTrackBackground, Range } from 'react-range';

const RangeSlider = ({ priceRange, setPriceRange }: any) => {
    const MIN = 0;
    const MAX = 1000;

    return (
        <div className='flex flex-col w-full'>
            <Range
                values={priceRange}
                step={1}
                min={MIN}
                max={MAX}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className='mb-4'
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '150px',
                            background: getTrackBackground({
                                values: priceRange,
                                colors: ['#ccc', '#020009', '#ccc'],
                                min: MIN,
                                max: MAX,
                            }),
                            borderRadius: '4px',
                            marginTop: '12px'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '22px',
                            width: '22px',
                            borderRadius: '12px',
                            backgroundColor: '#020009',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA'
                        }}
                    >
                        <div
                            style={{
                                height: '14px',
                                width: '5px',
                                backgroundColor: isDragged ? '#020009' : '#CCC'
                            }}
                        />
                    </div>
                )}
            />
            <div>
                Price: <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
        </div>
    )
}

export default RangeSlider