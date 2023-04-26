import { Fragment } from 'react'
import { LinearGradient } from '@visx/gradient'
import { format } from 'date-fns'
import { Text } from '../../core/Text'
import { ChartConfig, ChartPoint, ChartXYProps } from './useChartXY'
import { Separator } from '../../core/Separator'
import { PatternLines } from '@visx/pattern'
import { cx } from 'class-variance-authority'
import { rootClasses } from '../../config/css'
import { groupBy } from 'lodash'

export function ChartXYGraph({
  id,
  width,
  height,
  accessors,
  animationTrajectory,
  curve,
  data,
  config,
  scales,
  enabled,
  keys,
  isStack,
  todayOffset,
  numTicks,
  renderAreaSeries,
  renderAreaStack,
  renderBarGroup,
  renderBarStack,
  enableTooltipGlyph,
  renderTooltipGlyph,
  renderLineSeries,
  sharedTooltip,
  showHorizontalCrosshair,
  showTooltip,
  showVerticalCrosshair,
  snapTooltipToDatum,
  stackOffset,
  margin,
  theme,
  xAxisOrientation,
  yAxisOrientation,
  AreaSeries,
  AreaStack,
  Axis,
  BarGroup,
  BarSeries,
  BarStack,
  Grid,
  LineSeries,
  Tooltip,
  XYChart,
}: ChartXYProps & { width: number; height: number }) {
  return (
    <XYChart
      theme={theme.xyChartTheme}
      xScale={scales.x}
      yScale={scales.y}
      height={Math.min(400, height)}
      margin={margin}
      captureEvents
    >
      <g
        key={`today-line-${width}-${height}`} // force animate on update
      >
        <rect
          className="fill-gray-600 dark:fill-graydark-600 h-full w-px y-0"
          style={{
            // x:
            left: `${todayOffset * 100}%`,
          }}
        />
      </g>
      <LinearGradient
        id={'gradient-default'}
        from={'var(--colors-accent9)'}
        fromOpacity={1}
        to={'var(--colors-accent9)'}
        toOpacity={0.4}
      />
      {Object.entries(config.data).map(([key, val]) => (
        <Fragment key={key}>
          <PatternLines
            id={`pattern-${getIdKey(id, key)}`}
            height={6}
            width={6}
            stroke={val.color}
            strokeWidth={0.5}
            orientation={['diagonal']}
          />
          <LinearGradient
            id={`gradient-${getIdKey(id, key)}`}
            from={val.color}
            fromOpacity={1}
            to={val.color}
            toOpacity={isStack ? 0.4 : 1}
          />
        </Fragment>
      ))}
      <Grid
        key={`grid-${animationTrajectory}`} // force animate on update
        rows={false}
        columns={true}
        strokeDasharray="1,3"
        animationTrajectory={animationTrajectory}
        numTicks={numTicks}
      />
      {renderBarStack && (
        <BarStack offset={stackOffset}>
          {enabled.map((key) => (
            <BarSeries
              key={key}
              dataKey={key}
              data={data}
              xAccessor={accessors.x[key]}
              yAccessor={accessors.y[key]}
              colorAccessor={() => getColor(id, key, config)}
            />
          ))}
        </BarStack>
      )}
      {renderBarGroup && (
        <BarGroup>
          {enabled.map((key) => (
            <BarSeries
              key={key}
              dataKey={key}
              data={data}
              xAccessor={accessors.x[key]}
              yAccessor={accessors.y[key]}
              colorAccessor={() => getColor(id, key, config)}
            />
          ))}
        </BarGroup>
      )}
      {renderAreaSeries && (
        <>
          {enabled.map((key) => (
            <AreaSeries
              key={key}
              dataKey={key}
              data={data}
              xAccessor={accessors.x[key]}
              yAccessor={accessors.y[key]}
              stroke={getColor(id, key, config)}
              fill={getColor(id, key, config)}
              curve={curve}
            />
          ))}
        </>
      )}
      {renderAreaStack && (
        <AreaStack
          curve={curve}
          offset={stackOffset}
          renderLine={stackOffset !== 'wiggle'}
        >
          {enabled.map((key) => (
            <AreaSeries
              key={key}
              dataKey={key}
              data={data}
              xAccessor={accessors.x[key]}
              yAccessor={accessors.y[key]}
              stroke={getColor(id, key, config)}
              fill={getColor(id, key, config)}
            />
          ))}
        </AreaStack>
      )}
      {renderLineSeries && (
        <>
          {enabled.map((key) => (
            <LineSeries
              key={key}
              dataKey={key}
              data={data}
              xAccessor={accessors.x[key]}
              yAccessor={accessors.y[key]}
              stroke={getColor(id, key, config)}
              curve={curve}
            />
          ))}
        </>
      )}
      <Axis
        key={`time-axis-${animationTrajectory}`}
        orientation={xAxisOrientation}
        numTicks={numTicks}
        animationTrajectory={animationTrajectory}
        tickFormat={(d) => format(d, 'P')}
        tickLength={12}
        tickLabelProps={(p) => ({
          ...p,
          fill: theme.labels.color,
          fontFamily: theme.labels.fontFamily,
          y: '14px',
          fontWeight: '500',
          fontSize: '8',
        })}
      />
      <Axis
        key={`temp-axis-${animationTrajectory}`}
        label={
          stackOffset == null
            ? 'SC'
            : stackOffset === 'expand'
            ? 'Fraction of total'
            : ''
        }
        orientation={yAxisOrientation}
        numTicks={numTicks}
        tickLength={0}
        rangePadding={0}
        animationTrajectory={animationTrajectory}
        // values don't make sense in stream graph
        tickFormat={stackOffset === 'wiggle' ? () => '' : undefined}
      />
      {showTooltip && (
        <Tooltip<ChartPoint>
          showHorizontalCrosshair={showHorizontalCrosshair}
          showVerticalCrosshair={showVerticalCrosshair}
          snapTooltipToDatumX={snapTooltipToDatum}
          snapTooltipToDatumY={snapTooltipToDatum}
          showDatumGlyph={snapTooltipToDatum && !renderBarGroup}
          showSeriesGlyphs={sharedTooltip && !renderBarGroup}
          renderGlyph={enableTooltipGlyph ? renderTooltipGlyph : undefined}
          renderTooltip={({ tooltipData }) => {
            const keys = (
              sharedTooltip
                ? Object.keys(tooltipData?.datumByKey ?? {})
                : [tooltipData?.nearestDatum?.key]
            ).filter((key) => key) as string[]

            const nearestDatum = tooltipData?.nearestDatum?.datum
            const nearestKey = tooltipData?.nearestDatum?.key

            const formatTimestamp =
              config.formatTimestamp || ((v) => format(v, 'Pp'))

            const keyGroups = Object.entries(
              groupBy(
                keys.reverse().map((key) => ({
                  key,
                  category: config.data?.[key]?.category || '',
                })),
                'category'
              )
            )

            return (
              <div className={cx(rootClasses, 'flex flex-col gap-2 py-1')}>
                <Text
                  font="mono"
                  size="12"
                  color="contrast"
                  className="text-end"
                >
                  {nearestDatum
                    ? formatTimestamp(accessors.date(nearestDatum))
                    : 'No date'}
                </Text>
                <Separator color="panel" className="w-full" />
                <div
                  className={cx(
                    'grid gap-x-6 gap-y-4',
                    keyGroups.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                  )}
                >
                  {keyGroups.map(([group, keys]) => {
                    const total = nearestDatum
                      ? keys.reduce((acc, { key }) => {
                          const val = accessors['y'][key](nearestDatum)
                          if (val == null || Number.isNaN(val)) {
                            return acc
                          }
                          return acc + val
                        }, 0)
                      : 0

                    return (
                      <div
                        key={group}
                        className="flex flex-col gap-2 w-[250px]"
                      >
                        {group && <Text weight="semibold">{group}</Text>}
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 items-center">
                          {keys.map(({ key }) => {
                            const val =
                              nearestDatum && accessors['y'][key](nearestDatum)

                            return (
                              <Fragment key={key}>
                                <Text
                                  color="accent"
                                  style={{
                                    color: config.data?.[key]?.color,
                                  }}
                                  className={cx(
                                    nearestKey === key ? 'underline' : ''
                                  )}
                                >
                                  {config.data?.[key]?.label || key}
                                </Text>
                                <Text
                                  size="12"
                                  style={{
                                    textAlign: 'end',
                                  }}
                                  className={cx(
                                    nearestKey === key ? 'underline' : ''
                                  )}
                                >
                                  {val == null || Number.isNaN(val)
                                    ? '–'
                                    : config.format(val)}
                                </Text>
                              </Fragment>
                            )
                          })}
                          {keys.length > 1 && isStack && (
                            <>
                              <Text className="pt-2">total</Text>
                              <Text
                                size="12"
                                weight="bold"
                                className="pt-2 text-end"
                              >
                                {config.format(total)}
                              </Text>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }}
        />
      )}
    </XYChart>
  )
}

function getIdKey(id: string, key: string) {
  return `${id}-${key}`
}

export function getColor(id: string, key: string, config: ChartConfig) {
  const idKey = getIdKey(id, key)

  if (!config.data?.[key]) {
    return `url(#gradient-default)`
  }

  return config.data[key].pattern
    ? `url(#pattern-${idKey})`
    : `url(#gradient-${idKey})`
}
